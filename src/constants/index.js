import {
    gem,
    javascript,
    html,
    htmlwhite,
    csswhite,
    jswhite,
    reactwhite,
    nextwhite,
    gitwhite,
    tailwindwhite,
    framermotionwhite,
    css,
    reactjs,
    tailwind,
    firebase,
    git,
    figma,
    next,
    egghead,
    scrimba,
    freecodecamp,
    jsmastery,
    notes,
    underconstruction,
    threejs,
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
    // {
    //   id: "skills",
    //   title: "Skills",
    // },
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
  
  // const skills = [
  //   {
  //     title: "Next.js 13, TailwindCSS & Material UI",
  //     link: "https://www.youtube.com/watch?v=wm5gMKuwSYk",
  //     company_name: "JavaScript Mastery",
  //     icon: jsmastery,
  //     iconBg: "#0b0a25",
  //     date: "June 2023",
  //     points: [

  //     ],
  //   },
  //   {
  //     title: "Frontend Developer Career Path",
  //     link: "https://scrimba.com/learn/frontend",
  //     company_name: "Scrimba",
  //     icon: scrimba,
  //     iconBg: "#0b0a25",
  //     date: "March 2023 - May 2023",
  //     points: [
  //       "HTML 5","CSS 3", "Responsive design","Advanced JavaScript", "Working with APIs","Advanced React JS"
  //     ],
  //   },
  //   {
  //     title: "JavaScript Programming",
  //     link: "https://www.youtube.com/watch?v=jS4aFq5-91M",
  //     company_name: "freeCodeCamp",
  //     icon: freecodecamp,
  //     iconBg: "#0b0a25",
  //     date: "Feb 2023 - Feb 2023",
  //     points: [

  //     ],
  //   },
  // ];

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
      live_demo_link: "https://notes.gonza.works/",
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
      image: "https://i.postimg.cc/sgsv7wXt/links-demo.png",
      live_demo_link: "https://links.gonza.works/",
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
      live_demo_link: "https://social.gonza.works",
      source_code_link: "https://github.com/gonzagramaglia/social",
    }
  ];
  
  export { services, technologies, skills, projects };