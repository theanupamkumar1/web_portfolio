// upload.js
const admin = require("firebase-admin");
require("dotenv").config();

// Initialize Firebase Admin SDK
const serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Your static data (copy-pasted from your React components)
const projects = [
  {
    id: 1,
    title: "Banking System",
    technologies: ["Python", "SQLite"],
    backgroundImage: "../../bm.png",
    link: "https://github.com/theanupamkumar1/banking-system-with-sqlite-db",
    isOnGithub: true,
  },
  {
    id: 2,
    title: "Mental Fitness Tracker",
    technologies: ["Numpy", "Pandas", "MatplotLib", "SK-Learn", "Python"],
    backgroundImage: "../../mental-fi.png",
    link: "https://github.com/theanupamkumar1/Mental-Fitness-Tracker",
    isOnGithub: true,
  },
  {
    id: 1,
    title: "Banking System",
    technologies: ["Python", "SQLite"],
    backgroundImage: "../../bm.png",
    link: "https://github.com/theanupamkumar1/banking-system-with-sqlite-db",
    isOnGithub: "t",
  },
  {
    id: 2,
    title: "Mental Fitness Tracker",
    technologies: ["Numpy", "Pandas", "MatplotLib", "SK-Learn", "Python"],
    backgroundImage: "../../mental-fi.png",
    link: "https://github.com/theanupamkumar1/Mental-Fitness-Tracker",
    isOnGithub: "t",
  },
  {
    id: 3,
    title: "Responsive Portfolio",
    technologies: [
      "React.js",
      "Daisy ui",
      "Email.js",
      "Typescript",
      "Tailwind CSS",
      "Vercel",
    ],
    backgroundImage: "../../poertfolio.png",
    link: "https://www.theanupamkumar.me/",
    isLive: "t",
  },
  {
    id: 4,
    title: "Python Projects",
    technologies: ["Vannila Python", "py Lib", "py framworks"],
    backgroundImage: "../../py.png",
    link: "https://github.com/theanupamkumar1/python_projects",
    isOnGithub: "True",
  },

  {
    id: 4,
    title: "Domain-Compare",
    technologies: ["LLms", "MERN", "Tailwind CSS", "Langchain", "Azure"],
    backgroundImage: "../../domain.png",
    link: "https://github.com/theanupamkumar1?tab=repositories",
    isOngoing: "r",
  },
  // Add more projects here...
];

const experience = [
  {
    id: 1,
    role: "ML engineer intern",
    company: "IBM",
    location: "Virtual",
    duration: "Jan 2023 - aug 2023",
    description: `Built Mental Fitness Tracker with Python & ML (Linear Regression, Random Forest, XGBoost) to predict mental fitness scores.
    Employed data preprocessing, feature engineering, model training, and evaluated with MSE & R-squared.
    Leveraged Matplotlib/Seaborn for data visualization and fostered collaboration with mental health professionals.`,
    skills: ["Python", "Random Forest", "EDA", "Data viz"],
  },
  {
    id: 2,
    role: "Data Science Intern",
    company: "i-Neuron",
    location: "Remote",
    duration: "Feb 2024 - May 2024",
    description: `Conducted EDA on Zomato Dataset to gain insights for building a predictive model for restaurant ratings.
        Performed data cleaning, including handling null values, renaming columns, dropping irrelevant columns, and addressing outliers.
        Trained and evaluated ML models like Linear Regression, Random Forest Regression, and Decision Tree Regression, with Random Forest achieving 90% accuracy in predicting ratings.`,
    skills: ["Decision Tree", "Python", "Pandas", "Numpy", "Sci-Kit Learn"],
  },
  // Add more experience entries here...
];

const skills = {
  Web_Dev: [
    "MERN-Basic",
    "Bootstrap",
    "Tailwind",
    "UI/UX-Figma",
    "HTML-CSS-JS",
    "Flask",
  ],
  Languages: ["Python", "C/C++", "JavaScript"],
  Data_Science: [
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "Matplotlib",
    "TensorFlow",
    "Keras",
    "Data Vis- PowerBI",
    "EDA",
    "Web-Scraping",
  ],
  ML_Ops: [
    "Classification",
    "Regression",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing (NLP)",
    "PyTorch",
    "Docker",
    "MLflow",
    "Dagshub",
    "Github actions",
  ],
  Additional: [
    "Version Control Systems (Git, GitLab)",
    "Cloud Computing (Google Cloud)",
    "APIs (REST, GraphQL, Fast API)",
    "Content Creation (Editing, Research)",
    "Soft Skills ",
  ],
};

const services = [
  {
    id: 1,
    title: "Python Development",
    description: "Creating applications & solutions with the Python ecosystem.",
    image: "../../ml.png",
  },
  {
    id: 2,
    title: "Web Design",
    description: "Create stunning websites with MERN and Flask.",
    image: "../../web.jpg",
  },
  {
    id: 3,
    title: "ML Modeling",
    description: "Complete ML-Ops workflow with deployment & monitoring.",
    image: "../../ai.jpg",
  },
  {
    id: 4,
    title: "AI-Content Generation",
    description:
      "Leveraging AI to generate creative and engaging content automatically.",
    image: "../../gen_ai.jpg",
  },
  {
    id: 5,
    title: "NLP and Gen AI",
    description:
      "Integrating NLP and Gen AI for advanced text handling and generation.",
    image: "../../nlp.png",
  },
  {
    id: 6,
    title: "Data Analysis",
    description:
      "Analyzing and interpreting complex datasets for decision-making and predictions.",
    image: "../../data.png",
  },
];

const heroSection = {
  name: "Anupam Kumar",
  description: `An AI Engineer, Data Scientist, and a Machine Learning enthusiast. Besides this, I'm a UI/UX designer.
  I'm seeking for a good opportunity in these fields to contribute and gain experience.`,
  stats: [
    { value: "6+", label: "Projects Done" },
    { value: "2yr+", label: "Experience" },
    { value: "2+", label: "Internships" },
  ],
};

const blogs = [
  {
    title: "Getting Started with React",
    content:
      "<p>React is a JavaScript library for building user interfaces...</p>",
    author: "Anupam Kumar",
    date: new Date(),
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Introduction to Firebase",
    content: "<p>Firebase is a Backend-as-a-Service (BaaS) platform...</p>",
    author: "Anupam Kumar",
    date: new Date(),
    image: "https://via.placeholder.com/600x400",
  },
  {
    title:
      "How I Transformed My Static Portfolio into a Dynamic One Using Firebase",
    content: "<p>Firebase is a Backend-as-a-Service (BaaS) platform...</p>",
    author: "Anupam Kumar",
    date: new Date(),
    image: "https://via.placeholder.com/600x400",
  },
  // Add more blogs here...
];

// Function to upload data to Firestore
const uploadData = async () => {
  try {
    // Upload projects
    for (const project of projects) {
      await db.collection("projects").doc(project.id.toString()).set(project);
      console.log(`Uploaded project: ${project.title}`);
    }

    // Upload experience
    for (const exp of experience) {
      await db.collection("experience").doc(exp.id.toString()).set(exp);
      console.log(`Uploaded experience: ${exp.role}`);
    }

    // Upload skills
    for (const [category, techs] of Object.entries(skills)) {
      await db.collection("skills").doc(category).set({ techs });
      console.log(`Uploaded skills category: ${category}`);
    }

    // Upload heroSection
    await db.collection("heroSection").doc("hero").set(heroSection);
    console.log("Uploaded hero section");

    // Upload services
    for (const service of services) {
      await db.collection("services").doc(service.id.toString()).set(service);
      console.log(`Uploaded service: ${service.title}`);
    }

    // Upload blogs
    for (const blog of blogs) {
      await db.collection("blogs").add(blog);
      console.log(`Uploaded blog: ${blog.title}`);
    }

    console.log("All data uploaded successfully!");
  } catch (error) {
    console.error("Error uploading data:", error);
  }
};

// Run the upload function
uploadData();
