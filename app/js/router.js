import { HomePage } from './pages/home.js';
import { SearchPage } from './pages/search.js';
import { CaseDetailPage } from './pages/case-detail.js';
import { DashboardPage } from './pages/dashboard.js';
import { AboutPage } from './pages/about.js';

export class Router {
  constructor() {
    this.pages = {
      home: HomePage,
      search: SearchPage,
      case: CaseDetailPage,
      dashboard: DashboardPage,
      about: AboutPage
    };
    this.currentPage = 'home';
  }

  init() {
    window.addEventListener('hashchange', () => this.handleNavigation());
    this.handleNavigation();
  }

  handleNavigation() {
    const hash = window.location.hash.slice(1) || 'home';
    const [page, param] = hash.split('/');
    this.currentPage = page;
    window.app.renderApp();
  }

  render() {
    const PageClass = this.pages[this.currentPage];
    if (!PageClass) {
      return '<div class="max-w-7xl mx-auto px-4 py-12"><h1 class="text-2xl font-bold">Page not found</h1></div>';
    }
    const page = new PageClass();
    return page.render();
  }
}