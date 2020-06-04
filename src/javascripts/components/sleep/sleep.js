import './sleep.scss';
import utils from '../../utils/utils';

const testSleep = () => {
  const domstring = 'sleeeeeep!';
  utils.printToDom('#sleep', domstring);
};

export default { testSleep };
