import utils from '../../utils/utils';
import './avatar.scss';

let userImg = [{ img: 'https://i.pinimg.com/originals/db/f4/02/dbf40260a8b92e824c354a7bd99b957f.jpg' }];

const buildUserImg = () => {
  const userImgs = userImg;
  let domString = '';
  userImgs.forEach((img) => {
    domString += `
    <div class="avatar">
    <div>
    <img class="avy" src="${img.img}">
    </div>
    <form id="imgSubmit">
    <div class="form-group">
    <label class="avLabel" for="inputAvatar">Choose Your Avatar:</label><br />
    <input type="text" class="form-control" id="inputAvatar" placeholder="Avatar URL" required>
    <button type="submit" class="createButton">Create!</button>
    </div>
    </div>
    </form>`;
  });
  utils.printToDom('#pet', domString);
};

const submitUserImg = (e) => {
  userImg = [];
  e.preventDefault();
  const tempImg = {};
  tempImg.img = document.querySelector('#inputAvatar').value;
  userImg.push(tempImg);
  buildUserImg();
  userImg = [];
};

$('body').on('submit', 'form', submitUserImg);

export default { buildUserImg };
