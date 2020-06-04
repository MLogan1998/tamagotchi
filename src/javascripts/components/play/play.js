import './play.scss';
import utils from '../../utils/utils';

const testPlay = () => {
  const domstring = 'plaaaaaaay!';
  utils.printToDom('#play', domstring);
};

export default { testPlay };
