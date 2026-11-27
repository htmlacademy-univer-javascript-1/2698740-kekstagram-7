import { renderThumbnails } from './thumbnails.js';
import { openBigPicture } from './big-picture.js';

const renderGallery = (pictures) => {
  renderThumbnails(pictures, openBigPicture);
};

export { renderGallery };
