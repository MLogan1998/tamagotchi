import './kill-gotchi.scss';
import utils from '../../utils/utils';
import eat from '../eat/eat';
import fight from '../fight/fight';

const printKill = () => {
  const domstring = `
    <div class="uDead">
    <h1>Game Over!</h1>
    <h2>Take care of your pet!</h2>
    <button class="gameOver">Try Again</button>
    </div>`;
  utils.printToDom('#app', domstring);
};

const tryAgain = () => {
  window.location.reload();
};

const killGotchi = () => {
  if (eat.getFull() === 0) printKill();
  if (fight.getStrengh() === 0) printKill();
};

export default { killGotchi, tryAgain };
