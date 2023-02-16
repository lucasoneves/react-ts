const Todos: React.FC<{items: string[]}> = (props) => {
  return (
    <div>
      <ul>
      {props.items.map((task) => <li key={task}>{task}</li>)}
      </ul>
    </div>
  );
}

export default Todos;
