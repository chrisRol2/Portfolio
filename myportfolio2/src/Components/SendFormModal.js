import { useContext } from "react";
import styled from "styled-components";
import ContactFormContext from "../Context/ContactFormContext";
import { Detector } from "../Helpers/NavigatorDetector";

const ModalContainer = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${!Detector("firefox")
    ? (props) => (props.isOpen ? "#bbbbbb60" : "#ffffff00")
    : "#ffffffda"};
  backdrop-filter: blur(3px);
  justify-content: center;
  align-items: center;
`;

const Modal = styled.article`
  height: 50%;
  /* width: 50%; */
  /* border: 1px solid #147e92; */

  /* width: 50%; */

  aspect-ratio: 4/3;
  background-color: white;

  box-shadow: 0px 0px 8px 3px
    ${({ state }) => {
      switch (state) {
        case "sending":
          return "#E7D51B";
        case "success":
          return "#0a0";
        default:
          return "#d00";
      }
    }};
  transition: box-shadow 0.5s, width 0.2s, height 0.2s;

  border-radius: var(--borderRadius);
  display: flex;
  flex-direction: column;
  @media (max-width: 853px) {
    /* background-color: red; */
    width: 80vw;
    height: auto;
  }
`;
const Img = styled.img`
  height: 80%;
  width: auto;
  margin: auto;
`;

function SendFormModal() {
  const { modalOpen, isSend, setModalOpen } = useContext(ContactFormContext);

  let isSendImg = reqimg(isSend);
  const close = () => {
    if (isSend !== "sending") setModalOpen(false);
  };
  return (
    <>
      {modalOpen && (
        <ModalContainer onClick={() => close()}>
          <Modal state={isSend} onClick={(e) => e.stopPropagation()}>
            <Img src={isSendImg} alt="" />
            {!isSend && (
              <p>
                Hubo un error de conexion, porfavor comuniquese a
                christopher@chrisrol.xyz
              </p>
            )}
          </Modal>
        </ModalContainer>
      )}
    </>
  );
}

const reqimg = (state) => {
  return require(`../Images/Contact/${state}.png`).default;
};

export default SendFormModal;
