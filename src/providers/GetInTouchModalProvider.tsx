import GetInTouchModal from "@/components/views/home/GetInTouchModal";
import { FC } from "@/utils/types";
import React, { createContext, useState } from "react";

type GetInTouchModalContextType = {
  isOpen: boolean;
  open: (email: string) => void;
  close: () => void;
};

export const GetInTouchModalContext = createContext<GetInTouchModalContextType>(
  {
    isOpen: false,
    open: () => {},
    close: () => {},
  }
);

const GetInTouchModalProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <GetInTouchModalContext.Provider
      value={{
        isOpen,
        close: () => setIsOpen(false),
        open: (email: string) => {
          setIsOpen(true);
          setEmail(email);
        },
      }}
    >
      {children}
      <GetInTouchModal email={email} />
    </GetInTouchModalContext.Provider>
  );
};

export default GetInTouchModalProvider;
