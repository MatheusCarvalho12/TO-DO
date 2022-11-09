import styles from './styles.module.css';
import Button from '../Button';

function runTimer(actionName: string) {
  const runTimer = setInterval(() => {
    let counter = Number(localStorage.getItem(actionName));
    counter++;
    localStorage.setItem(actionName, counter.toString());
  }, 1000);
  (document.getElementById('Stop') as HTMLInputElement).disabled = false;
  (document.getElementById('Play') as HTMLInputElement).disabled = true;
  return runTimer;
}

function stopTimer(runTimer: number) {
  clearInterval(runTimer - 1);
  clearInterval(runTimer);
  (document.getElementById('Stop') as HTMLInputElement).disabled = true;
  (document.getElementById('Play') as HTMLInputElement).disabled = false;
  return stopTimer;
}

export function Card(actionName: string) {
  return (
    <div className={styles.Card}>
      <Button
        text={'Play'}
        isDisabled={false}
        onClick={() => runTimer(actionName)}
      />
      <Button
        text={'Stop'}
        isDisabled={false}
        onClick={() => stopTimer(runTimer(actionName))}
      />
    </div>
  );
}
