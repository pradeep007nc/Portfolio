export type Skill =
  | "React"
  | "Node.js"
  | "Next.js"
  | "MongoDB"
  | "Express"
  | "PostgreSQL"
  | "Docker"
  | "AWS"
  | "Typescript"
  | "Git"
  | "3js"
  | "Tailwind";

export const skilltech: Record<Skill, string> = {
  React: "/tech/react.png",
  "Node.js": "/tech/nodejs.png",
  "Next.js": "/tech/nextjs.png",
  MongoDB: "/tech/mongodb.png",
  Express: "/tech/express.png",
  PostgreSQL: "/tech/postgresql.png",
  Docker: "/tech/docker.png",
  AWS: "/tech/aws.png",
  Typescript: "/tech/typescript.png",
  Git: "/tech/git.png",
  "3js": "/tech/3js.png",
  Tailwind: "/tech/tailwindcss.png",
};

// Define a union type for the skills
export type SkillName =
  | "MERN Stack"
  | "TailwindCSS"
  | "Redux"
  | "Firebase"
  | "NextJS"
  | "Stripe"
  | "Zod"
  | "Cloudinary"
  | "ShadCN"
  | "ReactJS"
  | "Unsplash API"
  | "ExpressJS"
  | "Jest"
  | "Supertest"
  | "Swagger"
  | "Postman"
  | "MovieListAPI"
  | "SASS"
  | "MongoDB"
  | "Zustand"
  | "NodeJS"
  | "Javascript";

// Create a Record that maps each SkillName to its icon path
export const skills: Record<SkillName, string> = {
  "MERN Stack": "/tech/mernstack.png",
  TailwindCSS: "/tech/tailwindcss.png",
  Redux: "/tech/redux.png",
  Firebase: "/tech/firebase.png",
  NextJS: "/tech/nextjs.png",
  Stripe: "/tech/stripe.png",
  Zod: "/tech/zod.jpeg",
  Cloudinary: "/tech/cloudinary.jpg",
  ShadCN: "/tech/shadcn.svg",
  ReactJS: "/tech/react.png",
  "Unsplash API": "/tech/unsplash.png",
  ExpressJS: "/tech/express.png",
  Jest: "/tech/jest.png",
  Supertest: "/tech/supertest.png",
  Swagger: "/tech/swagger.png",
  Postman: "/tech/postman.png",
  MovieListAPI: "/tech/movies.png",
  SASS: "/tech/sass.png",
  MongoDB: "/tech/mongodb.png",
  Zustand: "/tech/zustand.jpeg",
  NodeJS: "/tech/nodejs.png",
  Javascript: "/tech/javascript.png",
};

export const jobProfiles = [
  {
    title: "Fullstack Developer",
    img: "/acubiq.png",
    company: "Acubiq Pvt. Ltd.",
    duration: "July 2024 - Present",
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind",
      "Git",
      "3js",
    ],
    scale: "1.3",
    description: [
      `Designed and built a MERN stack application that allows users to customize 3D wardrobe models in real-time, utilizing GLTF files created in Blender and rendered using Babylon.js and Three.js for interactive, immersive user experiences.`,
      `Created a comprehensive content management system (CMS) for administrators, enabling efficient management of customer orders, payments, and inventory, while streamlining backend operations and improving business workflow.`,
      `Enabled users to make dynamic modifications to their 3D wardrobe items, with instant visual updates on textures, colors, and styles, enhancing the overall user experience with interactive and responsive design features.`,
      `Designed and developed a user-centric, visually appealing landing page for the Acubiq platform, optimized for both desktop and mobile devices, focusing on engagement and seamless navigation to drive user conversion and interest.`,
    ],
  },
  {
    title: "Freelancer",
    company: "Self",
    skills: [
      "Next.js",
      "Typescript",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Express",
      "Docker",
      "Tailwind",
      "Git",
    ],
    duration: "July 2023 - Present",
    description: [
      `Designed and developed several full-stack applications using the MERN stack and Next.js, creating scalable, high-performance solutions focused on delivering rich user experiences and optimized performance.`,
      `Built and deployed a variety of self-initiated web applications, including e-commerce platforms, content management systems, and data-driven dashboards, demonstrating proficiency in both front-end and back-end technologies.`,
      `Focused on creating responsive, dynamic UIs with React and Next.js, while ensuring seamless integration with back-end services powered by Node.js, Express, and MongoDB, and utilizing cloud deployment practices.`,
      `Contributed to personal projects showcasing expertise in modern web development practices such as component-driven development, API integration, and database optimization, refining skills in both development and project management.`,
    ],
  },
];

export const projects = [
  {
    name: "Rozilla RealEstate",
    description: [
      "Explore the world of real estate with Rozilla RealEstate, a Full Stack MERN architecture",
      "Seamlessly upload, manage, and explore property listings for sale or rent with intuitive CRUD operations",
      "Enjoy optimized property management processes through powerful state management using Redux-Toolkit.",
      "Elevate your experience with integrated Firebase, ensuring streamlined authentication and an overall enhanced user journey.",
      "Immerse yourself in a visually stunning and highly functional interface crafted with modern design principles and Tailwind CSS.",
    ],
    link: "https://github.com/vishnuarjun512/mern-RealEstate",
    tech: ["MERN Stack", "TailwindCSS", "Redux", "Firebase"],
    image: [
      "/rozilla/rozilla-home.png",
      "/rozilla/rozilla-listing-explore.png",
      "/rozilla/rozilla-listings-update.png",
      "/rozilla/rozilla-listings.png",
    ],
    hosted: {
      yes: true,
      link: "https://rozilla-realestate.onrender.com/",
    },
    category: "FullStack",
  },
  {
    name: "Ecommerce - Admin",
    description: [
      "Elevate your ecommerce experience with Ecommerce-Admin, a comprehensive Content Management System (CMS).",
      "Manage all product activities and payments seamlessly.",
      "Custom billboards for categories, categorized products for variability, and a dedicated dashboard for store statistics.",
      "Built with Next.js, Stripe for payments, Zod for data validation, Cloudinary for image management, and styled with ShadCN.",
    ],
    link: "https://github.com/vishnuarjun512/Ecommerce-NextJS-Admin",
    tech: ["NextJS", "Stripe", "Zod", "Cloudinary", "ShadCN"],
    image: [
      "/ecommerce/ecommerce-admin-products.png",
      "/ecommerce/ecommerce-admin-create-products.png",
      "/ecommerce/ecommerce-admin-billboards.png",
      "/ecommerce/ecommerce-admin-dashboard.png",
      "/ecommerce/ecommerce-admin-categories.png",
    ],
    hosted: {
      yes: true,
      link: "https://ecommercenextjsadmin.onrender.com",
    },
    category: "FullStack",
  },
  {
    name: "Image Gallery",
    description: [
      "Immerse yourself in a visually stunning Image Gallery powered by ReactJS and TailwindCSS.",
      "Designed for the frontend, this project showcases a dedication to delivering an exceptional user experience.",
      "Explore a curated collection of beautiful images sourced through seamless interactions with the Unsplash API.",
    ],
    link: "https://github.com/vishnuarjun512/unsplash-image-gallery-ReactJS",
    tech: ["ReactJS", "TailwindCSS", "Unsplash API"],
    image: ["/imageGallery.png"],
    hosted: {
      yes: false,
      link: "",
    },
    category: "Frontend",
  },
  {
    name: "Social Media",
    description: [
      "This Backend Project is a collective set of RESTful API routes designed to facilitate the management of a Social Media App efficiently.",
      "Developed a robust and scalable backend API using Node.js, Express.js, and MongoDB for a social media platform.",
      "Implemented RESTful API endpoints to handle user authentication, post creation, following/follower functionality, and more.",
      "Employed MongoDB as the NoSQL database to store user profiles, posts, and relationship data efficiently.",
      "Implemented unit tests using Jest and Supertest to validate the functionality and behavior of API endpoints.",
      "Created detailed documentation for API endpoints, request/response payloads, and error codes using tools like Swagger.",
    ],
    tech: ["ExpressJS", "Jest", "Supertest", "Swagger"],
    link: "https://github.com/vishnuarjun512/Social-Media-Backend",
    image: ["/socialMedia.png"],
    hosted: {
      yes: true,
      link: "https://social-media-backend-2dqa.onrender.com/api-docs/",
    },
    category: "Backend",
  },
  {
    name: "Todo Web API",
    description: [
      "The Task Management API Backend is a collective set of API routes designed to facilitate the management of a TaskList App efficiently.",
      "Simplify task management with the Todo Web API built using ExpressJS and NodeJS",
      "The API is designed with scalability in mind, allowing for the addition of more endpoints and features to meet future requirements.",
      "The API supports tracking task completion statistics over different time intervals, facilitating maintenance and monitoring of task-related activities.",
      "The provided example requests and responses serve as comprehensive documentation made with POSTMAN, making it easy for developers to understand and utilize the API.",
    ],
    tech: ["ExpressJS", "Postman"],
    link: "https://github.com/vishnuarjun512/Task-Manager-API",
    image: ["/todo.png"],
    hosted: {
      yes: true,
      link: "https://documenter.getpostman.com/view/30059269/2s9YeD9DRt",
    },
    category: "Backend",
  },
  {
    name: "MTVx Movies",
    description: [
      "Experience the world of movies with MTVx Movies, a frontend project crafted with ReactJS and TailwindCSS.",
      "Built to showcase movies using the MovieListAPI.",
    ],
    link: "https://github.com/vishnuarjun512/Movie-Website/tree/dev",
    tech: ["ReactJS", "TailwindCSS", "MovieListAPI"],
    image: ["/mtvx.png"],
    hosted: {
      yes: false,
      link: "",
    },
    category: "Frontend",
  },
  {
    name: "Plantii Ecommerce",
    description: [
      "Explore the Plantii Ecommerce project, a frontend endeavor developed with ReactJS and styled with SASS.",
    ],
    link: "https://github.com/vishnuarjun512/Plant_Ecommerce",
    tech: ["ReactJS", "SASS"],
    image: ["/planti.png"],
    hosted: {
      yes: false,
      link: "",
    },
    category: "Frontend",
  },
  {
    name: "Data Analytics",
    description: [
      "Dive into the world of finance with Data Analytics, a frontend project developed using ReactJS and styled with TailwindCSS.",
    ],
    link: "https://github.com/vishnuarjun512/Data-Finance-React",
    tech: ["ReactJS", "TailwindCSS"],
    image: ["/dataAnalytics.png"],
    hosted: {
      yes: false,
      link: "",
    },
    category: "Frontend",
  },
  {
    name: "Portfolio",
    description: [
      "Explore a portfolio showcasing various projects, built with ReactJS and styled with TailwindCSS.",
    ],
    link: "https://github.com/vishnuarjun512/portfolio",
    tech: ["ReactJS", "TailwindCSS"],
    image: ["/portfolio.png"],
    hosted: {
      yes: true,
      link: "https://vishnuarjun512.github.io/portfolio/",
    },
    category: "Frontend",
  },
  {
    name: "Simple Calculator",
    description: ["Experience a simple calculator built with JavaScript."],
    link: "https://github.com/vishnuarjun512/Calculator",
    tech: ["Javascript"],
    image: ["/calculator.png"],
    hosted: {
      yes: true,
      link: "https://vishnuarjun512.github.io/Calculator/",
    },
    category: "Frontend",
  },
  {
    name: "Portfolio NextJS",
    description: [
      "Explore a Next.js version of my Portfolio.",
      "Added Categorisation of Projects with their Details in a New Tab",
      "New User Interface with colorful picks",
      "Form to Contact me with your meaningful message",
    ],
    tech: ["NextJS"],
    link: "https://github.com/vishnuarjun512/portfolio-NextJS",
    hosted: "",
    image: ["/portfolio2.png"],
    category: "NextJS",
  },
  {
    name: "Ecommerce - Client",
    description: [
      "Experience the client-side of the Ecommerce project built with Next.js and styled with TailwindCSS.",
      "Utilizes MongoDB and Zustand for state management.",
    ],
    link: "https://github.com/vishnuarjun512/Ecommerce-NextJS-Client",
    tech: ["NextJS", "TailwindCSS", "MongoDB", "Zustand"],
    image: ["/ecommerce-client.png"],
    hosted: {
      yes: true,
      link: "https://ecommerce-client-d6z2.onrender.com",
    },
    category: "NextJS",
  },
  {
    name: "Notes API",
    description: [
      "The Notes Taking Application Backend is a robust set of RESTful API routes designed to support a comprehensive note-taking system.",
      "The API provides functionalities for creating, updating, retrieving, and deleting notes, offering a complete set of CRUD operations.",
      "The API supports robust maintenance and monitoring capabilities, allowing developers to track note-related activities efficiently.",
      "Developed with ExpressJS, NodeJS,",
      "Performed Unit testing with Jest, Supertest ",
      "Documentation done right with Swagger.",
    ],
    tech: ["ExpressJS", "NodeJS", "Jest", "Supertest", "Swagger"],
    link: "https://github.com/vishnuarjun512/backend-notes-api",
    hosted: "",
    image: ["/notes.png"],
    category: "Backend",
  },
];
