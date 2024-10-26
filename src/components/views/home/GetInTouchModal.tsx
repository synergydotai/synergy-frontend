import Button from "@/components/atoms/Button";
import Checkbox from "@/components/atoms/Checkbox";
import Icon from "@/components/atoms/Icon";
import Input from "@/components/atoms/Input";
import Modal from "@/components/organisms/Modal";
import { useGetInTouchModal } from "@/hooks/popupHooks";
import { FC } from "@/utils/types";
import React from "react";

type Props = {
  email: string;
};

const GetInTouchModal: FC<Props> = ({ email }) => {
  const { isOpen, close } = useGetInTouchModal();
  return (
    <Modal
      isOpen={isOpen}
      close={close}
      classNames={{
        main: "rounded-xl p-6 grid gap-5 w-[500px] max-w-[90%] text-sm shadow-md",
      }}
    >
      <header className="flex items-center justify-between">
        <h3 className="text-xl grid">
          <span>Send us a message</span>
          <span className="font-mono text-xs text-gray-light">as {email}</span>
        </h3>
        <button onClick={close}>
          <Icon name="icon-x-close" />
        </button>
      </header>
      <form className="flex flex-col gap-1">
        <Input name="topic" label="Topic" required />
        <Input name="company" label="Company" required />
        <Input name="role" label="Role" required />
        <Input
          name="message"
          placeholder="What message do you have for us?"
          classNames={{
            input: "placeholder:text-gray-darker placeholder:text-sm",
          }}
          required
          multiline
          rows={4}
        />
        <div className="my-3">
          <Checkbox>
            By submiting you confirm you allow us to get in touch with you using
            this information
          </Checkbox>
        </div>
        <Button
          color="primary"
          endContent={<Icon name="icon-chevron-right" />}
          className="w-full p-3 rounded-x10 mt-2"
        >
          Get in touch
        </Button>
      </form>
    </Modal>
  );
};

export default GetInTouchModal;
