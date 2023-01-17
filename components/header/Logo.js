import React from "react";
import Image from "next/image";

const Logo = ({ target, ...restProps }) => {
  return (
    <a href={target} className="flex items-center justify-center">
      <Image {...restProps} />
    </a>
  );
};

export default Logo;
