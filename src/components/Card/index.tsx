import styles from "./styles.module.css";
import Button from "../Button";
import { runTimer, stopTimer } from "../../utils/timer";
import { ShowCounter } from "../ShowCounter";

interface CardProps {
  actionName: string;
}

export function Card({ actionName }: CardProps) {
  return (
    <div className={styles.Card}>
      <Button
        text={"Play"}
        multiplyNameId={actionName}
        isDisabled={false}
        onClick={() => runTimer(actionName)}
      />
      <Button
        text={"Stop"}
        multiplyNameId={actionName}
        isDisabled={false}
        onClick={() => stopTimer(actionName, runTimer(actionName))}
      />
      <ShowCounter actionName={actionName}></ShowCounter>
    </div>
  );
}
