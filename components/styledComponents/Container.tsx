import React from "react";

type Props = {
  children: any;
};

const Container = ({ children }: Props) => {
  return (
    <div className="max-w-[1380px] w-full mx-auto px-4 h-full Container">
      {children}
    </div>
  );
};

export default Container;
