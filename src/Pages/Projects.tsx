import React from 'react';
import '../Assets/Styles/Projects.css';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

import Star from '../Assets/Images/star.png';
import FloatingIcon from '../Components/FloatingIcons';

import CherryBlossom from '../Assets/Images/Cherry_Blossom.png';
import GarysDiner from "../Assets/Images/Gary's_Blue_Diner.png";
import MythticPhoto from '../Assets/Images/Mythical_Photography.png';
import TodoList from "../Assets/Images/Todo_List.png";
import MathCompetition from "../Assets/Images/Math_Competition.png";

type Project = {
  id: string;
  title: string;
  image: string;
  description: string;
  technologies: string;
};

const projects: Project[] = [
  {
    id: '1',
    title: 'Cherry Blossom',
    image: CherryBlossom,
    description: "Cherry Blossom was a team project — our goal was to build a three-page website for a doll store. It was my first experience working in a team, which turned out to be just as educational as the coding itself. We all had different ways of approaching problems and writing code, which challenged me to communicate better and find common ground. I also took a deeper dive into CSS, playing with more advanced styling to give the site a gentle, elegant look. This project taught me that building something together isn't just about code — it's also about understanding people, being flexible, and keeping the user in mind.",
    technologies: 'HTML, CSS, Team Collaboration',
  },
  {
    id: '2',
    title: 'Mythical Photography',
    image: MythticPhoto,
    description: 'This was my very first one-page website and the start of my web development journey. I built it entirely with HTML and CSS, learning how to structure a page using the box model. It helped me understand the importance of layout, spacing, and visual balance when designing a user-friendly site. I was fascinated by how much could be achieved with just simple elements — it felt like arranging building blocks to create something visually pleasing and functional. This project laid a strong foundation for all the work that followed.',
    technologies: 'HTML, CSS',
  },
  {
    id: '3',
    title: "Todo List",
    image: TodoList,
    description: 'This was the project where JavaScript really came alive for me. I built a simple, fully functional To-Do List application that lets users add and organize tasks. It was incredibly rewarding to write code that actually did something — not just looked good, but responded to clicks, added tasks, and managed state. I finally saw how JavaScript ties everything together and makes a page interactive. I plan to revisit and expand this project, maybe add local storage, drag-and-drop, or even animations. But even in its current form, it marked a turning point in how I saw web development.',
    technologies: 'JavaScript, HTML, CSS',
  },
  {
    id: '5',
    title: 'Math Competition',
    image: MathCompetition,
    description: 'Math Competition is my first full-stack project and a hands-on introduction to building dynamic web apps with React and Express. The app simulates a timed arithmetic quiz, tracking user streaks in real time. I used session management and global variables to persist streak data across routes, which helped me understand practical state handling on the server side. This project also introduced me to key concepts like routing, form submission, and dynamic rendering with EJS, setting a strong base for future backend development.',
    technologies: 'JavaScript, EJS, CSS, React',
  },
  {
    id: '4',
    title: "Gary's Blue Diner",
    image: GarysDiner,
    description: "Gary's Blue Diner is a multi-page restaurant website featuring an interactive ordering system with an overlay menu, real-time form validation, and a dynamic checkout summary. This project deepened my experience with JavaScript, especially in managing user input and creating responsive form logic. I implemented a class-based system to store and validate order data using regular expressions, enhancing both the functionality and user experience of the site. Working with a team also helped me develop better collaboration and version control practices, as we coordinated design ideas and integrated code across different components.",
    technologies: 'JavaScript, HTML, CSS, Team Collaboration',
  },
];

const Projects: React.FC = () => {
  return (
    <div className="projects-page">
      <Header />
      <div className="project-intro">
        <p>
            Welcome to my project gallery! This is a collection of personal and collaborative works I've built to explore design, code, and creativity. Each project highlights different skills, tools, and concepts I've been learning along the way — from animations to functional UI, from clean layouts to full-stack features. I'm constantly growing, and this space evolves with me!
        </p>
      </div>
      <div className="floating-icons">
        <FloatingIcon src={Star} className="floating-star-left" />
        <FloatingIcon src={Star} className="floating-star-right" />
      </div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-row ${index % 2 === 0 ? 'normal' : 'reverse'}`}
          >
            <img src={project.image} className="project-image" alt={project.title} />
            <div className="project-text">
              <h2 className="project-title">{project.title}</h2>
              <h4 className="project-tech">{project.technologies}</h4>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
