export class ThemeManager {
  constructor() {
    this.isDarkMode = false;
  }

  init() {
    const saved = localStorage.getItem('ngt-theme');
    if (saved === 'dark') {
      this.setDarkMode(true);
    }
  }

  toggle() {
    this.setDarkMode(!this.isDarkMode);
  }

  setDarkMode(isDark) {
    this.isDarkMode = isDark;
    if (isDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('ngt-theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('ngt-theme', 'light');
    }
  }
}