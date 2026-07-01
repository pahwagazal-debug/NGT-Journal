export class AboutPage {
  render() {
    return `
      <div class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-4xl font-bold text-primary mb-6">About NGT E-Journal</h1>

        <div class="bg-surface-container p-8 rounded-lg mb-8">
          <h2 class="text-2xl font-bold mb-4">What is NGT E-Journal?</h2>
          <p class="text-on-surface-variant leading-relaxed mb-4">
            The National Green Tribunal (NGT) E-Journal is a comprehensive digital database of environmental case law and tribunal orders. 
            It provides easy access to NGT decisions, judgments, and environmental protection measures across India.
          </p>
          <p class="text-on-surface-variant leading-relaxed">
            Our mission is to make environmental law more accessible to lawyers, students, researchers, and the general public.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div class="bg-primary text-white p-8 rounded-lg">
            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
              <span class="material-symbols-outlined">gavel</span>
              Our Focus
            </h3>
            <ul class="space-y-2">
              <li>✓ Environmental Law</li>
              <li>✓ Green Tribunal Orders</li>
              <li>✓ Case Judgments</li>
              <li>✓ Environmental Protection</li>
            </ul>
          </div>
          <div class="bg-secondary text-white p-8 rounded-lg">
            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
              <span class="material-symbols-outlined">public</span>
              Our Commitment
            </h3>
            <ul class="space-y-2">
              <li>✓ Free Access to Information</li>
              <li>✓ Regular Updates</li>
              <li>✓ Transparent Search</li>
              <li>✓ User-Friendly Interface</li>
            </ul>
          </div>
        </div>

        <div class="bg-surface-container p-8 rounded-lg mb-8">
          <h2 class="text-2xl font-bold mb-4">Key Features</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="font-bold text-primary mb-2">🔍 Advanced Search</h3>
              <p class="text-on-surface-variant">Search by case name, topics, bench, or date range</p>
            </div>
            <div>
              <h3 class="font-bold text-primary mb-2">📁 Save & Organize</h3>
              <p class="text-on-surface-variant">Save important cases to your personal library</p>
            </div>
            <div>
              <h3 class="font-bold text-primary mb-2">📊 Rich Metadata</h3>
              <p class="text-on-surface-variant">Comprehensive case information and tags</p>
            </div>
            <div>
              <h3 class="font-bold text-primary mb-2">🌙 Dark Mode</h3>
              <p class="text-on-surface-variant">Easy on the eyes with dark theme support</p>
            </div>
          </div>
        </div>

        <div class="bg-surface-container p-8 rounded-lg">
          <h2 class="text-2xl font-bold mb-4">Contact & Support</h2>
          <p class="text-on-surface-variant mb-4">Have questions or feedback? We'd love to hear from you.</p>
          <div class="flex gap-4 flex-wrap">
            <button class="btn-primary">Email Us</button>
            <button class="btn-secondary">Send Feedback</button>
          </div>
        </div>
      </div>
    `;
  }
}