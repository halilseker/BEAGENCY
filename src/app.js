var element = document.querySelector('.secondSpan');
//var indicatorsNums = document.querySelector('.indicatorsNums');

var query = window.matchMedia('(min-width: 778px)');

function handleChange(query) {
  if (query.matches) {
    element.classList.remove('justify-content-center');
    element.classList.add('justify-content-start');
    // indicatorsNums.classList.remove('col-md-2');
    // indicatorsNums.classList.add('col-2');
  } else {
    element.classList.remove('justify-content-start');
    element.classList.add('justify-content-center');

    // indicatorsNums.classList.remove('col-2');
    // indicatorsNums.classList.add('col-md-2');
  }
}
query.addEventListener('change', handleChange);
handleChange(query);
