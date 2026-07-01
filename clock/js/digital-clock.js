export class DigitalClock {
  constructor() {
    this.timezones = [];
    this.format24Hour = false;
    this.displayMode = 'digital'; // 'digital' or 'analog'
    this.loadFromStorage();
  }

  getCurrentTime() {
    const now = new Date();
    if (this.format24Hour) {
      return now.toLocaleTimeString('en-US', { hour12: false });
    }
    return now.toLocaleTimeString('en-US', { hour12: true });
  }

  getTimeInTimezone(timezone) {
    const now = new Date();
    return now;
  }

  addTimezone(timezone) {
    if (!this.timezones.includes(timezone)) {
      this.timezones.push(timezone);
      this.saveToStorage();
    }
  }

  removeTimezone(timezone) {
    this.timezones = this.timezones.filter(tz => tz !== timezone);
    this.saveToStorage();
  }

  clearTimezones() {
    this.timezones = [];
    this.saveToStorage();
  }

  toggleDisplay() {
    this.displayMode = this.displayMode === 'digital' ? 'analog' : 'digital';
    this.saveToStorage();
  }

  toggle24Hour() {
    this.format24Hour = !this.format24Hour;
    this.saveToStorage();
  }

  saveToStorage() {
    localStorage.setItem('clock-timezones', JSON.stringify(this.timezones));
    localStorage.setItem('clock-format24', JSON.stringify(this.format24Hour));
    localStorage.setItem('clock-display', this.displayMode);
  }

  loadFromStorage() {
    const timezones = localStorage.getItem('clock-timezones');
    const format24 = localStorage.getItem('clock-format24');
    const display = localStorage.getItem('clock-display');

    if (timezones) this.timezones = JSON.parse(timezones);
    if (format24) this.format24Hour = JSON.parse(format24);
    if (display) this.displayMode = display;
  }
}