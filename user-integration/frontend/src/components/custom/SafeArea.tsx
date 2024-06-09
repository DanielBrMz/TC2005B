import React from "react";

interface SafeAreaProps {
  children?: React.ReactNode;
}

const SafeArea = ({ children }: SafeAreaProps) => {
  return (
    <div className="w-full min-w-screen flex items-center justify-center">
      <div className="w-full max-w-5xl">{children}</div>
    </div>
  );
};

export default SafeArea;