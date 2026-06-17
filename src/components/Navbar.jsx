import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
const handleScroll = () => setScrolled(window.scrollY > 20);
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const handleNavClick = (link) => {
setIsOpen(false);
const target = document.getElementById(link.toLowerCase());
if (target) target.scrollIntoView({ behavior: 'smooth' });
};

return (
<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'
}`}>
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

    {/* Logo */}
    <div className="text-xl font-bold text-gray-900">
        AT<span className="text-[#2563EB]">.</span>
    </div>

    {/* Desktop Links */}
    <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
        <li key={link}>
            <button
            onClick={() => handleNavClick(link)}
            className="text-sm text-gray-600 hover:text-[#2563EB] transition-colors duration-200 font-medium"
            >
            {link}
            </button>
        </li>
        ))}
    </ul>

    {/* Hire Me Button */}
    <button className="hidden md:block bg-[#2563EB] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
        Hire Me
    </button>

    {/* Mobile Hamburger */}
    <button
        className="md:hidden text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
    >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
    </button>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
    <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
        {navLinks.map((link) => (
        <button
            key={link}
            onClick={() => handleNavClick(link)}
            className="text-sm text-gray-600 hover:text-[#2563EB] text-left transition-colors duration-200 font-medium"
        >
            {link}
        </button>
        ))}
        <a 
        href={`mailto:temidayoakintade56@gmail.com?
        subject=Job Opportunity / Collaboration&body=Hi Temidayo,%0A%0AI came across your portfolio and I'd love to discuss a potential opportunity with you.%0A%0AHere's what I'm looking for:%0A%0A[Describe the role or project here]%0A%0ALooking forward to hearing from you.%0A%0ABest regards,%0A[Your Name]`}>
        <button 
        className="bg-[#2563EB] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-fit">
        Hire Me
        </button>
        </a>
    </div>
    )}
</nav>
);
};

export default Navbar;