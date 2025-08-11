import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface IProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: IProps) => {
  return (
    <div className=" min-h-screen flex flex-col">
      <Navbar />
      {/* <h1>This is CommonLayout component</h1> */}
      <main className="grow-1">{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
