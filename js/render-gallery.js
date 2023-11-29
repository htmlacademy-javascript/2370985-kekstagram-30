const container = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

const fillingGallery = ({url, description, likes, comments, id}) => {
  const pictureElement = templatePicture.cloneNode(true);
  const pictureElementImage = pictureElement.querySelector('.picture__img');
  pictureElementImage.src = url;
  pictureElementImage.alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.dataset.pictureElementId = id;

  return pictureElement;
};

const renderGallery = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const gallery = fillingGallery(picture);
    fragment.append(gallery);
  });

  container.append(fragment);
};

export {renderGallery};
