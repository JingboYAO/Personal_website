// Mock Content Validator for local environment
// In a real CI/CD pipeline, this would use Puppeteer/Playwright to scrape live sites

const CONFIG = window.CONFIG;

function validateContent() {
  console.log("Starting Content Validation...");
  
  const report = {
    home: { status: 'pending', errors: [] },
    research: { status: 'pending', errors: [] },
    teaching: { status: 'pending', errors: [] }
  };

  // 1. Validate Home
  // Check intro text (basic check)
  const homeIntro = "I’m a PhD candidate from the Department of Economics, Business School, Hong Kong University of Science and Technology.";
  if (!CONFIG.content.intro.includes(homeIntro)) {
    report.home.errors.push("Intro text mismatch");
  } else {
    report.home.status = 'pass';
  }

  // 2. Validate Research
  // Check Job Market Paper title
  const jmpTitle = "The U.S. Monetary Transmission and International Prices: The Role of a Cost Channel";
  const hasJMP = CONFIG.content.research.jobMarketPaper.some(p => p.title === jmpTitle);
  if (!hasJMP) {
    report.research.errors.push("Job Market Paper missing or title mismatch");
  } else {
    report.research.status = 'pass';
  }

  // 3. Validate Teaching
  // Check specific course
  const courseTitle = "Banking and Financial Intermediation (Master)";
  const hasCourse = CONFIG.content.teaching.some(inst => inst.courses.some(c => c.title === courseTitle));
  if (!hasCourse) {
    report.teaching.errors.push("Specific teaching course missing");
  } else {
    report.teaching.status = 'pass';
  }

  console.log("Validation Report:", report);
  
  // Display report in console or UI if needed
  if (report.home.errors.length > 0 || report.research.errors.length > 0 || report.teaching.errors.length > 0) {
    console.error("Content Validation FAILED. See report above.");
  } else {
    console.log("Content Validation PASSED.");
  }
}

// Expose to window for manual trigger
window.validateContent = validateContent;
