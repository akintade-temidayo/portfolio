import { FiDownload, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
const handleScroll = (id) => {
const target = document.getElementById(id);
if (target) target.scrollIntoView({ behavior: 'smooth' });
};

return (
<section id="home" className="min-h-screen bg-[#F8FAFC] flex items-center pt-20">

    <div className="max-w-6xl mx-auto px-6 w-full">
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        <div className="flex-1 text-center md:text-left">

        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-sm px-4 py-1.5 rounded-full mb-6">
            {/* <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse"></span> */}
            Available for work
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Hi, I'm{' '}
            <span className="text-[#2563EB]">Akintade</span>
            <br />
            <span className="text-[#2563EB]">Temidayo</span>{' '}
            
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
            Frontend Developer passionate about building clean, responsive,
            and user-friendly web experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
            <button
            onClick={() => handleScroll('projects')}
            className="flex items-center gap-2 bg-[#2563EB] text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 w-full sm:w-auto justify-center"
            >
            View Projects <FiArrowRight />
            </button>
            <a
            href="/Akintade-resume.pdf"
            download
            className="flex items-center gap-2 border border-[#2563EB] text-[#2563EB] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-all duration-200 w-full sm:w-auto justify-center"
            >
            Download CV <FiDownload />
            </a>
        </div>
        </div>

        <div className="flex-shrink-0 flex justify-center">
        <div className="relative">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-dashed border-blue-300 flex items-center justify-center">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-100 to-green-100 border-4 border-white shadow-lg overflow-hidden flex items-center justify-center">
                <img
                src="/profile.jpg"
                alt="Akintade Temidayo"
                className="w-full h-full object-cover rounded-full"
                />
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
</section>
);
};

export default Hero;