import './eat.scss';
import utils from '../../utils/utils';

const testEat = () => {
  const domstring = 'eeeeeat!';
  utils.printToDom('#eat', domstring);
};

export default { testEat };
