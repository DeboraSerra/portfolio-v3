import { Subtitle, Text } from "@/styles/styled";
import Image from "next/image";
import Link from "next/link";

interface Props {
  href: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  text?: string;
}

const Card = ({ href, src, width, height, alt, title, text }: Props) => {
  return (
    <Link href={href} className="projects__card">
      <div className='projects__card-image'>
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
      <Subtitle className="small">{title}</Subtitle>
      <Text>{text}</Text>
    </Link>
  );
};

export default Card;
