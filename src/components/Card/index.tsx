import styles from "./styles.module.css";
import Button from "../Button";
import { timer } from "../../utils/timer";

export function Card(actionName: string) {
  return (
    <div className={styles.Card}>
      <Button text={"Play"} onClick={() => timer(actionName, 1)} />
      <Button text={"Stop"} onClick={() => timer(actionName, 0)} />
    </div>
  );
}
