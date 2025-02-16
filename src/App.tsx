import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X, ExternalLink, FileText } from 'lucide-react';

interface NavigationItem {
  name: string;
  section: string;
}

interface ProjectContent {
  introduction: string[];
  problemStatement: string;
  methodology: string[];
  technicalStack: {
    frontend?: string[];
    backend?: string[];
    features?: string[];
  };
  results: string[];
  futureWork: string[];
}

interface SlideContent {
  title: string;
  subtitle: string;
  author: string;
  content: ProjectContent;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('bio');
  const [isSlideModalOpen, setIsSlideModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState('');

  const navigation: NavigationItem[] = [
    { name: 'Bio', section: 'bio' },
    { name: 'Portfolio', section: 'portfolio' },
    { name: 'Elevator Pitch', section: 'elevator-pitch' },
    { name: 'Work Experience', section: 'work-experience' },
    { name: 'Education', section: 'education' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const SlideModal = () => {
    const getSlideContent = (): SlideContent | null => {
      switch (activeProject) {
        case 'phase2':
          return {
            title: "Phase 2 Project",
            subtitle: "Building Scalable Solutions for Modern Web",
            author: "El Mehdi Hachami",
            content: {
              introduction: [
                "Modern full-stack web application development",
                "Focus on scalability and user experience",
                "Integration of cutting-edge technologies"
              ],
              problemStatement: "Addressing the need for real-time collaboration in web applications while maintaining high performance and scalability.",
              methodology: [
                "Agile development methodology",
                "Test-driven development approach",
                "Continuous integration and deployment",
                "Regular code reviews and pair programming"
              ],
              technicalStack: {
                frontend: ["React with TypeScript", "TailwindCSS", "WebSocket integration"],
                backend: ["Node.js", "PostgreSQL", "Redis for caching"]
              },
              results: [
                "40% improvement in load times",
                "95% user satisfaction rate",
                "Zero downtime deployment achieved",
                "Successful handling of concurrent users"
              ],
              futureWork: [
                "Mobile application development",
                "AI-powered features",
                "Enhanced analytics dashboard"
              ]
            }
          };
        case 'calculator':
          return {
            title: "Advanced Calculator",
            subtitle: "Scientific Calculator with Modern Features",
            author: "El Mehdi Hachami",
            content: {
              introduction: [
                "Sophisticated scientific calculator application",
                "Built with React, TypeScript, and Tailwind CSS",
                "Focus on user experience and accessibility"
              ],
              problemStatement: "Creating a powerful yet intuitive calculator that combines advanced mathematical capabilities with modern web features.",
              methodology: [
                "Component-driven development",
                "Test-driven development",
                "Continuous user feedback integration"
              ],
              technicalStack: {
                frontend: ["React", "TypeScript", "Tailwind CSS", "mathjs", "i18next", "Framer Motion"],
                features: ["Scientific calculations", "Multi-language support", "Theme switching", "Persistent storage"]
              },
              results: [
                "Seamless handling of complex calculations",
                "Intuitive user interface",
                "Successful implementation of keyboard shortcuts",
                "Positive user feedback on accessibility"
              ],
              futureWork: [
                "Additional mathematical functions",
                "More language options",
                "Mobile app version",
                "Advanced graphing capabilities"
              ]
            }
          };
        case 'user-management':
          return {
            title: "User Management Website",
            subtitle: "Efficient User Administration System",
            author: "El Mehdi Hachami",
            content: {
              introduction: [
                "Dynamic user management application",
                "Built with ReactJS and Tailwind CSS",
                "Focus on security and usability"
              ],
              problemStatement: "Developing a secure and efficient system for managing user accounts and permissions while maintaining a smooth user experience.",
              methodology: [
                "Component-based architecture",
                "Security-first approach",
                "Responsive design principles"
              ],
              technicalStack: {
                frontend: ["ReactJS", "Tailwind CSS", "Form validation libraries"],
                features: ["Authentication", "CRUD operations", "Real-time search", "Sorting capabilities"]
              },
              results: [
                "Streamlined user management process",
                "Enhanced security measures",
                "Improved data organization",
                "Positive user feedback"
              ],
              futureWork: [
                "Role-based access control",
                "Advanced analytics dashboard",
                "Bulk user operations",
                "Integration with more authentication providers"
              ]
            }
          };
        default:
          return null;
      }
    };

    const slideContent = getSlideContent();

    return (
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isSlideModalOpen ? 'block' : 'hidden'}`}>
        <div className="min-h-screen px-4 text-center">
          <div className="fixed inset-0" onClick={() => setIsSlideModalOpen(false)}></div>
          <span className="inline-block h-screen align-middle">&#8203;</span>
          <div className="inline-block w-full max-w-4xl p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
            {slideContent && (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">{slideContent.title}</h2>
                  <button
                    onClick={() => setIsSlideModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-8 max-h-[70vh] overflow-y-auto">
                  {/* Title Slide */}
                  <section className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-800">{slideContent.subtitle}</h3>
                    <p className="text-sm text-gray-500">By {slideContent.author}</p>
                  </section>

                  {/* Introduction */}
                  <section className="space-y-2">
                    <h4 className="text-lg font-medium text-gray-700">Introduction</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {slideContent.content.introduction.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  {/* Problem Statement */}
                  <section className="space-y-2">
                    <h4 className="text-lg font-medium text-gray-700">Problem Statement</h4>
                    <p className="text-gray-600">{slideContent.content.problemStatement}</p>
                  </section>

                  {/* Methodology */}
                  <section className="space-y-2">
                    <h4 className="text-lg font-medium text-gray-700">Methodology</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {slideContent.content.methodology.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  {/* Technical Stack */}
                  <section className="space-y-2">
                    <h4 className="text-lg font-medium text-gray-700">Technical Stack</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(slideContent.content.technicalStack).map(([key, items]) => (
                        <div key={key} className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium mb-2 capitalize">{key}</h5>
                          <ul className="list-disc list-inside text-gray-600 text-sm">
                            {items.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Results */}
                  <section className="space-y-2">
                    <h4 className="text-lg font-medium text-gray-700">Results & Impact</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {slideContent.content.results.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  {/* Future Work */}
                  <section className="space-y-2">
                    <h4 className="text-lg font-medium text-gray-700">Future Development</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {slideContent.content.futureWork.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </section>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-40">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">El Mehdi Hachami</h1>
              <p className="ml-4 text-sm text-gray-500 hidden sm:block">Full Stack Developer</p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.section}
                  onClick={() => setActiveSection(item.section)}
                  className={`px-3 py-2 text-sm font-medium ${
                    activeSection === item.section
                      ? 'text-blue-600'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <button
                    key={item.section}
                    onClick={() => {
                      setActiveSection(item.section);
                      setIsMenuOpen(false);
                    }}
                    className={`block px-3 py-2 text-base font-medium w-full text-left ${
                      activeSection === item.section
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Bio Section */}
        <section
          className={`space-y-8 ${activeSection === 'bio' ? 'block' : 'hidden'}`}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/image/png.png"
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in modern web technologies.
                With a strong foundation in both front-end and back-end development, I create
                scalable and user-friendly applications that solve real-world problems.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/contacthachami/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/contact-hachami/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:contacthachami@gmail.com" className="text-gray-600 hover:text-gray-900">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          className={`space-y-8 ${activeSection === 'portfolio' ? 'block' : 'hidden'}`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Portfolio</h2>
          <div className="space-y-12">
            {/* User Management Website */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <img
                  src="/image/image11.jpg"
                  alt="User Management Dashboard"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">User Management Website</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-700 mb-2">Description</h4>
                    <p className="text-gray-600">
                      A dynamic User Management Website developed using ReactJS, HTML, CSS, and Tailwind CSS.
                      Focuses on providing a seamless user experience for account management and administration.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-700 mb-2">Key Features</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Secure authentication interface with robust form validation</li>
                      <li>Full CRUD operations for user profile management</li>
                      <li>Real-time search, filter, and sort functionalities</li>
                      <li>Responsive design for all devices</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-700 mb-2">Technical Highlights</h4>
                    <p className="text-gray-600">
                      Implemented with clean, reusable ReactJS components and Tailwind CSS for rapid UI prototyping.
                      Features advanced state management for seamless data flow.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button
                      onClick={() => {
                        setActiveProject('user-management');
                        setIsSlideModalOpen(true);
                      }}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    >
                      <FileText size={20} />
                      View Slide Deck
                    </button>
                    <a
                      href="https://crudmanagement.netlify.app/"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink size={20} />
                      View Live Demo
                    </a>
                    <a
                      href="https://github.com/contacthachami/user_management_crud"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    >
                      <Github size={20} />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Calculator */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <img
                  src="/image/image9.png"
                  alt="Advanced Calculator"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Advanced Calculator</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-700 mb-2">Description</h4>
                    <p className="text-gray-600">
                      A web-based application built with TypeScript and React. It features advanced calculator functionalities, including history, custom button components, and a sleek UI design.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-700 mb-2">Key Features</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Advanced mathematical calculations</li>
                      <li>History tracking for calculations</li>
                      <li>Customizable button components</li>
                      <li>Responsive and intuitive UI</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-700 mb-2">Technical Highlights</h4>
                    <p className="text-gray-600">
                      Developed using TypeScript and React for robust and maintainable code. Utilizes Tailwind CSS for modern styling.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button
                      onClick={() => {
                        setActiveProject('calculator');
                        setIsSlideModalOpen(true);
                      }}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    >
                      <FileText size={20} />
                      View Slide Deck
                    </button>
                    <a
                      href="https://advancedcalchub.netlify.app/"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink size={20} />
                      View Live Demo
                    </a>
                    <a
                      href="https://github.com/contacthachami/advanced_calculator"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    >
                      <Github size={20} />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* Work Experience Section */}
<section
  className={`space-y-8 ${activeSection === 'work-experience' ? 'block' : 'hidden'}`}
>
  <h2 className="text-3xl font-bold text-gray-900 mb-8">Work Experience</h2>
  <div className="space-y-12">
    {/* Full Stack Web Developer */}
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
      <img
        src="/image/image4.png.jpg" // Replace with actual logo URL
        alt="2Pi eLearning Logo"
        className="w-16 h-16 mr-4"
      />
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Full Stack Web Developer</h3>
        <p className="text-gray-600">2Pi eLearning</p>
        <p className="text-gray-600">Jan 2025 – Present (Ongoing)</p>
        <p className="text-gray-600">Developing and maintaining web applications for educational platforms.</p>
      </div>
    </div>

    {/* Junior Web Developer */}
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
      <img
        src="/image/image3.png.jpg" // Replace with actual logo URL
        alt="AMTIC Digital Agency Logo"
        className="w-16 h-16 mr-4"
      />
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Junior Web Developer</h3>
        <p className="text-gray-600">AMTIC Digital Agency</p>
        <p className="text-gray-600">July 2024 (1 month)</p>
        <p className="text-gray-600">Redesigned a website using Laravel, AJAX, and Bootstrap, adding features like a blog and comment system.</p>
      </div>
    </div>

    {/* Community Manager & Support Specialist */}
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
      <img
        src="/image/image2.png.jpg" // Replace with actual logo URL
        alt="eSports Space Logo"
        className="w-16 h-16 mr-4"
      />
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Community Manager & Support Specialist</h3>
        <p className="text-gray-600">eSports Space</p>
        <p className="text-gray-600">2018 – 2024 (6 years)</p>
        <p className="text-gray-600">Managed online communities, organized events, and provided technical support to foster engagement and satisfaction.</p>
      </div>
    </div>

    {/* Professional Training */}
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
      <img
        src="/image/image5.png.png" // Replace with actual logo URL
        alt="GAD Academy Logo"
        className="w-16 h-16 mr-4"
      />
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Training</h3>
        <p className="text-gray-600">GAD Academy</p>
        <p className="text-gray-600">2022 – 2023 (1 year)</p>
        <p className="text-gray-600">Acquired skills in HTML, CSS, and programming logic during professional training. Developed a strong technical base for designing and developing modern websites.</p>
      </div>
    </div>
  </div>
</section>


        {/* Education Section */}
<section
  className={`space-y-8 ${activeSection === 'education' ? 'block' : 'hidden'}`}
>
  <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
  <div className="space-y-12">
    {/* African Leadership Experience */}
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
      <img
        src="/image/image7.jpg" // Replace with actual logo URL
        alt="African Leadership Experience Logo"
        className="w-16 h-16 mr-4"
      />
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">African Leadership Experience</h3>
        <p className="text-gray-600">Oct 2024 - May 2025</p>
        <p className="text-gray-600">Program Pathway:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>ENT100: Foundations of Entrepreneurship</li>
          <li>QNT101: College Algebra</li>
        </ul>
      </div>
    </div>

    {/* Specialized Institute Of Applied Technology NTIC */}
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
      <img
        src="/image/image6.jpg" // Replace with actual logo URL
        alt="Specialized Institute Of Applied Technology NTIC Logo"
        className="w-16 h-16 mr-4"
      />
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Specialized Institute Of Applied Technology NTIC</h3>
        <p className="text-gray-600">Digital Development Full Stack Web Option</p>
        <p className="text-gray-600">Sep 2023 - Jul 2025</p>
        <p className="text-gray-600">Skills: Front-End Development, Back-End Web Development, Python, PHP, MySQL, JavaScript, Bootstrap, HTML/CSS Validation, AJAX, jQuery, Entrepreneurship, React, Laravel, UML, Agile, Docker</p>
      </div>
    </div>

    {/* Lycée Ibn El Khatib, Salé */}
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Lycée Ibn El Khatib, Salé</h3>
        <p className="text-gray-600">Baccalaureate - Bac, Physics Science Options French</p>
        <p className="text-gray-600">Sep 2022 - Jun 2023</p>
        <p className="text-gray-600">Strong foundation in analytical thinking and problem-solving.</p>
      </div>
    </div>
  </div>
</section>


        {/* Elevator Pitch Section */}
        <section
          className={`space-y-8 ${
            activeSection === 'elevator-pitch' ? 'block' : 'hidden'
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Elevator Pitch</h2>
          <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
            {/* Introduction */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Who I Am</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm El Mehdi Hachami, a Full Stack Developer specializing in building scalable web applications
                that bridge the gap between complex backend systems and intuitive user experiences.
              </p>
            </div>

            {/* Value Proposition */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">What Sets Me Apart</h3>
              <p className="text-gray-600 leading-relaxed">
                With expertise in both frontend and backend development, I bring a holistic approach
                to software development. My track record includes achieving a 40% improvement in
                application performance and maintaining a 95% user satisfaction rate across projects.
              </p>
            </div>

            {/* Problem-Solving */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Problem-Solving Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                In today's fast-paced digital landscape, businesses struggle with building scalable
                applications that can handle real-time data while maintaining performance. I specialize
                in implementing efficient caching strategies and optimizing database queries to solve
                these challenges, as demonstrated in my e-commerce platform and AI-powered task manager projects.
              </p>
            </div>

            {/* Goals and Aspirations */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Where I'm Heading</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm passionate about pushing the boundaries of web technology, particularly in the
                realms of real-time collaboration and AI integration. My goal is to contribute to
                projects that make a meaningful impact on how people work and interact online.
              </p>
            </div>

            {/* Personal Brand */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">My Commitment</h3>
              <p className="text-gray-600 leading-relaxed">
                I believe in writing clean, maintainable code and staying current with industry best
                practices. My approach combines technical expertise with a strong focus on user experience,
                ensuring that every solution I build is both powerful and accessible.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Let's Connect</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm always excited to discuss new opportunities and collaborate on innovative projects.
                Whether you're looking to build a scalable web application or need expertise in
                real-time systems, I'd love to help bring your vision to life.
              </p>
              <div className="flex gap-4">
                <a
                  href="mailto:contacthachami@gmail.com"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                >
                  <Mail size={20} />
                  Contact Me
                </a>
                <a
                  href="https://www.linkedin.com/in/contact-hachami/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p>© {new Date().getFullYear()} El Mehdi Hachami. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Slide Deck Modal */}
      <SlideModal />
    </div>
  );
}

export default App;
