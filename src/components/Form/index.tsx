import { BasicButton } from "../BasicButton";
import { Input } from "../Input";

export const Form = () => {
  return (
    <form className="flex mb-4 gap-2">
      <Input label="text" />
      <BasicButton label="追加" />
    </form>
  );
};
