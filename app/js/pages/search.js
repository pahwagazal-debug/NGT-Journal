export class SearchPage {
  constructor() {
    this.searchQuery = '';
    this.filters = {
      status: 'all',
      bench: 'all',
      sortBy: 'relevant'
    };
  }

  render() {
    return `
      <div class="max-w-7xl mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-8">Advanced Search</h1>
        
        <!-- Search Bar -->
        <div class="mb-8">
          <input 
            type="text" 
            class="search-input w-full"
            placeholder="Search case laws, orders, or topics..."
            id="search-input"
            onkeyup="window.app.currentSearchPage.handleSearch()"
          />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <!-- Filters Sidebar -->
          <div class="bg-surface-container p-6 rounded-lg h-fit">
            <h2 class="font-bold text-lg mb-4">Filters</h2>
            
            <div class="mb-6">
              <h3 class="font-bold text-sm mb-3">Status</h3>
              <select class="w-full search-input" onchange="window.app.currentSearchPage.handleFilterChange('status', this.value)">
                <option value="all">All Status</option>
                <option value="Disposed">Disposed</option>
                <option value="Pending">Pending</option>
              </select>
            </div>

            <div class="mb-6">
              <h3 class="font-bold text-sm mb-3">Sort By</h3>
              <select class="w-full search-input" onchange="window.app.currentSearchPage.handleFilterChange('sortBy', this.value)">
                <option value="relevant">Most Relevant</option>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>

            <button class="btn-primary w-full" onclick="window.app.currentSearchPage.clearFilters()">Clear Filters</button>
          </div>

          <!-- Results -->
          <div class="lg:col-span-3">
            <div class="mb-4 text-sm text-on-surface-variant">
              Found <span class="font-bold" id="result-count">0</span> results
            </div>
            <div id="search-results" class="space-y-4">
              ${this.renderResults()}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderResults() {
    const query = document.getElementById('search-input')?.value || '';
    const cases = query ? window.app.data.searchCases(query) : window.app.data.cases;
    
    document.getElementById('result-count').textContent = cases.length;

    return cases.map(c => `
      <div class="case-card">
        <div class="flex flex-col md:flex-row justify-between md:items-start gap-4">
          <div class="flex-grow">
            <div class="flex justify-between items-start mb-3">
              <h3 class="font-bold text-lg text-primary cursor-pointer hover:underline" onclick="window.location.hash = 'case/${c.id}'">${c.title}</h3>
              <span class="badge badge-${c.status.toLowerCase()}">${c.status}</span>
            </div>
            <p class="text-sm text-on-surface-variant mb-3">📍 ${c.bench} • 📅 ${c.date}</p>
            <p class="text-sm text-on-surface-variant mb-4">${c.excerpt}</p>
            <div class="flex flex-wrap gap-2">
              ${c.topics.map(t => `<span class="chip">${t}</span>`).join('')}
            </div>
          </div>
          <div class="flex gap-2">
            <button class="btn-primary" onclick="window.location.hash = 'case/${c.id}'">View</button>
            <button class="btn-secondary" onclick="window.app.data.saveCaseToLibrary(${c.id}); alert('Case saved!')">Save</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  handleSearch() {
    const results = document.getElementById('search-results');
    if (results) {
      results.innerHTML = this.renderResults();
    }
  }

  handleFilterChange(filter, value) {
    this.filters[filter] = value;
    this.handleSearch();
  }

  clearFilters() {
    this.filters = { status: 'all', bench: 'all', sortBy: 'relevant' };
    document.getElementById('search-input').value = '';
    this.handleSearch();
  }
}

window.app.currentSearchPage = new SearchPage();