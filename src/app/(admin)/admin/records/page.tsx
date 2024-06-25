import { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <div>
      <h1 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
        Records
      </h1>
    </div>
  );
};

export default Page;
