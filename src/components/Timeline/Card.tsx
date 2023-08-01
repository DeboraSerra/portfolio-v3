import { TimelineInterface } from "@/helpers";
import useOnScreen from "@/helpers/useOnScreen";
import { Subtitle, Text } from "@/styles/styled";
import Image from "next/image";
import { useRef } from "react";

interface Props extends TimelineInterface {
  index: number;
}

const Card = ({
  index,
  img,
  title,
  width,
  height,
  from,
  to,
  content,
}: Props) => {
  const card = useRef(null);
  const isVisible = useOnScreen(card);

  return (
    <div
      ref={card}
      className={`item ${index % 2 === 0 ? "left" : "right"} ${
        isVisible ? "active" : ""
      }`}
    >
      <div className='image'>
        <Image src={img} alt={title} width={width} height={height} />
      </div>
      <Subtitle className='small title'>
        <span className='date'>
          {from} - {to ?? "current"}{" "}
        </span>
        {title}
      </Subtitle>
      <Text className='small'>{content}</Text>
    </div>
  );
};

export default Card;
