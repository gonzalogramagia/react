import {
    gem,
    htmlwhite,
    csswhite,
    jswhite,
    reactwhite,
    nextwhite,
    gitwhite,
    tailwindwhite,
    framermotionwhite,
    notes,
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
      icon: gem
    },
    {
      title: "React Developer",
      icon: gem
    },
    {
      title: "Frontend Developer",
      icon: gem
    }
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
      name: "Tailwind CSS",
      icon: tailwindwhite,
    },
    {
      name: "Framer Motion",
      icon: framermotionwhite,
    }
  ];
  

const projects = [
    {
      name: "Notes",
      description:
        `Web application that allows users to add, 
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
      description:
        `Web application that is a clone of Linktree, 
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
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
      ],
      image: "https://i.ibb.co/2yXXFZ0/links-demo.png",
      live_demo_link: "https://links.gonza.gr/",
      source_code_link: "https://github.com/gonzagramaglia/links",
    },
    {
      name: "Social",
      description:
        `Web application that shows the UI interface of a social network. 
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
          color: "green-text-gradient",
        },
      ],
      image: "https://i.postimg.cc/8c2zFQ9F/social-demo.png",
      live_demo_link: "https://social.gonza.gr",
      source_code_link: "https://github.com/gonzagramaglia/social",
    }
  ];
  
  export { services, technologies, projects };