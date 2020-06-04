import './fight.scss';
import utils from '../../utils/utils';

const testFight = () => {
  const domstring = 'fiiiiiight!';
  utils.printToDom('#fight', domstring);
};

export default { testFight };
