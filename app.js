const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotate')

  closeAllSubMenus()
}

function toggleSubMenu(button){

  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus()
  }

  button.nextElementSibling.classList.toggle('show')
  button.classList.toggle('rotate')

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
    ul.classList.remove('show')
    ul.previousElementSibling.classList.remove('rotate')
  })
}




//---------------------------------------------------------------------------------------------------------------------------
/*
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
*/

//---------------------------------------------------------------------------------------------------------------------------

document.getElementById('addButton').addEventListener('click', function() {
  const textInput = document.getElementById('textInput').value;
  if (textInput.trim() !== '') {
    const newDiv = document.createElement('div');
    newDiv.classList.add('container');
    newDiv.textContent = textInput;

    // Füge den neuen Container oben im #containerArea hinzu
    const containerArea = document.getElementById('containerArea');
    containerArea.insertBefore(newDiv, containerArea.firstChild);

    document.getElementById('textInput').value = ''; // Eingabefeld leeren
  } else {
    alert('Bitte gib einen Text ein.');
  }
});
