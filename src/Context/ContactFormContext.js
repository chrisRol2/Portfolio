import { useState, createContext } from "react";

const ContactFormContext = createContext();

const ContactFormProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isSend, setIsSend] = useState("sending");

  const data = {
    setModalOpen,
    setIsSend,
    modalOpen,
    isSend,
  };

  return (
    <ContactFormContext.Provider value={data}>
      {children}
    </ContactFormContext.Provider>
  );
};
export { ContactFormProvider };
export default ContactFormContext;
