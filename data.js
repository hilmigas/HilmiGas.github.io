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
    linkedin: "https://linkedin.com",
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
    },
    {
      role: "Peer Tutor & Lab Assistant",
      company: "Istinye University – CS Department",
      location: "Istanbul, Turkey",
      duration: "2023 - 2024",
      description: [
        "Supported undergraduate students in courses covering Algorithms, OOP (C++/C#), and Databases.",
        "Helped debug student projects and explain complex data structures hands-on.",
        "Developed practice problem sets for weekly lab sessions."
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
      title: "AI Attendance System",
      category: "ai",
      description: "A smart facial-recognition attendance system powered by Python and OpenCV. Automatically marks attendance in real-time using computer vision. Built with a Laravel backend dashboard for management and reporting.",
      tags: ["Python", "OpenCV", "Laravel", "PHP", "AI", "Computer Vision"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
      liveLink: "#",
      githubLink: "https://github.com/HilmiGas",
      status: "coming_soon"
    },
    {
      title: "Laravel Web Platform",
      category: "backend",
      description: "A full-featured multi-role web application built with Laravel and PHP. Features role-based access control, REST API integration, and advanced database relations with an admin control panel.",
      tags: ["Laravel", "PHP", "MySQL", "REST API", "Blade"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
      liveLink: "#",
      githubLink: "https://github.com/HilmiGas"
    },
    {
      title: "C++ Algorithm Suite",
      category: "systems",
      description: "A comprehensive library of advanced data structures and algorithms implemented from scratch in C++. Includes sorting, graph traversal, dynamic programming, and tree structures with benchmark comparisons.",
      tags: ["C++", "Algorithms", "Data Structures", "Systems"],
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600&auto=format&fit=crop",
      liveLink: "#",
      githubLink: "https://github.com/HilmiGas"
    },
    {
      title: "C# Desktop Manager",
      category: "desktop",
      description: "A Windows desktop application developed with C# and .NET. Features intuitive task and data management UI, local database integration using Entity Framework, and export functionality.",
      tags: ["C#", ".NET", "WPF", "Entity Framework", "SQLite"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&auto=format&fit=crop",
      liveLink: "#",
      githubLink: "https://github.com/HilmiGas"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
} else {
  window.portfolioData = portfolioData;
}
