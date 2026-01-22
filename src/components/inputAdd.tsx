import { useState } from "react";

interface IInputAddProps {
  onAdd(value: string): void;
}

export function InputAdd(props: IInputAddProps) {
  const [inputValue, setInputValue] = useState("");

  function handleAdd() {
    props.onAdd(inputValue);
    setInputValue("");
  }

  return (
    <>
      <input
        value={inputValue}
        onChange={(item) => {
          setInputValue(item.target.value);
        }}
      />
      <button onClick={handleAdd}>ADD</button>
    </>
  );
}
