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
};

const Card = ({ children, background, width }: CardProps) => {
  return (
    <div className={`p-5 rounded-3xl bg-${background} ${width}`}>
      {children}
    </div>
  );
};

export default Card;
