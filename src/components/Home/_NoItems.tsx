import { SearchX } from "lucide-react";

const NoItems = () => {
  return (
    <li className="min-h-64 p-4 grid justify-center items-center rounded-xl border-2 border-indigo-100">
      <div className="p-4 grid justify-items-center gap-2 rounded bg-indigo-100">
        <SearchX size={36} color="#57534e" />
        <p>No todos found</p>
      </div>
    </li>
  );
};

export default NoItems;
