import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: IProps) => {
  return (
    <div>
      <h1>This is CommonLayout component</h1>
      {children}
    </div>
  );
};

export default CommonLayout;
