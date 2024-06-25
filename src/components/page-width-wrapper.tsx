import { FC } from "react";

interface PageWidthWrapperProps {
  children: React.ReactNode;
}

const PageWidthWrapper: FC<PageWidthWrapperProps> = ({ children }) => {
  return (
    <section className="ml-[18rem] max-h-screen py-4 pr-4 sm:px-6 sm:pb-10 sm:pt-10 lg:px-10 lg:pt-7 ">
      {children}
    </section>
  );
};

export default PageWidthWrapper;
