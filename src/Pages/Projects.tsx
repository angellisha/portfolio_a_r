import React, { useState } from 'react';
import '../Styles/Projects.css';

import Header from '../Components/Header';

import CherryBlossom from '../Assets/Images/Cherry_Blossom.png';
import GarysDiner from "../Assets/Images/Gary's_Blue_Diner.png";
import MythticPhoto from '../Assets/Images/Mythical_Photography.png';
import TodoList from "../Assets/Images/Todo_List.png";
import MathCompetition from "../Assets/Images/Math_Competition.png";


type Projects = {
  id: string;
  title: string;
  image: string;
  description: string;
};

const projects: Projects[] = [
  {
    id: '1',
    title: 'Cherry Blossom',
    image: CherryBlossom,
    description: 'E-commerce project focused on floral vibes...',
  },
  {
    id: '2',
    title: "Gary's Blue Diner",
    image: GarysDiner,
    description: 'Order Korean-inspired meals with fun animations.',
  },
  {
    id: '3',
    title: 'Math Competition',
    image: MathCompetition,
    description: 'E-commerce project focused on floral vibes...',
  },
  {
    id: '4',
    title: 'Mythtical Photography',
    image: MythticPhoto,
    description: 'E-commerce project focused on floral vibes...',
  },
  {
    id: '5',
    title: "Todo List",
    image: TodoList,
    description: 'Order Korean-inspired meals with fun animations.',
  },
];

const Projects: React.FC = () => {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <div className="p-main-container">
      <Header />

      <div className="gallery-container">
        {projects.map((project) => (
            <div
            key={project.id}
            className={`project-card ${focused === project.id ? 'focused' : focused ? 'hidden' : ''}`}
            onClick={() => setFocused(focused === project.id ? null : project.id)}
            >
            <div className="project-header">{project.title}</div>

            <div className="project-content">
                <img src={project.image} className="project-image" alt={project.title} />
                {focused === project.id && (
                <div className="project-description">
                    {project.description}
                </div>
                )}
            </div>
            </div>
        ))}
        </div>

    </div>
  );
};

export default Projects;
