import './play.scss';
import utils from '../../utils/utils';

let fun = 50;

const testPlay = () => {
  const domstring = `
    <h1>Play!</h1>
    <h2>Happiness Level: ${fun}</h2>
    <button class="super">Super Fun</button><button class="kinda">Kinda Fun</button>`;
  utils.printToDom('#play', domstring);
};

const superFun = () => {
  if (fun === 100) return;
  fun += 50;
  if (fun > 100) fun = 100;
  testPlay();
};

const kindaFun = () => {
  if (fun === 100) return;
  fun += 2;
  if (fun > 100) fun = 100;
  testPlay();
};

const getFun = () => fun;

export default {
  testPlay,
  getFun,
  superFun,
  kindaFun,
};
