import utils from '../../utils/utils';
import eatValue from '../eat/eat';
import playValue from '../play/play';
import sleepValue from '../sleep/sleep';
import fightValue from '../fight/fight';
import './progress.scss';

// const score = 50;

const showBar = () => {
  const eat = eatValue.getFull();
  const play = playValue.getFun();
  const sleep = sleepValue.getSleep();
  const fight = fightValue.getStrengh();
  const total = (eat + play + fight + sleep) / 4;
  const domString = `
    <h1>Progress: ${total}%</h1>`;
  utils.printToDom('#progress', domString);
};

export default { showBar };
