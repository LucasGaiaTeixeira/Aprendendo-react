import { useState } from "react";
import { InputAdd } from "./components/inputAdd";
import React from "react";

export function Parte1() {
  const [list, setList] = useState([
    { id: "1", label: "pamonha" },
    { id: "2", label: "abacate" },
    { id: "3", label: "macarrão" },
  ]);

  return (
    <>
      <InputAdd
        onAdd={(value) => {
          setList([
            ...list,
            { id: (list.length + 1).toString(), label: value },
          ]);
        }}
      />
      <ol>
        {list.map((itemList) => {
          return (
            <React.Fragment key={itemList.id}>
              <li>{itemList.label}</li>
              <button
                onClick={() => {
                  setList(list.filter((item) => item.id !== itemList.id));
                }}
              >
                Remover
              </button>
            </React.Fragment>
          );
        })}
      </ol>
    </>
  );
}
