export class DataManager {
  constructor() {
    this.cases = [];
    this.savedCases = this.loadSavedCases();
  }

  async loadCases() {
    // Mock data - replace with API call
    this.cases = [
      {
        id: 1,
        title: 'Court on its own Motion vs. State of Delhi',
        bench: 'Principal Bench',
        date: '2025-02-15',
        status: 'Disposed',
        topics: ['Air Quality', 'Urban Planning', 'Stubble Burning'],
        excerpt: '...The Tribunal takes note of the persistent decline in air quality indices across the National Capital Region. Directives are hereby issued to the Chief Secretary to ensure immediate implementation of the GRAP-IV measures...',
        content: 'Full case content here...'
      },
      {
        id: 2,
        title: 'Sanjay Kumar vs. Union of India & Ors.',
        bench: 'Central Zone Bench',
        date: '2025-02-02',
        status: 'Pending',
        topics: ['Illegal Mining', 'River Narmada'],
        excerpt: 'The applicant has raised serious concerns regarding mechanical dredging operations within the prohibited zones of the riverbed...',
        content: 'Full case content here...'
      },
      {
        id: 3,
        title: 'Save Forest Alliance vs. State of Maharashtra',
        bench: 'Western Zone Bench',
        date: '2025-01-28',
        status: 'Disposed',
        topics: ['Deforestation', 'Western Ghats', 'Eco-Sensitive Zone'],
        excerpt: 'The final judgment emphasizes the Precautionary Principle. No further construction shall be permitted within the buffer zone...',
        content: 'Full case content here...'
      }
    ];
  }

  searchCases(query) {
    if (!query) return this.cases;
    return this.cases.filter(c => 
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.topics.some(t => t.toLowerCase().includes(query.toLowerCase()))
    );
  }

  getCaseById(id) {
    return this.cases.find(c => c.id === parseInt(id));
  }

  saveCaseToLibrary(caseId) {
    if (!this.savedCases.includes(caseId)) {
      this.savedCases.push(caseId);
      localStorage.setItem('ngt-saved-cases', JSON.stringify(this.savedCases));
    }
  }

  removeCaseFromLibrary(caseId) {
    this.savedCases = this.savedCases.filter(id => id !== caseId);
    localStorage.setItem('ngt-saved-cases', JSON.stringify(this.savedCases));
  }

  isCaseSaved(caseId) {
    return this.savedCases.includes(caseId);
  }

  getSavedCases() {
    return this.cases.filter(c => this.savedCases.includes(c.id));
  }

  loadSavedCases() {
    const saved = localStorage.getItem('ngt-saved-cases');
    return saved ? JSON.parse(saved) : [];
  }
}