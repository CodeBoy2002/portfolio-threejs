import { meta, shopify, starbucks, tesla, wipro, hoping } from "../assets/images";
import {
    car,
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
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
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
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Full Stack Java Training",
        company_name: "Wipro Pvt Ltd.",
        icon: wipro,
        iconBg: "#accbe1",
        date: "May 2023 - Sept 2023",
        points: [
            "Developing and maintaining web applications using Java Spring and other related technologies.",
            "Trained alongside seasoned developers, gaining valuable experience and insights.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Accomplished all assigned tasks with success throughout the training period.",
        ],
    },
    {
        title: "Data Structures Internship",
        company_name: "Hoping Minds",
        icon: hoping,
        iconBg: "#fbc3bc",
        date: "May 2023 - June 2023",
        points: [
            "Proficiently solved diverse algorithmic challenges in Java, showcasing strong problem-solving and software development skills.",
            "Gained valuable skills and knowledge through mentorship from experienced trainers, enhancing my expertise in the field.",
            "Participating in code reviews and providing constructive feedback to other developers.",
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
        link: 'https://github.com/CodeBoy2002',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sumit-kumar-1baa66178/',
    }
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/CodeBoy2002/threads_app',
        web_link: 'https://threadsup.vercel.app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a web application for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/CodeBoy2002/car-store',
        web_link: 'https://carrush-7ujs.vercel.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/CodeBoy2002/sumz_openai',
        web_link: 'https://deepsumarizer.netlify.app/',
    }
];