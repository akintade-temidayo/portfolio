import { FiCode, FiLayers, FiAward, FiClock } from 'react-icons/fi';

const stats = [
{ icon: <FiCode size={24} />, number: '6+', label: 'Projects Built' },
{ icon: <FiLayers size={24} />, number: '8+', label: 'Technologies' },
{ icon: <FiAward size={24} />, number: '2', label: 'Certifications' },
{ icon: <FiClock size={24} />, number: '1', label: 'Years Learning' },
];

const Stats = () => {
return (
<section className="bg-white py-16">
    <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
        <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-300 hover:border-blue-200 shadow-md hover:shadow-lg transition-all duration-300"
        >
            <div className="text-[#2563EB] mb-3">{stat.icon}</div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
        </div>
        ))}
    </div>
    </div>
</section>
);
};

export default Stats;