import { onClickHandler } from './handlers/index'

function app() {
  const button = document.querySelector('input[id="search"]');

  // Event listener to add function to existing HTML DOM element
  button.addEventListener('click', onClickHandler);
}
app()

export {
  app
}