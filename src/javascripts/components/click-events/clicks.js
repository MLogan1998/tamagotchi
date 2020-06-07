import progress from '../progress/progress';
import fun from '../play/play';
import sleep from '../sleep/sleep';
import eat from '../eat/eat';
import fight from '../fight/fight';
import deathPenalty from '../kill-gotchi/kill-gotchi';

const runEvent = () => {
  fight.runRun();
  progress.showBar();
};

const violentEvent = () => {
  fight.violence();
  progress.showBar();
  deathPenalty.killGotchi();
};

const superPlayEvent = () => {
  fun.superFun();
  progress.showBar();
};

const kindaFunEvent = () => {
  fun.kindaFun();
  progress.showBar();
};

const eatHealthyEvent = () => {
  eat.eatHealthy();
  progress.showBar();
};

const eatJunkEvent = () => {
  eat.eatJunk();
  progress.showBar();
  deathPenalty.killGotchi();
};

const catNapEvent = () => {
  sleep.catNap();
  progress.showBar();
};

const deepSleepEvent = () => {
  sleep.deepSleep();
  progress.showBar();
};

const newGame = () => {
  deathPenalty.tryAgain();
};

const attachAllEvents = () => {
  $('body').on('click', '.runAway', runEvent);
  $('body').on('click', '.violent', violentEvent);
  $('body').on('click', '.healthy', eatHealthyEvent);
  $('body').on('click', '.junk', eatJunkEvent);
  $('body').on('click', '.super', superPlayEvent);
  $('body').on('click', '.kinda', kindaFunEvent);
  $('body').on('click', '.nap', catNapEvent);
  $('body').on('click', '.deepSleep', deepSleepEvent);
  $('body').on('click', '.gameOver', newGame);
};

export default { attachAllEvents };
