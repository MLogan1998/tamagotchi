import './sleep.scss';
import utils from '../../utils/utils';

let energy = 50;

const testSleep = () => {
  const domstring = `
    <h1>Sleep</h1>
    <h2>Energy Level: ${energy}</h2>
    <button class="nap">Nap</button><button class="deepSleep">Deep Slumber</button>`;
  utils.printToDom('#sleep', domstring);
};

const catNap = () => {
  if (energy === 100) return;
  energy += 50;
  if (energy > 100) energy = 100;
  testSleep();
};

const deepSleep = () => {
  if (energy === 100) return;
  energy += 60;
  if (energy > 100) energy = 100;
  testSleep();
};

$('body').on('click', '.nap', catNap);
$('body').on('click', '.deepSleep', deepSleep);

export default { testSleep };
