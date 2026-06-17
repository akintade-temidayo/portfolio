import { FiBriefcase, FiSettings } from 'react-icons/fi';

const experiences = [
  {
    role: 'Team Lead & Collaborator',
    org: 'Frontend Projects',
    period: '2026 – Present',
    icon: <FiBriefcase size={20} />,
    color: 'bg-orange-50 text-orange-600',
    description: 'Led and collaborated on frontend projects including the Mentee mentorship dashboard, applying React and Tailwind CSS in a team environment.',
  },
{
    role: 'Operations/Sales Manager',
    org: 'AIESEC',
    period: '2023 – 2025',
    icon: <FiSettings size={20} />,
    color: 'bg-blue-50 text-blue-600',
    description: 'Managed day-to-day operations, coordinated team activities, and ensured smooth execution of organizational programs and initiatives.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-2">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">My Journey</h2>
          <div className="w-12 h-1 bg-[#2563EB] rounded-full mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2"></div>

          <div className="flex flex-col gap-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#2563EB] rounded-full border-4 border-white shadow-md mt-5 z-10"></div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Card */}
                <div className="ml-14 md:ml-0 md:w-1/2 bg-[#F8FAFC] border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-blue-200 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-xl ${exp.color} flex-shrink-0`}>
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                        <h3 className="text-base font-bold text-gray-900">{exp.role}</h3>
                        <span className="text-xs bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-[#2563EB] font-semibold mb-2">{exp.org}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;