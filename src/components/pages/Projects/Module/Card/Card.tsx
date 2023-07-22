import { Subtitle } from "@/styles/styled";
import Image from "next/image";

interface Props {
  name: string;
  image: string;
  onClick: () => void
}

const Card = ({ name, image, onClick }: Props) => {
  return (
    <div className="project__card" onClick={onClick}>
      <Subtitle>{name}</Subtitle>
      <div className="project__img">
        <Image src={image} alt={name} width={128} height={120} />
      </div>
    </div>
  );
};

export default Card;
