import { ChangeEventHandler } from "react";

interface Props {
  id: string;
  type: "number";
  label: string;
  value: any;
  onChangeHandler?: ChangeEventHandler;
}

const Input = (props: Props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChangeHandler}
      />
    </div>
  );
};

export default Input;
