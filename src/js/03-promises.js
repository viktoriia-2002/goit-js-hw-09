import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector('.form'),
  inputElDelay: document.querySelector('[name="delay"]'),
  inputElAmount: document.querySelector('[name="amount"]'),
  inputElNumber: document.querySelector('[name="step"]'),
  btnSubmit: document.querySelector('button'),
};

refs.formEl.addEventListener('submit', event => {
  event.preventDefault();

  const delay = parseInt(refs.inputElDelay.value);
  refs.inputElDelay.value = delay;
  const amount = parseInt(refs.inputElAmount.value);
  const step = parseInt(refs.inputElNumber.value);

  let currentDelay = delay;
  for (let i = 1; i <= amount; i++) {
    setTimeout(() => createPromise(i, currentDelay), currentDelay);
    currentDelay += step;
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        const message = `✅ Fulfilled promise ${position} in ${delay}ms`;
        Notiflix.Notify.success(message);
        resolve({ position, delay });
      } else {
        const message = `❌ Rejected promise ${position} in ${delay}ms`;
        Notiflix.Notify.failure(message);
        reject({ position, delay });
      }
    }, delay);
  });
}



// refs.formEl.addEventListener('submit', event => {
//   event.preventDefault();

//   const delay = parseInt(refs.inputElDelay.value);
//   refs.inputElDelay.value = delay;
//   const amount = parseInt(refs.inputElAmount.value);
//   const step = parseInt(refs.inputElNumber.value);

//   const promises = Array.from({ length: amount }, (_, i) => createPromise(i + 1, delay + i * step));

//   Promise.all(promises)
//     .then(results => {
//       results.forEach(({ position, delay }) => {
//         Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       });
//     })
//     .catch(results => {
//       results.forEach(({ position, delay }) => {
//         Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//     });
// });
