export const portfolioData = {
  personalDetails: {
    name: "Vaibhav Jadhav",
    title: "Software Engineer | Java Full Stack",
    email: "vaibhavjadhav0248@gmail.com",
    phone: "+919359437626",
    location: "Chhatrapati Sambhaji Nagar, Maharashtra, India",
    github: "https://github.com/Vaibhav0248",
    linkedin: "https://www.linkedin.com/in/vaibhav-jadhav-67984b292",
    resumeUrl: "/VAIBHAV_JADHAV_CV.pdf",
    shortIntro: "B.Tech Computer Science & Engineering student and Full Stack Developer with specialized expertise in Java, Spring Boot, and database management systems. Experience in building role-based web architectures, integrating AI into backend databases, and implementing enterprise security patterns.",
    careerObjective: "Detail-oriented and driven Computer Science & Engineering B.Tech student with a strong academic foundation (CGPA 9.10) seeking to leverage my Java Full Stack capabilities, backend development experience, and passion for problem-solving in a fast-paced software engineering team. Eager to contribute to building high-scale product applications and real-time backend systems."
  },
  education: [
    {
      institution: "Maharashtra Institute of Technology, Chhatrapati Sambhaji Nagar",
      degree: "B.Tech (Computer Science & Engineering)",
      period: "June 2022 - June 2026",
      metric: "CGPA: 9.10",
      details: "Focused on core computer science subjects, database designs, Object-Oriented programming, and full-stack software development methodologies."
    },
    {
      institution: "Late Pundlikrao Patil High School, Mohra",
      degree: "Higher Secondary (11th & 12th)",
      period: "2020 - 2022",
      metric: "Percentage: 79.83%",
      details: "Board: Maharashtra State Board. Specialized in Science and Mathematics."
    },
    {
      institution: "A.K. Waghmare High School, Chhatrapati Sambhaji Nagar",
      degree: "Secondary School (10th)",
      period: "2020",
      metric: "Percentage: 87.40%",
      details: "Board: Maharashtra State Board. Graduated with high distinction."
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "SQL", level: 85 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 }
      ]
    },
    {
      category: "Frameworks & Tools",
      items: [
        { name: "Spring Boot", level: 85 },
        { name: "Spring Core & Spring MVC", level: 80 },
        { name: "React", level: 75 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", level: 85 }
      ]
    }
  ],
  experience: [
    {
      role: "Intern - Software Development",
      company: "Indian Internet Solutions Pvt. Ltd.",
      location: "Chhatrapati Sambhaji Nagar",
      period: "Jan 2026 - June 2026",
      bullets: [
        "Worked on web development, game development and gained hands-on experience in frontend, backend, and team collaboration.",
        "Kids Learning Application | Developed an interactive educational game application with a responsive UI, easy navigation, and engaging learning activities.",
        "Marathi Balgeet Website (Deployed - <a href='https://marathibalgeet.in' target='_blank' rel='noopener noreferrer' class='text-cyanAccent hover:underline font-semibold'>marathibalgeet.in</a>) | Developed and deployed an educational website for Marathi alphabets and collection of Marathi Balgeet lyrics and image-based learning content.",
      ],
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ],
  projects: [
    {
      title: "AI-Powered Database Management System",
      tech: ["Java", "OpenAI API", "MySQL", "JavaFX"],
      problem: "Traditional relational databases require non-technical stakeholders or developers to write manual, syntactically precise SQL queries, resulting in high learning curves and slow ad-hoc data extraction.",
      solution: "Engineered an AI-assisted database console where users write plain English, which is converted to optimized SQL queries and executed dynamically on MySQL with real-time UI data presentation.",
      features: [
        "AI translation engine that parses natural language inputs and generates executable SQL statements using OpenAI APIs.",
        "Secure JDBC database connectivity mapping queries directly to MySQL schemas.",
        "Modular JavaFX UI with input fields, execute controls, and interactive data grids to display MySQL query results.",
        "Safe error handling and verification processes preventing malicious or broken query executions."
      ],
      challenges: "Handling complex natural language expressions that contain multi-table relations and ensuring the AI output is clean SQL without markdown blocks.",
      contribution: "Designed and built the entire core backend, database connectivity modules, and JavaFX layout views. Structured OpenAI API calls and system prompts to guarantee stable SQL code generation.",
      github: "https://github.com/Vaibhav0248"
    },
    {
      title: "Hospital Management System",
      tech: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "MySQL", "Thymeleaf"],
      problem: "Medical institutions suffer from disconnected modules for doctor calendars, patient records, dynamic billing, and role-based staff operations, leading to administrative delays and data mismatch.",
      solution: "Developed a comprehensive full-stack platform that integrates doctor availability schedules, billing, and role-based permissions into a unified, secure system.",
      features: [
        "Multi-role user authentication and access controls mapping features directly to Admin, Doctor, Patient, and Staff profiles using Spring Security.",
        "Real-time appointment calendar scheduling with automated conflict detection and a custom emergency override mechanism.",
        "Dynamic invoicing module tracking multiple medical services, items, payment statuses, and partial collections.",
        "Robust REST APIs connecting modular controllers to Hibernate ORM entities, integrated seamlessly with a responsive front-end template using Thymeleaf."
      ],
      challenges: "Preventing double-booking appointments when two requests occur simultaneously, resolved by database constraints and service-level synchronization.",
      contribution: "Architected the database schema, designed the entity relationships with Hibernate, programmed the Spring Boot security filters, and coded the controllers and billing calculations.",
      github: "https://github.com/Vaibhav0248"
    },
    {
      title: "Bookify – A Book Management Platform",
      tech: ["React", "Firebase", "Cloudinary"],
      problem: "Book enthusiasts need a dedicated workspace to search, register, and organize personal reading collections online with secure profile isolation and fast cover image rendering.",
      solution: "Engineered a responsive, high-performance book management catalog interface utilizing React, integrated with cloud authentication and cloud assets database systems.",
      features: [
        "Implemented Firebase Authentication to support secure user login, session caching, and user registration.",
        "Integrated Cloudinary APIs for dynamic upload, storage, and retrieval of book cover images.",
        "Designed a responsive and interactive interface with React Hooks and the Context API for modular global state sharing."
      ],
      challenges: "Managing latency and UI consistency during direct-to-cloud cover uploads, solved by client-side image compression and loading skeletons.",
      contribution: "Configured Firebase backend endpoints, structured Context providers for books collections state, and developed the image transformation and upload workflows.",
      github: "https://github.com/Vaibhav0248"
    }
  ],
  certifications: [
    {
      title: "Database Foundation",
      issuer: "Oracle Academy",
      type: "Course Completion Certificate",
      details: "Covered relational database design, basic SQL statements, and database creation methodologies."
    },
    {
      title: "Bootcamp on Robotic Process Automation",
      issuer: "NIELIT",
      type: "Certificate of Completion",
      details: "Acquired fundamentals of RPA concepts, robotic automation workflows, and bot development."
    },
    {
      title: "Master Industrial Grade Python Skills Workshop",
      issuer: "Mr. Krishnakant Mane",
      type: "Certificate of Completion",
      details: "Trained on enterprise application development using Python, database connectivity, and data management."
    },
    {
      title: "Bootcamp on Unmanned Aerial Systems",
      issuer: "NIELIT",
      type: "Certificate of Completion",
      details: "Studied basics of UAS, drone mechanics, operations, navigation systems, and compliance guidelines."
    }
  ]
};
