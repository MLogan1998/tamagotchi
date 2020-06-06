import progress from '../progress/progress';
import fun from '../play/play';
import sleep from '../sleep/sleep';
import eat from '../eat/eat';
import fight from '../fight/fight';

const runEvent = () => {
  fight.runRun();
  progress.showBar();
};

const violentEvent = () => {
  fight.violence();
  progress.showBar();
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
};

const catNapEvent = () => {
  sleep.catNap();
  progress.showBar();
};

const deepSleepEvent = () => {
  sleep.deepSleep();
  progress.showBar();
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
};

export default { attachAllEvents };
