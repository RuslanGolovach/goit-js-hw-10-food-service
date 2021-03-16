const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const themeSwitchRef = document.querySelector('.theme-switch__toggle');

themeSwitchRef.addEventListener('change', onThemeSwitchClick);

saveSelectedTheme();

function makeDarkTheme() {
  bodyRef.classList.add(Theme.DARK);
  bodyRef.classList.remove(Theme.LIGHT);
}

function makeLightTheme() {
  bodyRef.classList.add(Theme.LIGHT);
  bodyRef.classList.remove(Theme.DARK);
}

function onThemeSwitchClick() {
  if (themeSwitchRef.checked) {
    localStorage.setItem('theme', Theme.DARK);
    makeDarkTheme();
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    makeLightTheme();
  }
}

function saveSelectedTheme() {
  const saveTheme = localStorage.getItem('theme');
  if (saveTheme === Theme.DARK) {
    themeSwitchRef.checked = 'true';
    onThemeSwitchClick();
  }
}
