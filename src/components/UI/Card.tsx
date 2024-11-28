import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  background: string;
  width: string;
  shrink?: string;
  padding?: string;
};

const Card = ({
  children,
  background,
  width,
  shrink = "",
  padding = "p-5",
}: CardProps) => {
  return (
    <div
      className={`${padding} rounded-3xl shadow-md ${background} ${width} ${shrink}`}
    >
      {children}
    </div>
  );
};

export default Card;
