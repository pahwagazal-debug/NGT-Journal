export class DashboardPage {
  render() {
    const savedCases = window.app.data.getSavedCases();

    return `
      <div class="max-w-7xl mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-8">My Dashboard</h1>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div class="bg-surface-container p-6 rounded-lg">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-on-surface-variant text-sm mb-2">Saved Cases</p>
                <p class="text-3xl font-bold">${savedCases.length}</p>
              </div>
              <span class="material-symbols-outlined text-primary text-4xl">bookmark</span>
            </div>
          </div>
          <div class="bg-surface-container p-6 rounded-lg">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-on-surface-variant text-sm mb-2">Total Cases</p>
                <p class="text-3xl font-bold">${window.app.data.cases.length}</p>
              </div>
              <span class="material-symbols-outlined text-primary text-4xl">gavel</span>
            </div>
          </div>
          <div class="bg-surface-container p-6 rounded-lg">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-on-surface-variant text-sm mb-2">Last Updated</p>
                <p class="text-3xl font-bold">Today</p>
              </div>
              <span class="material-symbols-outlined text-primary text-4xl">today</span>
            </div>
          </div>
        </div>

        <!-- Saved Cases Section -->
        <div>
          <h2 class="text-2xl font-bold mb-6">My Saved Cases</h2>
          ${savedCases.length === 0 ? `
            <div class="bg-surface-container p-12 rounded-lg text-center">
              <span class="material-symbols-outlined text-4xl text-on-surface-variant block mb-4">bookmark_outline</span>
              <p class="text-on-surface-variant mb-4">No saved cases yet</p>
              <a href="#search" class="btn-primary">Browse Cases</a>
            </div>
          ` : `
            <div class="space-y-4">
              ${savedCases.map(c => `
                <div class="case-card">
                  <div class="flex justify-between items-start mb-3 flex-wrap gap-4">
                    <div class="flex-grow">
                      <h3 class="font-bold text-lg text-primary cursor-pointer hover:underline" onclick="window.location.hash = 'case/${c.id}'">${c.title}</h3>
                      <p class="text-sm text-on-surface-variant">📍 ${c.bench} • 📅 ${c.date}</p>
                    </div>
                    <span class="badge badge-${c.status.toLowerCase()}">${c.status}</span>
                  </div>
                  <p class="text-sm text-on-surface-variant mb-4">${c.excerpt}</p>
                  <div class="flex gap-2 flex-wrap">
                    <button class="btn-primary" onclick="window.location.hash = 'case/${c.id}'">View</button>
                    <button class="btn-secondary" onclick="window.app.data.removeCaseFromLibrary(${c.id}); window.app.renderApp()">Remove</button>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      </div>
    `;
  }
}