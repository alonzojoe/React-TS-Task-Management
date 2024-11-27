import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  background:
    | "primary"
    | "primaryDark"
    | "lightPrimary"
    | "lightOrange"
    | "lightBlue";
  width: string;
  shrink?: string;
};

const Card = ({ children, background, width, shrink = null }: CardProps) => {
  console.log(`bg-${background}`);
  return (
    <div className={`p-5 rounded-3xl bg-${background} ${width} ${shrink}`}>
      {children}
    </div>
  );
};

export default Card;
