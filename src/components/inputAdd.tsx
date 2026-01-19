import { useState } from "react";

interface IInputAddProps {
  onAdd(value: string): void;
}

export function InputAdd(props: IInputAddProps) {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <input
        value={inputValue}
        onChange={(item) => {
          setInputValue(item.target.value);
        }}
      />
      <button
        onClick={() => {
          props.onAdd(inputValue);
          setInputValue("");
        }}
      >
        ADD
      </button>
    </>
  );
}
