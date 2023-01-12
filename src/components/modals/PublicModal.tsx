import { useEffect, useRef } from "react";
import styled from "styled-components";
import DeleteModal from "./DeleteModal";

const BaseOutDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface PublicModalType {
  isType?: string;
  isModal: boolean;
  isModalNum: number;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PublicModal({
  isType,
  isModal,
  isModalNum,
  setIsModal,
}: PublicModalType) {
  const divRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const outCliekClose = (e: MouseEvent) => {
      if (
        isModal &&
        divRef.current &&
        divRef.current.id === (e.target as HTMLDivElement).id
      )
        setIsModal(false);
    };
    if (isModal) window.addEventListener("click", outCliekClose);
    return () => {
      window.removeEventListener("click", outCliekClose);
    };
  }, [isModal, setIsModal]);
  return (
    <BaseOutDiv id="modal_base_div" ref={divRef}>
      {isModalNum === 1 && <DeleteModal setIsModal={setIsModal} />}
    </BaseOutDiv>
  );
}
