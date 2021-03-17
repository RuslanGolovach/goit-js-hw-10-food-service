const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const themeSwitchRef = document.querySelector('.theme-switch__toggle');

themeSwitchRef.addEventListener('change', onThemeSwitchClick);

saveSelectedTheme();

function updateTheme(addTheme, removeTheme) {
  bodyRef.classList.add(addTheme);
  bodyRef.classList.remove(removeTheme);
}

function onThemeSwitchClick() {
  if (themeSwitchRef.checked) {
    localStorage.setItem('theme', Theme.DARK);
    updateTheme(Theme.DARK, Theme.LIGHT);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    updateTheme(Theme.LIGHT, Theme.DARK);
  }
}

function saveSelectedTheme() {
  const saveTheme = localStorage.getItem('theme');
  if (saveTheme === Theme.DARK) {
    themeSwitchRef.checked = 'true';
    onThemeSwitchClick();
  }
}
