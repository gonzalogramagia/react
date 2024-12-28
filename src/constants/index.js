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
  notes,
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
    name: "TypeScript",
    icon: typescriptwhite,
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
    name: "Notes",
    description: `Web application that allows users to add, 
        modify and delete notes. It uses localStorage 
        to save the data`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "hooks",
        color: "blue-text-gradient",
      },
    ],
    image: notes,
    live_demo_link: "https://notes.gonza.gr/",
    source_code_link: "https://github.com/gonzagramaglia/notes",
  },
  {
    name: "Links",
    description: `Web application that is a clone of Linktree, 
        but much cooler`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "hooks",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "css-animations",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: "https://i.ibb.co/2yXXFZ0/links-demo.png",
    live_demo_link: "https://links.gonza.gr/",
    source_code_link: "https://github.com/gonzagramaglia/links",
  },
  {
    name: "Social",
    description: `Web application that shows the UI interface of a social network. 
        Features: darkMode, create and delete comments, open and close 
        'menu' and 'create post' windows`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "hooks",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "blue-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/8c2zFQ9F/social-demo.png",
    live_demo_link: "https://social.gonza.gr",
    source_code_link: "https://github.com/gonzagramaglia/social",
  },
  {
    name: "Todo",
    description: `My first simple full stack app`,
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
    ],
    image: "https://i.postimg.cc/RZNP7Ws3/temp-Image2-BBn-F3.avif",
    live_demo_link: "https://mern-todo-3a72.onrender.com",
    source_code_link: "https://github.com/gonzagramaglia/mern-todo",
  },
  {
    name: "Blog",
    description: `My first complex full stack app`,
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
    ],
    image: "https://i.postimg.cc/XvKV64k7/mern-blog.png",
    live_demo_link: "https://mern-blog-dbgd.onrender.com/",
    source_code_link: "https://github.com/gonzagramaglia/mern-blog",
  },
  {
    name: "Shop [coming soon]",
    description: `My second complex full stack app`,
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
        name: "stripe",
        color: "green-text-gradient",
      },
    ],
    image: underconstruction,
    live_demo_link: "https://github.com/gonzagramaglia/shop",
    source_code_link: "https://github.com/gonzagramaglia/shop",
  },
];

export { services, technologies, projects };
