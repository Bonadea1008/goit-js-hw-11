import refs from './refs';
import template from '../template/template.hbs';

const renderCard = images => {
  let markup = template(images);
  refs.galleryList.insertAdjacentHTML('beforeend', markup);
};

export default renderCard;
