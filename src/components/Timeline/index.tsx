import { timeline } from "@/helpers";
import Card from "./Card";
import * as S from "./Timeline.styled";

const Timeline = () => {
  return (
    <S.Main>
      <div className='line' />
      {timeline.map((item, index) => (
        <Card {...item} index={index} key={index} />
      ))}
    </S.Main>
  );
};

export default Timeline;
