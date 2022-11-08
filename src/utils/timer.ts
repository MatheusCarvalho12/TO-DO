export const timer = (actionName: string, run: number) => {
  const runTimer = setInterval(() => {
    console.log(run);
    let timer = Number(localStorage.getItem(actionName));
    timer++;
    localStorage.setItem(actionName, timer.toString());
    console.log(run);
  }, 1000);
  const isRunning = run === 0 ? clearInterval(runTimer) : runTimer;
};
