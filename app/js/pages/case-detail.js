export class CaseDetailPage {
  render() {
    const caseId = window.location.hash.split('/')[1];
    const caseData = window.app.data.getCaseById(caseId);

    if (!caseData) {
      return '<div class="max-w-7xl mx-auto px-4 py-12"><h1 class="text-2xl font-bold">Case not found</h1></div>';
    }

    const isSaved = window.app.data.isCaseSaved(caseData.id);

    return `
      <div class="max-w-4xl mx-auto px-4 py-8">
        <button class="flex items-center gap-2 text-primary hover:underline mb-6" onclick="window.location.hash = 'search'">
          <span class="material-symbols-outlined">arrow_back</span>
          Back to Search
        </button>

        <div class="bg-surface-container p-8 rounded-lg">
          <div class="flex justify-between items-start mb-4 flex-wrap gap-4">
            <div>
              <h1 class="text-3xl font-bold text-primary mb-2">${caseData.title}</h1>
              <p class="text-on-surface-variant">📍 ${caseData.bench} • 📅 ${caseData.date}</p>
            </div>
            <span class="badge badge-${caseData.status.toLowerCase()} text-lg">${caseData.status}</span>
          </div>

          <div class="flex gap-4 mb-8 flex-wrap">
            <button class="btn-primary" onclick="alert('PDF downloaded')">Download PDF</button>
            <button class="btn-secondary" onclick="window.app.data.${isSaved ? 'removeCaseFromLibrary' : 'saveCaseToLibrary'}(${caseData.id}); window.app.renderApp()">
              ${isSaved ? '✓ Saved to Library' : 'Save to Library'}
            </button>
            <button class="btn-secondary" onclick="alert('Shared')">Share</button>
          </div>

          <div class="border-t border-muted pt-8">
            <h2 class="text-2xl font-bold mb-4">Case Summary</h2>
            <p class="text-on-surface-variant leading-relaxed mb-6">${caseData.excerpt}</p>

            <h2 class="text-2xl font-bold mb-4 mt-8">Topics</h2>
            <div class="flex flex-wrap gap-2 mb-6">
              ${caseData.topics.map(t => `<span class="chip">${t}</span>`).join('')}
            </div>

            <h2 class="text-2xl font-bold mb-4 mt-8">Full Content</h2>
            <div class="text-on-surface-variant leading-relaxed">
              ${caseData.content}
            </div>
          </div>
        </div>

        <!-- Related Cases -->
        <div class="mt-12">
          <h2 class="text-2xl font-bold mb-6">Related Cases</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${this.renderRelatedCases(caseData.topics[0], caseData.id)}
          </div>
        </div>
      </div>
    `;
  }

  renderRelatedCases(topic, excludeId) {
    const related = window.app.data.cases
      .filter(c => c.topics.includes(topic) && c.id !== excludeId)
      .slice(0, 2);

    return related.map(c => `
      <div class="case-card cursor-pointer" onclick="window.location.hash = 'case/${c.id}'">
        <h3 class="font-bold text-primary mb-2">${c.title}</h3>
        <p class="text-sm text-on-surface-variant mb-3">📍 ${c.bench} • 📅 ${c.date}</p>
        <p class="text-sm text-on-surface-variant">${c.excerpt}</p>
      </div>
    `).join('');
  }
}