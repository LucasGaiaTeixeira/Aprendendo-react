import { useState } from "react";
import { InputAdd } from "./components/inputAdd";
import { TodoList } from "./components/todoList";
import { List } from "./components/list";
import { toDoApi } from "./shared/services/api/todoApi";

toDoApi.getAll();

export function Parte1() {
  const [list, setList] = useState([
    { id: "1", label: "pamonha" },
    { id: "2", label: "abacate" },
    { id: "3", label: "macarrão" },
  ]);

  function handleAdd(value: string) {
    setList([...list, { id: (list.length + 1).toString(), label: value }]);
  }

  function handleRemove(id: string) {
    setList(list.filter((item) => item.id !== id));
  }

  return (
    <>
      <InputAdd onAdd={handleAdd} />
      <List>
        {list.map((itemList) => {
          return (
            <>
              <TodoList
                key={itemList.id} // a propriedade key o react ja importa automaticamente, para cada componente de lista, mas tem que passar ele, sempre que for usar lista no componente com um indicador adequado como o id que foi passado
                id={itemList.id}
                label={itemList.label}
                onRemove={handleRemove}
              />
              {console.log(itemList)}
            </>
          );
        })}
      </List>
    </>
  );
}
