import { Briefcase, Code, User } from 'lucide-react';

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate FullStack Developer
            </h3>
            <p className="text-muted-foreground">
              With over 3 years of experience in web development, I am a
              dedicated FullStack Developer with a passion for creating dynamic
              and responsive web applications. My expertise lies in both
              front-end and back-end development, allowing me to build user
              experiences.
            </p>
            <p className="text-muted-foreground">
              I specialize in React.js for front-end development, crafting
              intuitive interfaces that enhance user engagement. On the
              back-end, I am proficient in Node.js and Express.js, developing
              robust server-side logic and APIs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href=""
                className="px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300 text-center"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex item-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold">Web Development</h4>
                  <p className="text-muted-foreground text-sm">
                    Building responsive and dynamic web applications using
                    modern technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex item-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold">UI Design</h4>
                  <p className="text-muted-foreground text-sm">
                    Crafting intuitive and engaging user interfaces with a focus
                    on user experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex item-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold">Backend Development</h4>
                  <p className="text-muted-foreground text-sm">
                    Developing robust server-side applications and APIs for
                    seamless data management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
