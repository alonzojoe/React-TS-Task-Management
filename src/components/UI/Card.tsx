import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  background:
    | "primary"
    | "primaryDark"
    | "lightPrimary"
    | "lightOrange"
    | "lightBlue"
    | "cardBg";
  width: string;
  shrink?: string;
};

const Card = ({ children, background, width, shrink = "" }: CardProps) => {
  console.log(`bg-${background}`);
  return (
    <div
      className={`p-5 rounded-3xl shadow-md bg-${background} ${width} ${shrink}`}
    >
      {children}
    </div>
  );
};

export default Card;
