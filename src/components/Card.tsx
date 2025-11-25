import type { MotionValue } from "motion";
import type { CardItem } from "../type";
import { ImageChanger } from "./ImageChanger";

type CardProps = {
  data: CardItem;
  mousePosition: {x?: MotionValue<number>, y?: MotionValue<number>};
  className?: string;
};

export const Card = ({ data, mousePosition, className }: CardProps) => {

  return (
    <div className={"card " + className}>
      <div className="imageContainer">
      <ImageChanger images={data.images} mousePosition={mousePosition} />
        <div className="images"></div>
        <img src={data.mainImage} alt={data.name} srcSet="" className="image" />
      </div>
      <div className="textContainer">
        <div>
          <h2>{data.name}</h2>
          <p>{data.author}</p>
          <p>{data.source}</p>
        </div>
      </div>
    </div>
  );
};
