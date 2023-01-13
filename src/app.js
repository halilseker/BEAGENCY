var element = document.querySelector('.secondSpan');
var query = window.matchMedia('(min-width: 778px)');
var navHireUs = document.querySelector('.navHireUs');

function handleChange(query) {
  if (query.matches) {
    element.classList.remove('justify-content-center');
    element.classList.add('justify-content-start');
    // navHireUs.classList.remove('justify-content-center');
    // navHireUs.classList.add('d-none d-md-inline');
  } else {
    element.classList.remove('justify-content-start');
    element.classList.add('justify-content-center');
  }
}
query.addEventListener('change', handleChange);
handleChange(query);

// @media only screen and (min-width: 480px) and (max-width: 767px) {
//   .donthesitate {
//   }
// }
// @media only screen and (min-width: 768px) and (max-width: 959px) {
//   .donthesitate {

//   }
// }
// var donthesitate = document.querySelector('.donthesitate');
// var query2 = window.matchMedia('(max-width: 995px)');

// function handleChange2(query2) {
//   if (query2.matches) {
//     donthesitate.classList.remove('p-3');
//     donthesitate.classList.add('');
//   } else {
//     donthesitate.classList.remove('');
//     donthesitate.classList.add('p-3');
//   }
// }
// query2.addEventListener('change', handleChange2);
// handleChange(query2);
