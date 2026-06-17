import { FiCode, FiGlobe, FiTool } from 'react-icons/fi';
import { FaHtml5, FaReact, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa6';
import { RiTailwindCssFill } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io5';
import { VscVscode } from 'react-icons/vsc';

const frontendSkills = [
{ name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
{ name: 'CSS3', icon: <FaCss3Alt />, level: 85, color: '#1572B6' },
{ name: 'JavaScript', icon: <IoLogoJavascript />, level: 70, color: '#F7DF1E' },
{ name: 'React', icon: <FaReact />, level: 70, color: '#61DAFB' },
{ name: 'Tailwind CSS', icon: <RiTailwindCssFill />, level: 95, color: '#06B6D4' },
];

const tools = [
{ name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
{ name: 'GitHub', icon: <FaGithub />, color: '#181717' },
{ name: 'VS Code', icon: <VscVscode />, color: '#007ACC' },
{ name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
];

const Skills = () => {
return (
<section id="skills" className="bg-white py-20">
    <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-14">
        <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-2">My Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What I Work With</h2>
        <div className="w-12 h-1 bg-[#2563EB] rounded-full mx-auto mt-4"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-12">

        <div>
        <div className="flex items-center gap-2 mb-6">
            <FiCode className="text-[#2563EB]" size={20} />
            <h3 className="text-lg font-bold text-gray-900">Frontend Skills</h3>
        </div>
        <div className="flex flex-col gap-5">
            {frontendSkills.map((skill, index) => (
            <div key={index}>
                <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <span style={{ color: skill.color }} className="text-xl">{skill.icon}</span>
                    {skill.name}
                </div>
                <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                    className="h-full rounded-full bg-[#2563EB]"
                    style={{ width: `${skill.level}%` }}
                ></div>
                </div>
            </div>
            ))}
        </div>
        </div>

        <div>
        <div className="flex items-center gap-2 mb-6">
            <FiTool className="text-[#2563EB]" size={20} />
            <h3 className="text-lg font-bold text-gray-900">Tools & Technologies</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-10 ">
            {tools.map((tool, index) => (
            <div
                key={index}
                className="flex items-center gap-3 bg-[#F8FAFC] border border-gray-100 rounded-xl px-4 py-3 hover:border-blue-200  shadow-sm hover:shadow-md transition-all duration-200"
            >
                <span style={{ color: tool.color }} className="text-2xl">{tool.icon}</span>
                <span className="text-sm font-medium text-gray-700">{tool.name}</span>
            </div>
            ))}
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
            <FiGlobe className="text-[#2563EB]" size={18} />
            <h4 className="text-sm font-bold text-gray-900">Currently Learning</h4>
            </div>
            <div className="flex flex-wrap gap-2">
            {['React Router', 'REST APIs', 'Framer Motion', 'TypeScript'].map((item) => (
                <span
                key={item}
                className="text-xs bg-white border border-blue-200 text-blue-700 px-3 py-1 rounded-full font-medium"
                >
                {item}
                </span>
            ))}
            </div>
        </div>
        </div>

    </div>
    </div>
</section>
);
};

export default Skills;