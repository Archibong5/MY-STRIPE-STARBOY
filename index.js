const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');


function handleEnter(){
  this.classList.add('trigger-enter');
  setTimeout(() => {
    this.classList.add('trigger-enter-active');

  }, 100);

  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      left: dropdownCoords.left - navCoords.left,
      top: dropdownCoords.top - navCoords.top,

  }


  background.classList.add('open');

  background.style.height = `${coords.height}px`;
  background.style.width = `${coords.width}px`;
  background.style.transform = `translate(${coords.left}px, ${coords.top}px)`;




}

function handleLeave(){
  this.classList.remove('trigger-enter');
  this.classList.remove('trigger-enter-active');

  background.classList.remove('open')
}


triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
