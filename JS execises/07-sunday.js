for (let year = 2014; year <= 2050; year++) {
  let date = new Date(year, 0, 1);
  sunday(date) ? console.log(`1st January ${year} will be a Sunday`) : null;
}

function sunday(date) {
  return date.getDay() === 0; 
}
