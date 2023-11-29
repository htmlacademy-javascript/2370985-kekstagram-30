const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('.img-upload__input[type=file]');
const preview = document.querySelector('.img-upload__preview img');
const previewEffect = document.querySelector('.img-upload__effects');
const previewEffectItem = previewEffect.querySelectorAll('.effects__preview');

const currentPhoto = (file) => {
  const fileName = file.name.toLowerCase();
  return FILE_TYPES.some((it) => fileName.endsWith(it));
};

const uploadPhoto = () => {
  const file = fileChooser.files[0];
  if (currentPhoto(file)) {
    preview.src = URL.createObjectURL(file);
    previewEffectItem.forEach((element) => {
      element.style.backgroundImage = `url(${preview.src})`;
    });
  }
};

const clearPhoto = () => {
  URL.revokeObjectURL(preview.src);
};

export { uploadPhoto, clearPhoto };
