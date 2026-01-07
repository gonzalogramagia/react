import {
  htmlwhite,
  csswhite,
  jswhite,
  reactwhite,
  nextwhite,
  gitwhite,
  tailwindwhite,
  reduxwhite,
  typescriptwhite,
  nodejs,
  mongodb,
  postgres,
  linux,
  go,
  underconstruction,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    url: false,
    hideOnMobile: true,
  },
  {
    id: "works",
    title: "Works",
    url: false,
  },
  {
    id: "contact",
    title: "Contact",
    url: false,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: htmlwhite,
    level: "90%",
  },
  {
    name: "CSS 3",
    icon: csswhite,
    level: "80%",
  },
  {
    name: "JavaScript",
    icon: jswhite,
    level: "75%",
  },
  {
    name: "React JS",
    icon: reactwhite,
    level: "70%",
  },
  {
    name: "Next JS",
    icon: nextwhite,
    level: "65%",
  },
  {
    name: "Git",
    icon: gitwhite,
    level: "90%",
  },
  {
    name: "TypeScript",
    icon: typescriptwhite,
    level: "70%",
  },
  {
    name: "Tailwind CSS",
    icon: tailwindwhite,
    level: "80%",
  },
  {
    name: "Redux",
    icon: reduxwhite,
    level: "60%",
  },
  {
    name: "NodeJS",
    icon: nodejs,
    level: "50%",
  },
  {
    name: "Linux",
    icon: linux,
    level: "70%",
  },
  {
    name: "Postgres",
    icon: postgres,
    level: "40%",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    level: "55%",
  },
  {
    name: "Go",
    icon: go,
    level: "70%",
  },
];

const projects = [
  {
    name: "Movies",
    description: `Basic yet modern app for browsing and discovering great movies`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.ibb.co/VjWbLYh/movies.png",
    live_demo_link: "https://movies.gonzalogramagia.com",
    source_code_link: "https://github.com/gonzalogramagia/movies",
  },
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
    live_demo_link: "https://todo.gonzalogramagia.com",
    source_code_link: "https://github.com/gonzalogramagia/mern-todo",
  },
  {
    name: "Bookstore",
    description: `University books management system`,
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn-ui",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.ibb.co/GWXpWz2/bookstore.png",
    live_demo_link: "https://bookstore.gonzalogramagia.com/",
    source_code_link: "https://github.com/gonzalogramagia/bookstore",
  },
];

export { technologies, projects };
