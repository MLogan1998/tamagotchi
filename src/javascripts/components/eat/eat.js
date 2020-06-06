import './eat.scss';
import utils from '../../utils/utils';

let full = 100;

const testEat = () => {
  const domstring = `
    <h1>Eat!</h1>
    <h2>Fullness Level: ${full}</h2>
    <button class="healthy">Healthy Food</button><button class="junk">Junk Food</button>`;
  utils.printToDom('#eat', domstring);
};

const eatHealthy = () => {
  if (full === 100) return;
  full += 10;
  if (full > 100) full = 100;
  testEat();
};

const eatJunk = () => {
  if (full === 0) return;
  full -= 3;
  if (full < 0) full = 0;
  testEat();
};
const getFull = () => full;

export default {
  testEat,
  getFull,
  eatHealthy,
  eatJunk,
};
