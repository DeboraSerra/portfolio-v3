import { TimelineInterface } from "@/helpers";
import { Subtitle, Text } from "@/styles/styled";
import Image from "next/image";

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
  return (
    <div className={`item ${index % 2 === 0 ? "left" : "right"}`}>
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
