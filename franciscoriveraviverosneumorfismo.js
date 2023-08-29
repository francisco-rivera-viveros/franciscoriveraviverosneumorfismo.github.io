const openButton1 = document.getElementById('openButton1');
const openButton2 = document.getElementById('openButton2');
const openButton3 = document.getElementById('openButton3');
const openButton4 = document.getElementById('openButton4');
const openButton5 = document.getElementById('openButton5');
const openButton6 = document.getElementById('openButton6');

const popup1 = document.getElementById('popup1');
const popup2 = document.getElementById('popup2');
const popup3 = document.getElementById('popup3');
const popup4 = document.getElementById('popup4');
const popup5 = document.getElementById('popup5');
const popup6 = document.getElementById('popup6');

const closeButton1 = document.getElementById('closeButton1');
const closeButton2 = document.getElementById('closeButton2');
const closeButton3 = document.getElementById('closeButton3');
const closeButton4 = document.getElementById('closeButton4');
const closeButton5 = document.getElementById('closeButton5');
const closeButton6 = document.getElementById('closeButton6');



openButton1.addEventListener('click', () => {
  popup1.setAttribute("open", ""); // Abre el popup al hacer clic en el botón
});

openButton2.addEventListener('click', () => {
    popup2.setAttribute("open", ""); // Abre el popup al hacer clic en el botón
  });

openButton3.addEventListener('click', () => {
    popup3.setAttribute("open", ""); // Abre el popup al hacer clic en el botón
  });

openButton4.addEventListener('click', () => {
    popup4.setAttribute("open", ""); // Abre el popup al hacer clic en el botón
  });

openButton5.addEventListener('click', () => {
    popup5.setAttribute("open", ""); // Abre el popup al hacer clic en el botón
  });

openButton6.addEventListener('click', () => {
    popup6.setAttribute("open", ""); // Abre el popup al hacer clic en el botón
  });



closeButton1.addEventListener('click', () => {
  popup1.close(); // Cierra el popup al hacer clic en el botón de cerrar
});

closeButton2.addEventListener('click', () => {
    popup2.close(); // Cierra el popup al hacer clic en el botón de cerrar
  });

closeButton3.addEventListener('click', () => {
    popup3.close(); // Cierra el popup al hacer clic en el botón de cerrar
  });

closeButton4.addEventListener('click', () => {
    popup4.close(); // Cierra el popup al hacer clic en el botón de cerrar
  });

closeButton5.addEventListener('click', () => {
    popup5.close(); // Cierra el popup al hacer clic en el botón de cerrar
  });

closeButton6.addEventListener('click', () => {
    popup6.close(); // Cierra el popup al hacer clic en el botón de cerrar
  });
