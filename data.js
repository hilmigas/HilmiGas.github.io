const portfolioData = {
  personalInfo: {
    name: "Helmi Sayed Suleiman",
    handle: "HilmiGas",
    title: "Software Engineer",
    subtitles: [
      "Backend Developer",
      "AI Systems Builder",
      "Python Engineer",
      "Full-Stack Developer"
    ],
    bio: "Software Engineering graduate with honors from Istinye University. Passionate about building intelligent systems, robust backend architectures, and solving complex problems with clean, efficient code. From AI-powered attendance systems to full-stack web applications — I ship things that matter.",
    email: "haloomy2002@gmail.com",
    location: "Istanbul, Turkey",
    github: "https://github.com/HilmiGas",
    linkedin: "https://www.linkedin.com/in/helmi-sayed-suleiman-8134b8242/",
    cvLink: "#"
  },
  skills: [
    {
      category: "Programming Languages",
      icon: "code",
      items: [
        { name: "Python", level: 90 },
        { name: "C#", level: 82 },
        { name: "C++", level: 78 },
        { name: "PHP", level: 80 }
      ]
    },
    {
      category: "Frameworks & Tools",
      icon: "layers",
      items: [
        { name: "Laravel", level: 85 },
        { name: "REST APIs", level: 88 },
        { name: "Git & GitHub", level: 90 },
        { name: "SQL / Databases", level: 80 }
      ]
    },
    {
      category: "Specializations",
      icon: "cpu",
      items: [
        { name: "Artificial Intelligence", level: 82 },
        { name: "Computer Vision", level: 75 },
        { name: "Backend Architecture", level: 85 },
        { name: "Algorithm Design", level: 80 }
      ]
    }
  ],
  experience: [
    {
      role: "Capstone Project Lead",
      company: "Istinye University",
      location: "Istanbul, Turkey",
      duration: "2024 - 2025",
      description: [
        "Led development of an AI-powered smart attendance system using facial recognition.",
        "Integrated Python + OpenCV-based computer vision pipeline for real-time face detection.",
        "Built a full admin dashboard with Laravel + PHP backend for reporting and management.",
        "Delivered the project with a top academic score, recognized for technical excellence."
      ]
    }
  ],
  education: [
    {
      degree: "B.S. in Software Engineering — Honor Degree",
      institution: "Istinye University",
      location: "Istanbul, Turkey",
      duration: "2021 - 2025",
      gpa: "Honor Graduate",
      achievements: [
        "Graduated with Honors",
        "Capstone project recognized for AI innovation",
        "Coursework: Software Architecture, Artificial Intelligence, Database Systems, Algorithms & Data Structures, Operating Systems, OOP Design Patterns"
      ]
    }
  ],
  projects: [
    {
      id: "attendify",
      title: "Attendify",
      category: "ai",
      badge: "⭐ Capstone Project",
      coDev: "🤝 Co-Developed with @ibrahemassa and @MoBakour",
      coDevUrl: "https://github.com/MoBakour",
      role: "AI & Backend Architecture",
      description: "An intelligent, anti-cheat attendance tracking system achieving real presence validation in under 3 seconds. Built to solve the fundamental problem of proxy attendance through a triple-layer verification architecture.",
      highlights: [
        "Cryptographic time-limited tokens to stop photo-sharing cheats",
        "GPS geofencing via the Haversine formula for physical classroom presence",
        "Biometric AI face-matching using 512-dim FaceNet embeddings + pgvector cosine distance",
        "Sub-50ms vector search using HNSW indexing on PostgreSQL"
      ],
      tags: [
        "Go (Gin-Gonic)",
        "FastAPI",
        "DeepFace",
        "React 19",
        "TypeScript",
        "React Native (Expo)",
        "PostgreSQL",
        "pgvector",
        "HNSW",
        "Laravel"
      ],
      githubLink: "https://github.com/MoBakour/attendify",
      liveLink: "#"
    },
    {
      id: "vision-pipeline",
      title: "Biometric Vision & Detection Engine",
      category: "ai",
      badge: "⚡ Computer Vision",
      description: "High-accuracy face detection and feature extraction service using Python and OpenCV, designed for real-time verification pipelines and automated logging.",
      highlights: [
        "Real-time face detection & alignment pipeline with multi-frame verification",
        "RESTful API interface for seamless integration into web and mobile clients",
        "Optimized frame processing throughput minimizing CPU/GPU latency"
      ],
      tags: [
        "Python",
        "OpenCV",
        "FastAPI",
        "PyTorch",
        "REST APIs"
      ],
      githubLink: "https://github.com/HilmiGas",
      liveLink: "#"
    },
    {
      id: "laravel-management",
      title: "Enterprise Portal & Reporting System",
      category: "backend",
      badge: "🛠️ Full-Stack Backend",
      description: "Robust admin and reporting dashboard built with Laravel & PHP for managing attendance records, automated exports, and role-based access control.",
      highlights: [
        "Role-Based Access Control (RBAC) supporting multiple administrative levels",
        "Automated attendance export pipelines (PDF, Excel, CSV) with audit trails",
        "Optimized relational database queries supporting heavy analytics loads"
      ],
      tags: [
        "Laravel",
        "PHP",
        "MySQL / PostgreSQL",
        "REST APIs",
        "Blade / HTML5"
      ],
      githubLink: "https://github.com/HilmiGas",
      liveLink: "#"
    },
    {
      id: "cpp-allocator",
      title: "High-Speed Memory & Vector Indexer",
      category: "systems",
      badge: "💻 Systems & C++",
      description: "Low-level memory management system and custom vector search data structures implemented in modern C++ for high-performance computing.",
      highlights: [
        "Custom memory pool allocation minimizing runtime dynamic allocation overhead",
        "Efficient nearest-neighbor search algorithm implementation",
        "Cross-platform CLI tool with strict memory leak verification"
      ],
      tags: [
        "C++",
        "Algorithms",
        "Data Structures",
        "Memory Management",
        "Git"
      ],
      githubLink: "https://github.com/HilmiGas",
      liveLink: "#"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
} else {
  window.portfolioData = portfolioData;
}
