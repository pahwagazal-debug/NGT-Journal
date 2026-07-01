import { Router } from './router.js';
import { ThemeManager } from './theme.js';
import { DataManager } from './data.js';

class NGTJournalApp {
  constructor() {
    this.router = new Router();
    this.theme = new ThemeManager();
    this.data = new DataManager();
    this.init();
  }

  async init() {
    await this.data.loadCases();
    this.router.init();
    this.theme.init();
    this.renderApp();
  }

  renderApp() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="min-h-screen bg-surface">
        <header class="fixed top-0 w-full z-50 bg-surface border-b border-muted shadow-sm">
          ${this.renderHeader()}
        </header>
        <main class="mt-16 pb-20">
          ${this.router.render()}
        </main>
        <footer class="bg-surface-container border-t border-muted py-8 mt-12">
          ${this.renderFooter()}
        </footer>
      </div>
    `;
    this.attachEventListeners();
  }

  renderHeader() {
    return `
      <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex items-center gap-3 cursor-pointer" onclick="window.location.hash = '#home'">
          <span class="material-symbols-outlined text-primary text-3xl">eco</span>
          <div>
            <h1 class="text-xl font-bold text-primary">NGT E-Journal</h1>
            <p class="text-xs text-on-surface-variant">Environmental Case Law Database</p>
          </div>
        </div>
        <nav class="hidden md:flex items-center gap-6">
          <a href="#home" class="text-on-surface hover:text-primary transition">Home</a>
          <a href="#search" class="text-on-surface hover:text-primary transition">Search</a>
          <a href="#dashboard" class="text-on-surface hover:text-primary transition">Dashboard</a>
          <a href="#about" class="text-on-surface hover:text-primary transition">About</a>
        </nav>
        <div class="flex items-center gap-4">
          <button class="material-symbols-outlined text-on-surface hover:text-primary transition" onclick="app.theme.toggle()">light_mode</button>
          <button class="material-symbols-outlined text-on-surface hover:text-primary transition">notifications</button>
          <div class="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-sm font-bold cursor-pointer">JD</div>
        </div>
      </div>
    `;
  }

  renderFooter() {
    return `
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 class="font-bold mb-4">About NGT E-Journal</h3>
            <p class="text-sm text-on-surface-variant">Comprehensive database of environmental case law and National Green Tribunal orders.</p>
          </div>
          <div>
            <h3 class="font-bold mb-4">Quick Links</h3>
            <ul class="text-sm space-y-2">
              <li><a href="#home" class="text-on-surface-variant hover:text-primary">Home</a></li>
              <li><a href="#search" class="text-on-surface-variant hover:text-primary">Advanced Search</a></li>
              <li><a href="#dashboard" class="text-on-surface-variant hover:text-primary">My Dashboard</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-4">Resources</h3>
            <ul class="text-sm space-y-2">
              <li><a href="#about" class="text-on-surface-variant hover:text-primary">About NGT</a></li>
              <li><a href="#" class="text-on-surface-variant hover:text-primary">Contact</a></li>
              <li><a href="#" class="text-on-surface-variant hover:text-primary">Help</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-4">Follow Us</h3>
            <div class="flex gap-4 text-on-surface-variant">
              <span class="material-symbols-outlined cursor-pointer hover:text-primary transition">facebook</span>
              <span class="material-symbols-outlined cursor-pointer hover:text-primary transition">twitter</span>
              <span class="material-symbols-outlined cursor-pointer hover:text-primary transition">public</span>
            </div>
          </div>
        </div>
        <div class="border-t border-muted pt-4 text-center text-sm text-on-surface-variant">
          <p>&copy; 2026 NGT E-Journal. All rights reserved.</p>
        </div>
      </div>
    `;
  }

  attachEventListeners() {
    // Dynamic event listeners will be attached by route handlers
  }
}

window.app = new NGTJournalApp();