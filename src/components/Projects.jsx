import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
{
title: 'MedEase',
description:
    'Healthcare consultation platform. Check symptoms, explore medication suggestions, and connect with verified pharmacists.',
image: '/medease.png',
tags: ['React', 'Tailwind CSS'],
liveUrl: 'https://v0-medease-healthcare-app.vercel.app/',
githubUrl: null,
color: 'from-blue-50 to-blue-100',
badge: null,
},
{
title: 'MealCraft',
description:
    'Recipe planner app. Enter ingredients you have, discover matching meals, and organise them into your daily meal plan.',
image: '/mealcraft.png',
tags: ['HTML', 'Javascript', 'Tailwind CSS', 'LocalStorage'],
liveUrl: 'https://meal-planner-three-mu.vercel.app/',
githubUrl: 'https://github.com/akintade-temidayo/meal-planner',
color: 'from-orange-50 to-amber-100',
badge: null,
},
{
title: 'Dwello',
description:
    'Property and hotel finder. Browse curated listings of exquisite homes and hotels tailored to your dream vision.',
image: '/dwello.png',
tags: ['HTML', 'Tailwind CSS', 'Javascript'],
liveUrl: 'https://dwellohotel-e1lf.vercel.app/',
githubUrl: 'https://github.com/akintade-temidayo/dwellohotel',
color: 'from-stone-50 to-stone-100',
badge: null,
},
{
title: 'Mentee',
description:
    'Mentorship dashboard for connecting mentees with mentors. Features course tracking, meetings, and progress monitoring.',
image: '/mentee.png',
tags: ['React', 'Tailwind CSS', 'Collaboration'],
liveUrl: null,
githubUrl: 'https://github.com/kolawole-ayomide/mentee',
color: 'from-indigo-50 to-indigo-100',
badge: 'Collaborated',
},
];

const Projects = () => {
return (
<section id="projects" className="bg-[#F8FAFC] py-20">
    <div className="max-w-6xl mx-auto px-6">
    {/* Section Heading */}
    <div className="text-center mb-14">
        <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-2">
        My Work
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Featured Projects
        </h2>

        <div className="w-12 h-1 bg-[#2563EB] rounded-full mx-auto mt-4"></div>
    </div>

    {/* Projects Grid */}
    <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
        <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
        >
            {/* Image */}
            <div
            className={`relative h-52 bg-gradient-to-br ${project.color} overflow-hidden`}
            >
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />

            {project.badge && (
                <div className="absolute top-3 right-3 bg-[#2563EB] text-white text-xs font-semibold px-3 py-1 rounded-full">
                {project.badge}
                </div>
            )}
            </div>

            {/* Content */}
            <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
                {project.title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, i) => (
                <span
                    key={i}
                    className="text-xs bg-blue-50 border border-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium"
                >
                    {tag}
                </span>
                ))}
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3">
                {project.liveUrl && (
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-[#2563EB] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                    <FiExternalLink size={14} />
                    Live Demo
                </a>
                )}

                {project.githubUrl && (
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-gray-200 text-gray-600 text-sm font-semibold px-4 py-2 rounded-lg hover:border-blue-300 hover:text-[#2563EB] transition-colors duration-200"
                >
                    <FiGithub size={14} />
                    GitHub
                </a>
                )}
            </div>
            </div>
        </div>
        ))}
    </div>
    </div>
</section>
);
};

export default Projects;