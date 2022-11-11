interface ShowCounterProps {
  actionName: string;
}

export function ShowCounter({ actionName }: ShowCounterProps) {
  let counter: string | string[] | undefined = [];
  const ShowCounter = setInterval(() => {
    counter = localStorage.getItem(actionName)?.toString();
  }, 1000);

  return (
    <div className="Counter">
      {counter.map((counter: string, index: number) => (
        <p key={index}>{counter}</p>
      ))}
    </div>
  );
}
