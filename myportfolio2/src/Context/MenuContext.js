import { useState, createContext, useEffect } from "react";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const data = {
    MenuIsOpen: isOpen,
    MenuSetIsOpen: setIsOpen,
  };
  useEffect(() => {
    document.body.style.overflow = `${isOpen ? "hidden" : "visible"}`;
  }, [isOpen]);
  return <MenuContext.Provider value={data}>{children}</MenuContext.Provider>;
};
export { MenuProvider };
export default MenuContext;
