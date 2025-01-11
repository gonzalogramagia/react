import {
  gem,
  htmlwhite,
  csswhite,
  jswhite,
  reactwhite,
  nextwhite,
  gitwhite,
  tailwindwhite,
  reduxwhite,
  typescriptwhite,
  underconstruction,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: gem,
  },
  {
    title: "React Developer",
    icon: gem,
  },
  {
    title: "Frontend Developer",
    icon: gem,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: htmlwhite,
  },
  {
    name: "CSS 3",
    icon: csswhite,
  },
  {
    name: "JavaScript",
    icon: jswhite,
  },
  {
    name: "React JS",
    icon: reactwhite,
  },
  {
    name: "Next JS",
    icon: nextwhite,
  },
  {
    name: "Git",
    icon: gitwhite,
  },
  {
    name: "TypeScript",
    icon: typescriptwhite,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindwhite,
  },
  {
    name: "Redux",
    icon: reduxwhite,
  },
];

const projects = [
  {
    name: "Todo",
    description: `Simple CRUD fullstack app`,
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/RZNP7Ws3/temp-Image2-BBn-F3.avif",
    live_demo_link: "https://mern-todo-3a72.onrender.com",
    source_code_link: "https://github.com/gonzagramaglia/mern-todo",
  },
  {
    name: "Blog",
    description: `Moderate CRUD fullstack app`,
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/XvKV64k7/mern-blog.png",
    live_demo_link: "https://mern-blog-dbgd.onrender.com/",
    source_code_link: "https://github.com/gonzagramaglia/mern-blog",
  },
  {
    name: "Ecommerce",
    description: `Complex CRUD fullstack app`,
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
    ],
    image: "https://i.ibb.co/swy8x8L/mern-ecommerce.png",
    live_demo_link: "https://mern-ecommerce-frontend-fiz1.onrender.com",
    source_code_link: "https://github.com/gonzagramaglia/mern-ecommerce",
  },
  {
    name: "Dashboard [soon]",
    description: `Fully project management app`,
    tags: [
      {
        name: "postgres",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },

      {
        name: "aws",
        color: "orange-text-gradient",
      },
    ],
    image: underconstruction,
    live_demo_link: "https://github.com/gonzagramaglia/pern-dashboard",
    source_code_link: "https://github.com/gonzagramaglia/pern-dashboard",
  },
];

export { services, technologies, projects };
