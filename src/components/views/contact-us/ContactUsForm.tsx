"use client";
import { sendContactUsMail } from "@/app/contact/action";
import Button from "@/components/atoms/Button";
import Checkbox from "@/components/atoms/Checkbox";
import Icon from "@/components/atoms/Icon";
import Input from "@/components/atoms/Input";
import SubmitButton from "@/components/atoms/SubmitButton";
import { FC, FormState } from "@/utils/types";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

const ContactUsForm: FC = () => {
  const [state, action] = useFormState<FormState, FormData>(
    sendContactUsMail,
    undefined
  );

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
    } else {
      toast.error(state?.message);
    }
  }, [state]);

  return (
    <form className="flex flex-col gap-1" action={action}>
      <Input type="email" name="email" label="Email" required />
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
        <Checkbox name="allowGetInTouch" id="allowGetInTouch">
          By submiting you confirm you allow us to get in touch with you using
          this information
        </Checkbox>
      </div>
      <SubmitButton
        color="primary"
        endContent={<Icon name="icon-chevron-right" />}
        className="w-full p-3 rounded-x10 mt-2"
      >
        Get in touch
      </SubmitButton>
    </form>
  );
};

export default ContactUsForm;
