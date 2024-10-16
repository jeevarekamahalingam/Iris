const hamburger=document.getElementsByClassName('hamburger')[0];
console.log("Hi");
const navList=document.getElementsByClassName('navbar')[0];
const prod=document.getElementsByClassName('nav-op')[0];
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active'); // Toggle 'active' class
    prod.classList.toggle('active');
  });