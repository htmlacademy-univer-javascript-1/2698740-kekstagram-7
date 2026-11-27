const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const createThumbnail = (picture, onThumbnailClick) => {
  const { url, description, likes, comments } = picture;
  const thumbnail = pictureTemplate.cloneNode(true);

  const image = thumbnail.querySelector('.picture__img');
  image.src = url;
  image.alt = description;

  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;

  thumbnail.addEventListener('click', (evt) => {
    evt.preventDefault();
    onThumbnailClick(picture);
  });

  return thumbnail;
};

const renderThumbnails = (pictures, onThumbnailClick) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    fragment.append(createThumbnail(picture, onThumbnailClick));
  });

  picturesContainer.append(fragment);
};

export { renderThumbnails };
