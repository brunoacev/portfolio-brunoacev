"use client";

import * as React from "react";

type TimeCard = {
  isOpen: boolean;
  handleOpen: () => void;
};

const TimeCardContext = React.createContext<TimeCard>({
  isOpen: false,

  handleOpen: () => {},
});

function TimeContextProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <TimeCardContext.Provider value={{ isOpen, handleOpen }}>
      {children}
    </TimeCardContext.Provider>
  );
}

export { TimeContextProvider, TimeCardContext };
