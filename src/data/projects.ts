export type Category = "software" | "electronics" | "full-stack";

export const CATEGORY_LABEL: Record<Category, string> = {
  software: "Software",
  electronics: "Electronics",
  "full-stack": "Full-Stack",
};

export type Project = {
  slug: string;
  title: string;
  category: Category;        // lowercase keys
  description: string;       // short card blurb
  longDescription: string[]; // paragraphs/bullets for details page
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  imageAlt?: string;
  screens?: { src: string; alt: string; caption?: string }[]; 
  featured?: boolean;  
};

export const GITHUB_USERNAME = "AmandaMethoxha";

// used for “View all projects” 
export const GITHUB_URL = `https://github.com/AmandaMethoxha`;

// Specific repo for the Student Information System
const SIS_REPO = `https://github.com/AmandaMethoxha/student-information-system`;

export const projects: Project[] = [
  {
    slug: "intelligent-hardware-controller",
    title: "Intelligent Hardware Controller",
    featured: true,
    category: "electronics",
    description:
      "A microcontroller-based system for real-time sensor data processing with ML integration.",
    longDescription: [
      "Built a microcontroller system that ingests multi-sensor data and runs lightweight inference with TensorFlow Lite.",
      "Designed latency-sensitive firmware loops and a serial diagnostics dashboard.",
      "Outcome: lower response time and stable inference on constrained hardware.",
    ],
    tech: ["C++", "Python", "Arduino", "TensorFlow Lite"],
    githubUrl: SIS_REPO,
  },

  {
    slug: "interactive-portfolio",
    title: "Interactive Portfolio",
    featured: true,
    category: "software",
    description:
      "Responsive one-page portfolio with animated headings, hover effects, and timed role swapping.",
    longDescription: [
      "Built with semantic HTML, modern CSS (flex/grid), and a small JS script for timed text transitions and animations.",
      "Responsive and accessible: keyboard-friendly nav and solid color contrast.",
      "Micro-interactions: role cycling (innovator/engineer/programmer), name hue shift on hover, smooth scrolling.",
      "Lightweight static site—easy to deploy on GitHub Pages or Netlify."
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/AmandaMethoxha/student-information-system",
    demoUrl: "/videos/interactive-portfolio.mp4"   // <-- LOCAL MP4
  },


  {
      
    slug: "student-information-system",
    title: "Student Information System",
    featured: true,
    category: "full-stack",
    description:
      "Cross-platform SIS built with .NET MAUI (.NET 7, C#) and SQLite for staff/student management, grades, and real-time updates.",
    longDescription: [
      "Multi-role access: staff add/edit students, manage courses, grades, and notes; view cohort stats (gender, nationality). Students see profile, courses, and grades.",
      "Real-time visibility: one place for up-to-date progress, results, and administrative announcements.",
      "Cross-platform delivery: built in .NET MAUI (.NET 7, C#) targeting Windows, Android, iOS, and macOS from a single codebase.",
      "Performance & scale: snappy UX (typical actions < 2s) with reliability prioritized for peak school hours.",
      "Process & quality: Agile sprints, systematic testing, and GDPR-aware data handling backed by SQLite."
    ],
    tech: ["C#", ".NET 7", ".NET MAUI", "XAML", "SQLite", "Visual Studio"],
    githubUrl: "https://github.com/AmandaMethoxha/student-information-system",
    image: "/images/sis/01-home.png",
    imageAlt: "SIS – role selection screen",
    screens: [
      { src: "/images/sis/01-home.png", alt: "Home: choose Staff or Student" },
      { src: "/images/sis/02-staff-login.png", alt: "Staff login screen" },
      { src: "/images/sis/03-dashboard.png", alt: "Staff dashboard" },
      { src: "/images/sis/04-register-student.png", alt: "Register new student" },
      { src: "/images/sis/05-students-list.png", alt: "List of registered students" }
    ]
  },

  {
    slug: "flask-user-auth-notes",
    title: "Flask Web App",
    featured: false,
    category: "full-stack", // ← keep lowercase to satisfy the Category type
    description:
      "A minimal Flask app with sign-up, login/logout, Bootstrap UI, SQLite via SQLAlchemy, and session management with Flask-Login.",
    longDescription: [
      "Needed a simple, portfolio-ready scaffold to demonstrate secure authentication and a clean Flask project structure.",
      "Built a lightweight Flask application using blueprints, Flask-Login, and SQLAlchemy, with accessible Bootstrap templates.",
      "Provides a clear starting point for adding CRUD features (e.g., notes), deployable to Render/Railway, and easy for reviewers to run locally.",
      "App factory pattern, isolated blueprints, and a small dependency set make it straightforward to extend or refactor.",
      "Flash messages, navbar, and sensible defaults speed up iteration; SQLite keeps setup friction near zero."
    ],
    tech: [
      "Python",
      "Flask",
      "Jinja2",
      "Flask-Login",
      "Flask-SQLAlchemy",
      "SQLAlchemy",
      "SQLite",
      "Bootstrap 4"
    ],
    githubUrl: "https://github.com/AmandaMethoxha/flask-notes-app",
    demoUrl: "/videos/flask-webapp.mp4",

    screens: [                                   
       { src: "/images/flask/login-page.png", alt: "Login Page", 
          caption:
            "The login page checks your email and password and signs you in securely; if anything’s off, it shows a clear error"
        },
       { src: "/images/flask/signup-page.png", alt: "Sign Up page",
          caption:
            "The sign-up page creates a new account with basic validation and logs you in straight away when it’s successful."
        }
     ]
}




];
