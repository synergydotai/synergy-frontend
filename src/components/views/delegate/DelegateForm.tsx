import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import Input from "@/components/atoms/Input";
// import { useSession, useUserTierInfo } from "@/hooks/userHooks";
import { TAO } from "@/utils/constants";
import { FC, FormState } from "@/utils/types";
import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";
import taoLogo from "@/assets/logos/tao.svg";
import { formatWithSeparator } from "@/utils/helper";
import { useWallet } from "@/hooks/walletHooks";
import SvgSpinner from "@/components/atoms/Spinner";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import SuccessNotification from "./SuccessNotification";
import SelectAccordion from "@/components/molecules/SelectAccordion";
import { toast } from "react-toastify";

const DelegateForm: FC = () => {
  const { connect, getBalance, stakeTao, unstakeTao } = useWallet();
  //   const { data: userTier, isFetching: loadingUserTier } = useUserTierInfo();

  const [wallets, setWallets] = useState<InjectedAccountWithMeta[]>([]);
  const [wallet, setWallet] = useState<InjectedAccountWithMeta>();
  const [walletBalance, setWalletBalance] = useState({ staked: 0, free: 0 });
  const [amount, setAmount] = useState("");
  const [connectingWallet, setConnectingWallet] = useState(false);
  const [fetchingBalance, setFetchingBalance] = useState(false);
  const [staking, setStaking] = useState(false);
  const [unstaking, setUnstaking] = useState(false);
  const [status, setStatus] =
    useState<
      FormState<{ action: "delegation" | "undelegation"; amount: number }>
    >();

  //   functions
  const setMax = () => setAmount(walletBalance.free.toString());
  const handleWalletChange = (address: string) => {
    const wallet = wallets?.find((wallet) => wallet.address === address);
    setWallet(wallet);
  };
  const connectWallet = async () => {
    setConnectingWallet(true);
    const wallets = await connect();
    if (wallets) {
      setWallets(wallets?.data?.accounts);
      setWallet(wallets?.data?.account);
    }
    setConnectingWallet(false);
  };
  const fetchWalletBalance = async (wallet: InjectedAccountWithMeta) => {
    setFetchingBalance(true);
    const balance = await getBalance(wallet);
    if (balance !== undefined) setWalletBalance(balance);
    setFetchingBalance(false);
  };
  const handleDelegate = async () => {
    if (!Number(amount)) {
      return toast.error("Please enter an amount");
    }
    if (Number(walletBalance) === 0 || Number(walletBalance) < Number(amount))
      return toast.error("Wallet balance too low");
    setStaking(true);
    if (wallet) {
      stakeTao(wallet, Number(amount), (res) => {
        setStatus(res);
        setStaking(false);
      });
    }
  };
  const handleUndelegate = async () => {
    if (!Number(amount)) {
      return toast.error("Please enter an amount");
    }
    setUnstaking(true);
    if (wallet) {
      unstakeTao(wallet, Number(amount), (res) => {
        setStatus(res);
        setUnstaking(false);
      });
    }
  };

  //   effects
  useEffect(() => {
    if (wallet) fetchWalletBalance(wallet);
  }, [wallet]);
  useEffect(() => {
    if (!(status && "success" in status)) return;
    if (!status?.success) {
      toast.error(status.message);
    }
  }, [status]);

  return (
    <div className="w-full md:min-w-[612px] md:w-1/2 bg-white rounded-x20 p-10 flex flex-col justify-between relative">
      {!status?.success ? (
        <>
          {(connectingWallet || fetchingBalance) && (
            <div className="absolute z-[1] bg-white  opacity-40 top-0 left-0 w-full h-full flex py-5 items-center justify-center rounded-x20 font-mono text-xs flex-col gap-1">
              <SvgSpinner />
              <span>
                {fetchingBalance ? "Getting balance..." : "Connnecting..."}
              </span>
            </div>
          )}
          <header className="w-11/12 text-gray-dark mb-6 ">
            <h2 className="text-4xl font-medium mb-5">Delegate TAO</h2>
            <span className="font-mono text-gray text-sm">
              Maximize your income with Synergy validator and boost its capacity
              on the Bittensor network. Delegating is risk free and the tao
              never leaves your wallet
            </span>
          </header>
          <div className="flex flex-col gap-4">
            {/* <input hidden readOnly name="balance" value={walletBalance || ""} /> */}
            <div className="grid">
              <span className="text-gray font-mono text-sm">Wallet:</span>
              {wallets.length ? (
                <>
                  <SelectAccordion
                    triggerEl={({ selected }) => <>{selected}</>}
                    value={wallet?.address}
                    onChange={handleWalletChange}
                    options={[
                      ...wallets?.map((wallet) => {
                        return { label: wallet.address, value: wallet.address };
                      }),
                      //   {
                      //     action: connectWallet,
                      //     label: (
                      //       <>
                      //         <Icon name="icon-plus" className="!text-sm" />
                      //         <span>Add wallet</span>
                      //       </>
                      //     ),
                      //   },
                    ]}
                    defaultSelected={wallet?.address}
                  />
                </>
              ) : (
                <Button
                  type="button"
                  color="white"
                  className="!justify-start px-6 py-3 border border-gray-lighter rounded-xl my-1 mt-2.5"
                  onClick={connectWallet}
                >
                  Connect wallet
                </Button>
              )}
            </div>
            {wallet && (
              <div className="grid gap-2">
                <Input
                  name="amount"
                  placeholder="Enter TAO amount"
                  value={amount || ""}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setAmount(e.currentTarget.value)
                  }
                  required
                  classNames={{ inputContainer: "!my-0" }}
                />
                <div className="flex items-center justify-between">
                  <span className="text-black text-sm font-medium">
                    Available Balance:{" "}
                    <span className="text-primary">
                      {walletBalance.free}
                      {TAO}
                    </span>
                  </span>
                  <button
                    type="button"
                    className="text-white bg-gray-darker rounded-[5px] px-3.5 py-1.5 text-sm font-medium"
                    onClick={setMax}
                  >
                    MAX
                  </button>
                </div>
              </div>
            )}
            <footer className="grid gap-2.5 pt-6">
              <Button
                endContent={<Icon name="icon-chevron-right" />}
                className="rounded-x10 p-3.5 w-full"
                disabled={!wallet}
                onClick={handleDelegate}
                loading={staking}
              >
                Delegate
              </Button>
              <Button
                type="button"
                color="gray"
                className="rounded-x10 p-4 w-full"
                disabled={!wallet}
                onClick={handleUndelegate}
                loading={unstaking}
              >
                Undelegate
              </Button>
            </footer>
          </div>
          <footer className="flex justify-between pt-10">
            <div className="grid gap-2.5">
              <span className="text-gray-dark text-sm">
                Current stake balance:
              </span>
              <div className="flex gap-5 items-end">
                <div className="gap-2 flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-darker rounded-x10">
                    <Image
                      src={taoLogo}
                      height={18}
                      width={18}
                      alt="tao logo"
                    />
                  </div>
                  <h3 className="text-3xl leading-none">
                    {fetchingBalance
                      ? "0.00" + TAO
                      : formatWithSeparator(walletBalance.staked || 0, " ") +
                        TAO}
                  </h3>
                </div>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <SuccessNotification state={status} />
      )}
    </div>
  );
};

export default DelegateForm;
