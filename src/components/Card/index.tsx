import styles from "./styles.module.css";
import Button from "../Button";
function runTimer(actionName: string) {
  const runTimer = setInterval(() => {
    let counter = Number(localStorage.getItem(actionName));
    counter++;
    localStorage.setItem(actionName, counter.toString());
  }, 1000);
  return runTimer;
}
function stopTimer(runTimer: number) {
  clearInterval(runTimer - 1);
  clearInterval(runTimer);
  return stopTimer;
}
export function Card(actionName: string) {
  return (
    <div className={styles.Card}>
      <Button text={"Play"} onClick={() => runTimer(actionName)} />
      <Button text={"Stop"} onClick={() => stopTimer(runTimer(actionName))} />
    </div>
  );
}
