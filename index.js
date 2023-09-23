const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('.menuToggle');

menuToggle.addEventListener('click', ()=> {
  sidebar.classList.toggle('active');
});

const listItems = document.querySelectorAll('.list');

listItems.forEach((item) => {
  item.addEventListener('click', activeLink)
})

function activeLink() {
  listItems.forEach((item) => {
    item.classList.remove('active');
    this.classList.add('active');
  })
}