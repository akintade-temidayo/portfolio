import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const handleNavClick = (link) => {
    const target = document.getElementById(link.toLowerCase());
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-3">
              AT<span className="text-[#2563EB]">.</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Building modern, responsive web experiences with clean code and attention to detail.
            </p>
            <div className="flex gap-3">
              
            <a href="https://github.com/akintade-temidayo"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2563EB] transition-all duration-200"
            >
                <FiGithub size={16} />
              </a>
              
            <a  href="https://linkedin.com/in/akintade-temitope"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2563EB] transition-all duration-200"
            >
                <FiLinkedin size={16} />
              </a>
              
            <a   href="mailto:temidayoakintade56@gmail.com"
                className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2563EB] transition-all duration-200"
            >
                <FiMail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleNavClick(link)}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-5">Available For</h4>
            <div className="flex flex-col gap-3 mb-6">
              {['Frontend Development', 'Freelance Projects', 'Open Source Collaboration', 'React Development'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full"></span>
                  <span className="text-sm text-gray-400">{item}</span>
                </div>
              ))}
            </div>
            <button
              onClick={scrollToTop}
              className="text-sm bg-[#2563EB] text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              Back to Top ↑
            </button>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            © 2025 Akintade Temitope. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            Built with <FiHeart size={11} className="text-red-400" /> using React & Tailwind CSS
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;