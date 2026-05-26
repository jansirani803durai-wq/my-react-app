import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import profile from "/profile.png";

const SkillIcon = ({ name }) => {
  const icons = {
  HTML: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />,
  CSS: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />,
  JavaScript: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />,
  React: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />,
  Bootstrap: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />,
  Tailwind: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" />,
  "Node JS": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node JS" />,
  MongoDB: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />,
};

  return <div className="skillLogo">{icons[name] || icons.HTML}</div>;
};

function App() {
  const swipeRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 950, once: false, offset: 90, easing: "ease-out-cubic" });
    AOS.refresh();
  }, []);

  const education = [
    {
      title: "Schooling",
      text: "Completed school education with strong basic knowledge and confidence.",
      file: `${import.meta.env.BASE_URL}school-certificate.pdf`,
    },
    {
      title: "Graduate",
      text: "B.Sc Physics helped me build analytical thinking and problem solving.",
      file: `${import.meta.env.BASE_URL}college-certificate.pdf`,
    },
    {
      title: "Post-Graduate",
      text: "MBA HRM improved communication, planning and professional skills.",
      file: `${import.meta.env.BASE_URL}college-certificate.pdf`,
    },
    {
      title: "Internship",
      text: "Java Full Stack Development Training at Vetri IT Systems with hands-on experience.",
      file: `${import.meta.env.BASE_URL}internship-certificate.pdf`,
    },
  ];

  const skills = ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind", "Node JS", "MongoDB"];

  const projects = [
    { title: "Accessories Website", image: `${import.meta.env.BASE_URL}headsun.png`, link: "https://jansirani803durai-wq.github.io/headphone/" },
    { title: "Hotel Website", image: `${import.meta.env.BASE_URL}food.png`, link: "https://jansirani803durai-wq.github.io/hotel/" },
    { title: "Shopping Website", image: `${import.meta.env.BASE_URL}faircare.png`, link: "https://jansirani803durai-wq.github.io/shopping/" },
    { title: "Smart Retail Billing", image: `${import.meta.env.BASE_URL}smart.png`, link: "https://jansirani803durai-wq.github.io/retail/" },
    { title: "Inventory Website", image: `${import.meta.env.BASE_URL}billsmart.png`, link: "https://jansirani803durai-wq.github.io/inventorypro/" },
    { title: "Supermarket Website", image: `${import.meta.env.BASE_URL}super.png`, link: "https://jansirani803durai-wq.github.io/supermarket/" },
  ];

  const services = [
    { icon: "⌨", title: "Frontend Design", text: "Modern responsive website layouts with attractive colors, spacing and smooth UI." },
    { icon: "♻", title: "React Components", text: "Reusable components, props, hooks, cards, forms and dynamic sections." },
    { icon: "◈", title: "Responsive Pages", text: "Mobile, tablet and desktop friendly pages with clean alignment." },
    { icon: "✦", title: "Creative Effects", text: "Animations, hover effects, floating cards, glass styles and glow effects." },
  ];

  const highlights = ["Clean UI design", "Responsive layout", "React component structure", "Form and card designs", "Project showcase pages", "Smooth animations"];
  const learning = ["HTML semantic structure", "CSS animations & responsive design", "Bootstrap and Tailwind layouts", "JavaScript logic, arrays and functions", "React JSX, components, props and hooks", "LocalStorage and dynamic UI handling"];
  const process = ["Understand idea", "Design layout", "Build responsive UI", "Add animation", "Test mobile view", "Deploy website"];

  const slideProjects = (direction) => {
    swipeRef.current?.scrollBy({ left: direction * 900, behavior: "smooth" });
  };

  return (
    <div className="app">
      <div className="bgEffects" aria-hidden="true">
        <span className="bubble b1"></span><span className="bubble b2"></span><span className="bubble b3"></span>
        <span className="bubble b4"></span><span className="bubble b5"></span><span className="bubble b6"></span>
        <span className="bubble b7"></span><span className="bubble b8"></span><span className="bubble b9"></span>
        <span className="spark s1">✦</span><span className="spark s2">✧</span><span className="spark s3">✦</span>
      </div>

      <div className="blob one"></div><div className="blob two"></div><div className="blob three"></div>

      <nav className="navbar" data-aos="fade-down">
        <div>
          <a href="#home">Home</a><a href="#about">About</a><a href="#education">Education</a>
          <a href="#skills">Tools</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="heroText" data-aos="fade-right">
          <span className="pill">Design • Develop • Create</span>
          <h1>I'm <b>Jansirani</b><br />Full Stack Developer</h1>
          <p>I create trendy, responsive and attractive websites with clean UI, smooth animation, modern layouts and creative frontend designs.</p>
          <div className="btnRow"><a href="#projects">View Projects</a><a href="#contact">Hire Me</a></div>
        </div>
        <div className="heroArt" data-aos="zoom-in-left">
          <div className="bigShape"></div>
          <img src={profile} alt="profile" />
          <span className="floatCard cardA">Full Stack Developer</span>
        </div>
      </section>

      <div className="scrollText"><span>Website Design ✦ Passionate Developer ✦ Transforming Ideas Into Reality ✦ User Friendly Experiences ✦ Creative UI ✦ Portfolio ✦ React Developer</span></div>

      <section id="about" className="about green">
        <div className="aboutPhoto" data-aos="flip-left"><img src={profile} alt="profile" /></div>
        <div data-aos="fade-left">
          <span className="pill light">Professional Profile</span>
          <h2>Who is <b>Jansirani?</b></h2>
          <p>I am an aspiring Full Stack Developer passionate about creating modern and attractive web experiences. I enjoy building responsive websites with creative designs, smooth animations and interactive user interfaces.</p>
          <div className="personalInfo">
            <p><b>Name:</b> Jansirani</p><p><b>Role:</b> Full Stack Developer</p><p><b>Education:</b> B.Sc Physics, MBA HRM</p>
            <p><b>Skills:</b> HTML, CSS, JavaScript, React</p><p><b>Projects:</b> 6+ Frontend Projects</p><p><b>Location:</b> Tiruvannamalai, Tamil Nadu</p>
          </div>
          <div className="stats">
            <div data-aos="zoom-in" data-aos-delay="100"><h3>6+</h3><p>Frontend Projects</p></div>
            <div data-aos="zoom-in" data-aos-delay="200"><h3>1+</h3><p>Full Stack Training</p></div>
            <div data-aos="zoom-in" data-aos-delay="300"><h3>100%</h3><p>Creative Focus</p></div>
          </div>
        </div>
      </section>

      <section id="education" className="education">
        <span className="pill center" data-aos="fade-up">My Journey</span>
        <h2 className="title" data-aos="fade-up">School, College, Graduate & Internship</h2>
        <div className="journey">
          {education.map((item, index) => (
            <div className="journeyCard" key={item.title} data-aos="fade-up" data-aos-delay={index * 120}>
              <div className="num">0{index + 1}</div><h3>{item.title}</h3><p>{item.text}</p><a href={item.file} download>Download Certificate</a>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="tools">
        <span className="pill center" data-aos="fade-up">My Favorite Tools</span>
        <h2 className="title" data-aos="fade-up">Tools I Use For Creative Designs</h2>
        <div className="toolFlow">
          {skills.map((skill, index) => (
            <div className="toolCard" key={skill} data-aos="zoom-in" data-aos-delay={index * 80}>
              <SkillIcon name={skill} />
              <h3>{skill}</h3>
              <p>{95 - index * 3}%</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="services">
        <span className="pill center" data-aos="fade-up">What I Do</span><h2 className="title" data-aos="fade-up">Services I Can Provide</h2>
        <div className="serviceGrid">
          {services.map((item, index) => <div className="serviceCard" key={item.title} data-aos="fade-up" data-aos-delay={index * 120}><span>{item.icon}</span><h3>{item.title}</h3><p>{item.text}</p></div>)}
        </div>
      </section>

      <section className="highlights green">
        <div data-aos="fade-right"><span className="pill light">Why Choose Me</span><h2 className="title leftTitle">Creative, Clean & Responsive Work</h2><p className="sectionText">I focus on building portfolio and frontend projects that look professional, load smoothly and work well on all screen sizes.</p></div>
        <div className="highlightGrid">{highlights.map((item, index) => <div className="highlightCard" key={item} data-aos="zoom-in" data-aos-delay={index * 80}>✓ {item}</div>)}</div>
      </section>

      <section className="learning">
        <span className="pill center" data-aos="fade-up">Learning Focus</span><h2 className="title" data-aos="fade-up">Skills Covered In My Training</h2>
        <div className="learningGrid">{learning.map((item, index) => <div className="learningCard" key={item} data-aos="fade-up" data-aos-delay={index * 90}><b>{String(index + 1).padStart(2, "0")}</b><p>{item}</p></div>)}</div>
      </section>

      <section className="processSection">
        <span className="pill center" data-aos="fade-up">Work Flow</span><h2 className="title" data-aos="fade-up">How I Build A Website</h2>
        <div className="processGrid">{process.map((item, index) => <div className="processCard" key={item} data-aos="flip-up" data-aos-delay={index * 90}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>)}</div>
      </section>

      <section id="projects" className="projects">
        <div className="projectHead" data-aos="fade-up">
          <span className="pill light center">Featured Work</span>
          <h2 className="title">My Recent <b>Projects</b></h2>
        </div>
        <div className="projectSlider">
          <button type="button" className="projectArrow leftArrow" onClick={() => slideProjects(-1)}>‹</button>
          <div className="projectShowcase" ref={swipeRef}>
            {projects.map((project, index) => (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="wideProject" key={project.title} data-aos="fade-up" data-aos-delay={index * 100}>
                <img src={project.image} alt={project.title} />
                <div className="wideProjectInfo"><h3>{project.title}</h3><span className="viewBtn">View Website</span></div>
              </a>
            ))}
          </div>
          <button type="button" className="projectArrow rightArrow" onClick={() => slideProjects(1)}>›</button>
        </div>
      </section>

      <section className="cta" data-aos="zoom-in">
        <h2>Ready to build a beautiful website?</h2><p>I can create clean portfolio pages, frontend websites and responsive UI designs.</p><a href="#contact">Contact Me</a>
      </section>

      <section id="contact" className="contact">
        <div data-aos="fade-right">
          <span className="pill">Contact Me</span>
          <h2>Let’s Build Something <b>Creative</b></h2>
          <p>Need a modern website? Send your message.</p>
          <div className="contactBox">
            <p>📞 <a href="tel:+918870973612">8870973612</a></p>
            <p>📩 <a href="mailto:jansirani803durai@gmail.com">jansirani803durai@gmail.com</a></p>
            <p>📍 Tiruvannamalai, Tamil Nadu.</p>
          </div>
        </div>

        <form action="https://api.web3forms.com/submit" method="POST" data-aos="fade-left">
          <input type="hidden" name="access_key" value="e6b6d176-ddb4-4901-b417-1c90d85e3dde" />
          <input type="hidden" name="subject" value="New Portfolio Message - Jansirani" />
          <input type="hidden" name="from_name" value="Jansirani Portfolio" />
          <input type="checkbox" name="botcheck" />
          <input name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input name="subject_line" placeholder="Subject" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer><p>© 2026 Jansirani | Full Stack Developer | Crafting Creative Digital Experiences.</p></footer>
    </div>
  );
}

export default App;
