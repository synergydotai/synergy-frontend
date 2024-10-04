"use client";
import { FormState, WalletInfo } from "@/utils/types";
import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
  web3FromSource,
} from "@polkadot/extension-dapp";
import { stringToHex } from "@polkadot/util";
import {
  InjectedExtension,
  InjectedAccountWithMeta,
} from "@polkadot/extension-inject/types";
import { toast, ToastContainerProps } from "react-toastify";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { encodeAddress } from "@polkadot/util-crypto";
import { Struct, u128, u32 } from "@polkadot/types";
import {
  BITTENSOR_RPC_ENDPOINT,
  NEXT_PUBLIC_VALIDATOR_HOTKEY_WALLET,
  PLANCK_PER_TAO,
} from "@/utils/constants";

const toastProps: ToastContainerProps = { position: "top-center" };

export interface FrameSystemAccountInfo extends Struct {
  readonly nonce: u32;
  readonly consumers: u32;
  readonly providers: u32;
  readonly sufficients: u32;
  readonly data: PalletBalancesAccountData;
}
export interface PalletBalancesAccountData extends Struct {
  readonly free: u128;
  readonly reserved: u128;
  readonly frozen: u128;
  readonly flags: u128;
}

export const useWallet = () => {
  //   connect to user's wallet to retrieve wallet details
  const connect = async () => {
    try {
      let extensions: InjectedExtension[] = [],
        accounts: InjectedAccountWithMeta[] = [];

      if (typeof window !== "undefined") {
        // enable extension
        extensions = await web3Enable("Synergy");
        //retrive wallet
        accounts = await web3Accounts();
      } else {
        return null;
      }

      //   if wallet extension doesn't exists
      if (extensions.length === 0) {
        throw new Error(
          "No extension installed, installed the bittensor wallet and try again"
        );
      }

      // if an account wasn't provided
      if (accounts.length === 0) {
        // disconnect is currently not implemented
        // extensions[0].provider?.disconnect();
        throw new Error("No wallet connected, connect a wallet");
      }

      return { success: true, data: { account: accounts[0], accounts } };
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Couldn't connect to wallet",
        toastProps
      );
    }
  };

  //   signs the provided message
  const sign = async (message: string, wallet: InjectedAccountWithMeta) => {
    try {
      let injector: InjectedExtension;

      if (typeof window !== "undefined") {
        // retrieve injected extension
        injector = await web3FromSource(wallet.meta.source);
      } else {
        throw new Error("Window object not found");
      }
      // get signer
      const signRaw = injector?.signer?.signRaw;

      // if signer not available
      if (!signRaw) {
        throw new Error("Signer not available, contact the developer.");
      }

      const { signature } = await signRaw({
        address: wallet.address,
        data: stringToHex(message),
        type: "bytes",
      });
      return signature.slice(2);
      // if not, throw error
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Couldn't sign to message",
        toastProps
      );
    }
  };

  const getBalance = async (wallet: InjectedAccountWithMeta) => {
    try {
      if (typeof window === "undefined") throw new Error("No window");
      // Connect to the Bittensor node (replace with your node endpoint)
      const wsProvider = new WsProvider(BITTENSOR_RPC_ENDPOINT);
      const api = await ApiPromise.create({ provider: wsProvider });
      await api.isReady;

      // Query the account balance
      const ksmAddress = encodeAddress(wallet.address, 2);
      const { data } = await api.query.system.account<FrameSystemAccountInfo>(
        ksmAddress
      );

      const stakedBalance = await api.query.subtensorModule.stake(
        NEXT_PUBLIC_VALIDATOR_HOTKEY_WALLET,
        wallet.address
      );

      return {
        free: parseFloat(data.free.toString()) / PLANCK_PER_TAO,
        staked: parseFloat(stakedBalance.toString()) / PLANCK_PER_TAO,
      };
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Couldn't get wallet balance",
        toastProps
      );
    }
  };

  const stakeTao = async (
    wallet: InjectedAccountWithMeta,
    amount: number,
    onResponseResolve: (
      response: FormState<{ action: "delegation"; amount: number }>
    ) => void
  ) => {
    try {
      let account;
      if (typeof window !== "undefined") {
        await web3Enable("Synergy");
        account = await web3FromAddress(wallet.address);
      }

      if (!account) throw new Error("Account not found");

      // Connect to the Bittensor node (replace with your node endpoint)
      const wsProvider = new WsProvider(BITTENSOR_RPC_ENDPOINT);
      const api = await ApiPromise.create({ provider: wsProvider });

      await api.isReady;

      const stakeTx = api.tx.subtensorModule.addStake(
        NEXT_PUBLIC_VALIDATOR_HOTKEY_WALLET,
        amount * PLANCK_PER_TAO
      );

      await stakeTx.signAndSend(
        wallet.address,
        {
          signer: account.signer,
          withSignedTransaction: !0,
        },
        async (result) => {
          const { dispatchError, isInBlock, isFinalized } = result;
          if (!isFinalized) return;
          console.log("is finalized:", result);
          if (dispatchError) {
            if (dispatchError.isModule) {
              const { docs, name, section } = api.registry.findMetaError(
                dispatchError.asModule
              );
              console.error(`${section}.${name}: ${docs.join(" ")}`);
              onResponseResolve({
                success: false,
                message: `${name}: ${docs.join(" ")}`,
              });
            } else {
              onResponseResolve({
                success: false,
                message: dispatchError.toString(),
              });
            }
          } else {
            // on success cb
            console.log("is in block: stake tx successful");
            onResponseResolve({
              success: true,
              data: { action: "delegation", amount },
            });
          }
        }
      );
    } catch (err) {
      onResponseResolve({
        success: false,
        message:
          err instanceof Error
            ? err.message
            : "Something went wrong, couldn't stake tao!",
      });
    }
  };

  const unstakeTao = async (
    wallet: InjectedAccountWithMeta,
    amount: number,
    onResponseResolve: (
      response: FormState<{ action: "undelegation"; amount: number }>
    ) => void
  ) => {
    try {
      let account;
      if (typeof window !== "undefined") {
        await web3Enable("Synergy");
        account = await web3FromAddress(wallet.address);
      }

      if (!account) throw new Error("Account not found");

      // Connect to the Bittensor node (replace with your node endpoint)
      const wsProvider = new WsProvider(BITTENSOR_RPC_ENDPOINT);
      const api = await ApiPromise.create({ provider: wsProvider });

      await api.isReady;

      const unstakeTx = api.tx.subtensorModule.removeStake(
        NEXT_PUBLIC_VALIDATOR_HOTKEY_WALLET,
        amount * PLANCK_PER_TAO
      );

      await unstakeTx.signAndSend(
        wallet.address,
        {
          signer: account.signer,
        },
        (result) => {
          const { dispatchError, isFinalized } = result;
          if (!isFinalized) return;
          if (dispatchError) {
            if (dispatchError.isModule) {
              const { docs, name, section } = api.registry.findMetaError(
                dispatchError.asModule
              );
              console.error(`${section}.${name}: ${docs.join(" ")}`);
              onResponseResolve({
                success: false,
                message: `${name}: ${docs.join(" ")}`,
              });
            } else {
              onResponseResolve({
                success: false,
                message: dispatchError.toString(),
              });
            }
          } else {
            // on success cb
            onResponseResolve({
              success: true,
              data: { action: "undelegation", amount },
            });
          }
        }
      );
    } catch (err) {
      onResponseResolve({
        success: false,
        message:
          err instanceof Error
            ? err.message
            : "Something went wrong, couldn't unstake tao!",
      });
    }
  };

  return { connect, sign, getBalance, stakeTao, unstakeTao };
};
