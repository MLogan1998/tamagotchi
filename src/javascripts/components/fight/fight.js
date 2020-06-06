import './fight.scss';
import utils from '../../utils/utils';

let strength = 100;

const testFight = () => {
  const domstring = `
    <h1>Fight!</h1>
    <h2>Strength Level: ${strength}</h2>
    <button class="runAway">Run!</button><button class="violent">Fight!</button>`;
  utils.printToDom('#fight', domstring);
};
const runRun = () => {
  if (strength === 100) return;
  strength += 1;
  if (strength > 100) strength = 100;
  testFight();
};

const violence = () => {
  if (strength === 0) return;
  strength -= 10;
  if (strength < 0) strength = 0;
  testFight();
};

const getStrengh = () => strength;

export default {
  testFight,
  runRun,
  violence,
  getStrengh,
};
