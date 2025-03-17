interface TaskProps {
  id: number;
  title: string;
  isCompleted: boolean;
}

export function Task({ title }: TaskProps) {
  return (
    <div className="task">
      <input type="checkbox" />
      <p>{title}</p>
      <button type="button">Remover</button>
    </div>
  )
}
