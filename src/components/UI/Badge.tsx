import React from "react";
type BadgeProps = {
  children: React.ReactNode;
  background: string;
  width?: string;
  shrink?: string;
  padding?: string;
  shadow?: string;
};

const Badge = ({
  children,
  background = "bg-white",
  width = "",
  shrink,
  padding,
  shadow,
}: BadgeProps) => {
  return (
    <div
      className={`${padding} rounded-xl ${shadow} ${background} ${width} ${shrink} flex items-center`}
    >
      {children}
    </div>
  );
};

export default Badge;
