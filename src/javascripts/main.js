import '../styles/main.scss';
import eat from './components/eat/eat';
import play from './components/play/play';
import fight from './components/fight/fight';
import sleep from './components/sleep/sleep';
import events from './components/click-events/clicks';
import bar from './components/progress/progress';

const init = () => {
  eat.testEat();
  play.testPlay();
  fight.testFight();
  sleep.testSleep();
  events.attachAllEvents();
  bar.showBar();
};

init();
