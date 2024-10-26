import Button from "@/components/atoms/Button";
import Checkbox from "@/components/atoms/Checkbox";
import Icon from "@/components/atoms/Icon";
import Input from "@/components/atoms/Input";
import { FC } from "@/utils/types";
import React from "react";

const ContactUsForm: FC = () => {
  return (
    <div className="min-w-full md:min-w-[612px] !max-w-[930px] flex-1 bg-white rounded-x20 p-10 flex flex-col justify-between relative">
      <header className="w-11/12 text-gray-dark mb-6 ">
        <h2 className="text-4xl font-medium mb-5">Contact Us</h2>
        <span className="font-mono text-gray text-sm">
          Get in touch with us to help you deliver a more powerful product
          leveraging biττensor subnets
        </span>
      </header>
      <form className="flex flex-col gap-1">
        <Input name="topic" label="Topic" required />
        <Input name="company" label="Company" required />
        <Input name="role" label="Role" required />
        <Input
          name="message"
          placeholder="What message do you have for us?"
          classNames={{input: "placeholder:text-gray-darker placeholder:text-sm"}}
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
    </div>
  );
};

export default ContactUsForm;
