export class ThemeManager {
  constructor() {
    this.isDarkMode = true;
    this.init();
  }

  init() {
    const saved = localStorage.getItem('clock-theme');
    if (saved) {
      this.isDarkMode = saved === 'dark';
    }
    this.apply();
  }

  toggle() {
    this.isDarkMode = !this.isDarkMode;
    this.apply();
    localStorage.setItem('clock-theme', this.isDarkMode ? 'dark' : 'light');
  }

  apply() {
    const body = document.body;
    if (this.isDarkMode) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
    }
  }
}