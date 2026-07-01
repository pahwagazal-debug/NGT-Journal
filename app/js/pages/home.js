export class HomePage {
  render() {
    return `
      <div class="min-h-screen">
        <!-- Hero Section -->
        <section class="bg-gradient-to-r from-primary to-tertiary text-white py-20 px-4">
          <div class="max-w-7xl mx-auto text-center">
            <h1 class="text-5xl font-bold mb-4">NGT E-Journal</h1>
            <p class="text-xl mb-8 opacity-90">Comprehensive Environmental Case Law Database</p>
            <div class="flex justify-center gap-4 flex-wrap">
              <a href="#search" class="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:opacity-90 transition">Search Cases</a>
              <a href="#about" class="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition">Learn More</a>
            </div>
          </div>
        </section>

        <!-- Stats Section -->
        <section class="max-w-7xl mx-auto px-4 py-12">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="text-4xl font-bold text-primary mb-2">142</div>
              <p class="text-on-surface-variant">Total Cases</p>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-primary mb-2">45</div>
              <p class="text-on-surface-variant">Benches</p>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-primary mb-2">28</div>
              <p class="text-on-surface-variant">Topics Covered</p>
            </div>
          </div>
        </section>

        <!-- Featured Cases -->
        <section class="bg-surface-container py-12 px-4">
          <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl font-bold mb-8">Recent Cases</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              ${this.renderFeaturedCases()}
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="bg-primary text-white py-12 px-4">
          <div class="max-w-7xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-4">Start Exploring Environmental Case Law</h2>
            <p class="mb-6 opacity-90">Access comprehensive NGT orders and environmental judgments</p>
            <a href="#search" class="bg-white text-primary px-8 py-3 rounded-lg font-bold inline-block hover:opacity-90 transition">Go to Search</a>
          </div>
        </section>
      </div>
    `;
  }

  renderFeaturedCases() {
    const cases = window.app.data.cases.slice(0, 3);
    return cases.map(c => `
      <div class="case-card cursor-pointer" onclick="window.location.hash = 'case/${c.id}'">
        <div class="flex justify-between items-start mb-3">
          <h3 class="font-bold text-lg text-primary">${c.title}</h3>
          <span class="badge badge-${c.status.toLowerCase()}">${c.status}</span>
        </div>
        <p class="text-sm text-on-surface-variant mb-3">📍 ${c.bench} • 📅 ${c.date}</p>
        <p class="text-sm text-on-surface-variant mb-4">${c.excerpt}</p>
        <div class="flex flex-wrap gap-2">
          ${c.topics.map(t => `<span class="chip">${t}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }
}