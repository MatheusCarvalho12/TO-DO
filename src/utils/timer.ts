export function runTimer(actionName: string) {
  const runTimer = setInterval(() => {
    let counter = Number(localStorage.getItem(actionName));
    counter++;
    localStorage.setItem(actionName, counter.toString());
  }, 1000);
  (document.getElementById(`Stop ${actionName}`) as HTMLInputElement).disabled = false;
  (document.getElementById(`Play ${actionName}`) as HTMLInputElement).disabled = true;

  return runTimer;
}

export function stopTimer(actionName: string, runTimer: number) {
  clearInterval(runTimer - 1);
  clearInterval(runTimer);
  (document.getElementById(`Stop ${actionName}`) as HTMLInputElement).disabled = true;
  (document.getElementById(`Play ${actionName}`) as HTMLInputElement).disabled = false;
}
