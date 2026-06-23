import { useState } from 'react';
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('https://formspree.io/f/xaqgnoaz', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(e.target),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert('Something went wrong. Please try again.');
    }
  } catch (error) {
    alert('Something went wrong. Please try again.');
  }
};

  return (
    <section id="contact" className="bg-[#F8FAFC] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[#2563EB] font-semibold text-sm uppercase tracking-widest mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get In Touch</h2>
          <div className="w-12 h-1 bg-[#2563EB] rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left — Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Let's work <span className="text-[#2563EB]">together</span>
            </h3>
            <p className="text-gray-500 leading-relaxed mb-8">
              I'm currently open to frontend roles and freelance projects.
              Whether you have a project in mind or just want to say hi,
              my inbox is always open.
            </p>

            <div className="flex flex-col gap-5 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiMail className="text-[#2563EB]" size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Email</p>
                  
                    <a href="mailto:akintadetemidayo@gmail.com"
                    className="text-sm font-semibold text-gray-800 hover:text-[#2563EB] transition-colors"
                  >
                    temidayoakintade56@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="text-[#2563EB]" size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Location</p>
                  <p className="text-sm font-semibold text-gray-800">Ondo, Nigeria</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Find me on</p>
              <div className="flex gap-3">
                
                <a  href="https://github.com/akintade-temidayo"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-[#2563EB] hover:border-blue-300 transition-all duration-200"
                >
                  <FiGithub size={18} />
                </a>
                
                <a href="https://linkedin.com/in/akintade-temitope"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-[#2563EB] hover:border-blue-300 transition-all duration-200"
                >
                  <FiLinkedin size={18} />
                </a>
                
                  <a href="mailto:temidayoakintade56@gmail.com"
                  className="w-11 h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-[#2563EB] hover:border-blue-300 transition-all duration-200"
                >
                  <FiMail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">✅</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-500 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-blue-200 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-blue-200 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or just say hi..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-blue-200 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-[#2563EB] text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200"
                >
                  Send Message <FiSend size={16} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;