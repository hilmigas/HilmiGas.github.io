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

  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
} else {
  window.portfolioData = portfolioData;
}
