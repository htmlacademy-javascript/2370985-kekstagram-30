const Effect = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

const EffectPredominant = {
  [Effect.CHROME]: {
    filter: 'grayscale',
    unit: '',
  },
  [Effect.SEPIA]: {
    filter: 'sepia',
    unit: '',
  },
  [Effect.MARVIN]: {
    filter: 'invert',
    unit: '%',
  },
  [Effect.PHOBOS]: {
    filter: 'blur',
    unit: 'px',
  },
  [Effect.HEAT]: {
    filter: 'brightness',
    unit: '',
  },
};

const EffectSliders = {
  [Effect.DEFAULT]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [Effect.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [Effect.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [Effect.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [Effect.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
  },
  [Effect.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
  },
};

const elementFormModal = document.querySelector('.img-upload');
const elementModalImage = elementFormModal.querySelector('.img-upload__preview img');
const elementModalEffects = elementFormModal.querySelector('.effects');
const elementModalSlider = elementFormModal.querySelector('.effect-level__slider');
const elementModalSliderContainer = elementFormModal.querySelector('.img-upload__effect-level');
const elementModalEffectLevel = elementFormModal.querySelector('.effect-level__value');

let chosenEffect = Effect.DEFAULT;

const isDefault = () => chosenEffect === Effect.DEFAULT;

const setImageStyle = () => {
  if (isDefault()) {
    elementModalImage.style.filter = null;
    return;
  }

  const value = elementModalEffectLevel.value;
  const filter = EffectPredominant[chosenEffect].filter;
  const unit = EffectPredominant[chosenEffect].unit;
  elementModalImage.style.filter = `${filter}(${value}${unit})`;
};

const showSlider = () => {
  elementModalSliderContainer.classList.remove('hidden');
};

const hideSlider = () => {
  elementModalSliderContainer.classList.add('hidden');
};

const onSliderUpdate = () => {
  elementModalEffectLevel.value = elementModalSlider.noUiSlider.get();
  setImageStyle();
};

const createSlider = ({ min, max, step }) => {
  noUiSlider.create(elementModalSlider, {
    range: { min, max },
    step,
    start: max,
    connect: 'lower',
    format: {
      to: (value) => Number(value),
      from: (value) => Number(value),
    }
  });
  elementModalSlider.noUiSlider.on('update', onSliderUpdate);
  hideSlider();
};

const updateSlider = ({ min, max, step }) => {
  elementModalSlider.noUiSlider.updateOptions({
    range: { min, max },
    step,
    start: max,
  });
};

const setSlider = () => {
  if (isDefault()) {
    hideSlider();
  } else {
    updateSlider(EffectSliders[chosenEffect]);
    showSlider();
  }
};

const setEffect = (effect) => {
  chosenEffect = effect;
  setSlider();
  setImageStyle();
};

const onEffectChange = (evt) => {
  setEffect(evt.target.value);
};

const deleteSlider = () => {
  elementModalSlider.noUiSlider.destroy();
};

const reset = () => {
  deleteSlider();
  setEffect(Effect.DEFAULT);
  elementModalEffects.removeEventListener('change', onEffectChange);
};

const init = () => {
  elementModalEffects.addEventListener('change', onEffectChange);
  createSlider(EffectSliders[chosenEffect]);
};


export { init, reset };
