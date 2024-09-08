import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    groceries,
    d,
    python,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Web Developer",
        company_name: "Exposys Data Labs",
        icon: nextjs,
        iconBg: "#a2d2ff",
        date: "June 2021 - July 2021",
        points: [
            "Created a full stack Image-Cropper-App",
            "Users get the cropped image after the image gets uploaded on the website, Drag and select the portion which the user wants to crop."
        ],
    },
    {
        title: "Web Developer",
        company_name: "The Sparks Foundation",
        icon: react,
        iconBg: "#b7e4c7",
        date: "July 2021 - August 2021",
        points: [
            "A full stack cyberpunk blog app that allows users to post, like and comment on the post",
            "Users can Sign Up, Sign In using Google Authentication",
            "Complete Responsive Website",
            "Tools: React.js, NextAuth, Firebase, Tailwind"
        ],
    },
    {
        title: "Python For ML/AI Internship",
        company_name: "Elite Techno Groups",
        icon: python,
        iconBg: "#fbc3bc",
        date: "August 2021 - September 2021",
        points: [
            "inventory-management-system",
            "Tools: Python, Jupyter Notebook"
        ],
    },
    {
        title: "Web Developer",
        company_name: "Future Ready Talent",
        icon: javascript,
        iconBg: "#accbe1",
        date: "December 2021 - January 2022",
        points: [
            "A full stack Hotel Booking Website With FAQ Bot",
            "Tools: HTML, CSS, javascript, jquery plugins, Azure Bot Service"
        ],
    },
    
    
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Diparya',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/dipesh-arya',
    }
];

export const projects = [
    {
        iconUrl: groceries,
        theme: 'btn-back-green',
        name: 'Grocery store',
        description: ["A full stack grocery store that allows users to buy products from different categories. ",
            "Store Manager can add, delete or update categories and products. ",
            "Admin approve requests from store managers to add new categories or delete existing categories. ",
            "Tools:Next.js, MongoDB, Three.js, TailwindCss. "],
        link: 'https://next-grocery-app.vercel.app/',
    },
    {
        iconUrl: linkedin,
        theme: 'btn-back-blue',
        name: 'LinkedIn-Clone',
        description: ["A full stack linkedin-clone that allows users to post, like and comment. ",
            "Users can Sign Up, Sign In using Google or Email Authentication. ",
            "Complete Responsive Website. ",
            "Tools: Next.js, Typescript, TailwindCss, Clerk, MongoDB, shadcnUI. "],
        link: 'https://linkedin-clone2-0.vercel.app/',
    },
    {
        iconUrl: d,
        theme: 'btn-back-red',
        name: 'Social Media App',
        description: ["A real-time full-stack social media app that allows users to post, like, comment, follow, bookmark, chat and edit profile .",
                    "Tools: React.js, Javascript, Express, NodeJs, TailwindCss, MongoDB, Socket.io, shadcnUI. "],
        link: 'https://github.com/',
    }
];