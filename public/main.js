console.info('Cool');

// ======================================================== //
// Function before ES6
function hitungLuas() {
  let panjang = prompt('Masukkan Panjang : ');
  let lebar = prompt('Masukkan Lebar : ');
  let luas = panjang * lebar;

  console.info('Luas :' + luas + 'cm');
}

// Memanggil function
hitungLuas();

// ======================================================== //
// Arrow Function
// Keyword varname = () => {}

const countAge = () => {
  let username = prompt('Input Name : ');
  let yearBorn = prompt('Input Year Born : ');
  let currentYear = 2022;

  let age = currentYear - yearBorn;

  // Tampilkan ke console
  // console.info('Hi ' + username + ' Your age is ' + age);

  // Menangkap element dengan id= result
  let result = document.getElementById('result');
  result.innerHTML = `Hi ${username} your age is ${age}`;
};
