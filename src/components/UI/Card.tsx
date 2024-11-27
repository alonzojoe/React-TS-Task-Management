import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  background: string;
  width: string;
  shrink?: string;
};

const Card = ({ children, background, width, shrink = "" }: CardProps) => {
  return (
    <div
      className={`p-5 rounded-3xl shadow-md ${background} ${width} ${shrink}`}
    >
      {children}
    </div>
  );
};

export default Card;
