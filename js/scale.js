const STEP_SCALE = 25;
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const DEFAULT_SCALE = 100;

const elementFormModal = document.querySelector('.img-upload');
const elementModalImage = elementFormModal.querySelector('.img-upload__preview img');
const elementFormModalSmallerButtonScale = elementFormModal.querySelector('.scale__control--smaller');
const elementFormModalBiggerButtonScale = elementFormModal.querySelector('.scale__control--bigger');
const elementFormModalInputFieldScale = elementFormModal.querySelector('.scale__control--value');

let valueInput = elementFormModalInputFieldScale.value.replace('%','');

const transromImage = () => {
  elementModalImage.style.transform = `scale(${valueInput / 100})`;
  elementFormModalInputFieldScale.value = `${valueInput}%`;
};

const onSmallerButton = () => {
  if (valueInput > MIN_SCALE) {
    valueInput -= STEP_SCALE;
  } else {
    return;
  }
  transromImage();
};

const onBiggerButton = () => {
  if (valueInput < MAX_SCALE) {
    valueInput += STEP_SCALE;
  } else {
    return;
  }
  transromImage();
};

const resetScale = () => {
  valueInput = DEFAULT_SCALE;
  transromImage();
};

function addEventScale() {
  elementFormModalSmallerButtonScale.addEventListener('click', onSmallerButton);elementFormModalBiggerButtonScale.addEventListener('click', onBiggerButton);
}

function removeEventScale() {
  elementFormModalSmallerButtonScale.removeEventListener('click', onSmallerButton);elementFormModalBiggerButtonScale.removeEventListener('click', onBiggerButton);
  resetScale();
}

export { addEventScale, removeEventScale };
