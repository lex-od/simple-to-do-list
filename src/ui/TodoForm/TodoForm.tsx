import { FC, useState } from "react";
import Button from "../Button/Button";

export interface TodoFormValues {
  title: string;
  text: string;
}
interface Props {
  onSubmit: (value: TodoFormValues) => void;
  onCancel: () => void;
  initValues?: TodoFormValues;
}

const TodoForm: FC<Props> = ({ onSubmit, onCancel, initValues }) => {
  const [title, setTitle] = useState(initValues?.title || "");
  const [text, setText] = useState(initValues?.text || "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ title, text });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-8 grid gap-4">
        <label className="max-w-xl grid gap-1">
          <span className="text-lg">Title</span>
          <input
            className="p-2 rounded-md border border-indigo-300 outline-none hover:border-indigo-500 focus:border-indigo-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter todo title"
            maxLength={50}
          />
        </label>

        <label className="max-w-xl grid gap-1">
          <span className="text-lg">Text</span>
          <textarea
            className="p-2 rounded-md border border-indigo-300 outline-none resize-none hover:border-indigo-500 focus:border-indigo-500"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={200}
            rows={5}
            placeholder="Enter todo text"
          />
        </label>
      </div>

      <div className="flex gap-4">
        <Button type="submit" disabled={!title || !text}>
          Save
        </Button>
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
