interface ITodoListProps {
  id: string;
  label: string;
  onRemove(id: string): void;
}

export function TodoList({ id, label, onRemove }: ITodoListProps) {
  return (
    <>
      <li>{label}</li>
      <button onClick={() => onRemove(id)}>Remover</button>
    </>
  );
}
