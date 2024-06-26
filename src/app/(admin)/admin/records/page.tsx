import { FC } from "react";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { z } from "zod";
import { promises as fs } from "fs";
import path from "path";
import { taskSchema } from "@/mock-data/records-schema";
interface PageProps {}

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/mock-data/records-tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

const Page: FC<PageProps> = async ({}) => {
  const tasks = await getTasks();
  return (
    <div>
      <h1 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
        Records
      </h1>
      <div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </div>
  );
};

export default Page;
