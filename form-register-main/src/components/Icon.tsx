import React, { FC } from "react";
import { icons } from "lucide-react";

type IconProps = {
  name: any;
  size?: number;
  color?: string;
  className?: string;
};

const Icon: FC<IconProps> = ({
  name,
  size = 20,
  color = "currentColor",
  className,
}) => {
  // @ts-ignore
  const IconComponent = icons[name];

  return <IconComponent size={size} color={color} className={className} />;
};

export default Icon;
