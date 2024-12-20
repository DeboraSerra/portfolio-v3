import { Project } from "@/helpers";
import { Text, Title } from "@/styles/styled";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { GrClose } from "react-icons/gr";
import { useOnClickOutside } from "usehooks-ts";

interface Props {
  project: Project;
  setOpenModal: (val: boolean) => void;
}

const Modal = ({
  project: { description, image, name, repository },
  setOpenModal, 
}: Props) => {
  const modal = useRef(null);
  useOnClickOutside(modal, () => setOpenModal(false));

  return (
    <div className='project__modal'>
      <div className='project__modal-box' ref={modal}>
        <button
          className='project__modal-close'
          onClick={() => setOpenModal(false)}
        >
          <GrClose />
        </button>
        <Title className='center'>{name}</Title>
        <div className='project__modal-img'>
          <Image src={image} alt={name} width={600} height={360} />
        </div>
        <Text className='project__modal-text'>{description}</Text>
        <Link href={repository}>See more</Link>
      </div>
    </div>
  );
};

export default Modal;
