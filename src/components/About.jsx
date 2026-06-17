import { FiMapPin, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const About = () => {
return (
<section id="about" className="bg-[#F8FAFC] py-20">
    <div className="max-w-6xl mx-auto px-6">

    {/* Section Header */}
    <div className="text-center mb-14">
        <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-2">About Me</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Who I Am</h2>
        <div className="w-12 h-1 bg-[#2563EB] rounded-full mx-auto mt-4"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left — Image card */}
        <div className="flex justify-center ">
        <div className="relative ">
            <div className="w-72 h-80 rounded-2xl overflow-hidden border-4 border-white shadow-md">
            <img
                src="/profile.jpg"
                alt="Akintade Temitope"
                className="w-full h-full object-cover"
            />
            </div>
            {/* Floating info card */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3">
            <p className="text-xs text-gray-500">Based in</p>
            <div className="flex items-center gap-1 mt-0.5">
                <FiMapPin size={13} className="text-[#2563EB]" />
                <p className="text-sm font-semibold text-gray-800">Ondo, Nigeria</p>
            </div>
            </div>
            {/* Decorative block */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-100 rounded-2xl -z-10"></div>
        </div>
        </div>

        {/* Right — Text content */}
        <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Frontend Developer & <span className="text-[#2563EB]">Lifelong Learner</span>
        </h3>
        <p className="text-gray-500 leading-relaxed mb-4">
            I'm Akintade Temitope, a passionate Frontend Developer focused on building
            responsive and engaging web applications using modern technologies. I combine
            technical skills with an eye for design to create experiences that users love.
        </p>
        <p className="text-gray-500 leading-relaxed mb-6">
            Currently deepening my knowledge in React and JavaScript while building
            real-world projects. I also bring leadership and teamwork experience from
            my time at AIESEC, where I worked across operations, sales, and HR.
        </p>

        {/* Info grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-md">
            <p className="text-xs text-gray-400 mb-1">Status</p>
            <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse"></span>
                <p className="text-sm font-semibold text-gray-800">Available for work</p>
            </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-md">
            <p className="text-xs text-gray-400 mb-1">Experience</p>
            <p className="text-sm font-semibold text-gray-800">1+ Year Learning</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-md">
            <p className="text-xs text-gray-400 mb-1">Specialization</p>
            <p className="text-sm font-semibold text-gray-800">Frontend Dev</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-md">
            <p className="text-xs text-gray-400 mb-1">Education</p>
            <p className="text-sm font-semibold text-gray-800">Enegxi institute + Courses</p>
            </div>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4">
            <a href="mailto:temidayoakintade56@gmail.com" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#2563EB] transition-colors">
            <FiMail size={16} /> temidayoakintade56@gmail.com
            </a>
            <a href="https://github.com/akintade-temidayo" target="_blank" rel="noreferrer" className="rounded-full p-2 text-gray-500 hover:text-[#2563EB] hover:bg-gray-300 transition-colors">
            <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="rounded-full p-2 text-gray-500 hover:text-[#2563EB] hover:bg-gray-300 transition-colors">
            <FiLinkedin size={20} />
            </a>
        </div>
        </div>

    </div>
    </div>
</section>
);
};

export default About;