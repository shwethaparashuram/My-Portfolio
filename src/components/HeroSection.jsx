import { ArrowDown } from "lucide-react";

const HeroSection = () =>{
    return (
      <section
        id="hero"
        className=" relative min-h-screen flex flex-col  items-center justify-center px-4"
      >
        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="inline-block opacity-0 animate-fade-in">
                {' '}
                Hi, I'm
              </span>
              <span className=" text-primary opacity-0 animate-fade-in-delay-1">
                {' '}
                Shwetha
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {' '}
                S
              </span>
            </h1>
            <p className="text-lg md:text-xl text-mute-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              I am Full Stack Developer skilled in building scalable,
              high-performance web applications. I create web applications using React.js.
               Adept at full-cycle
              development from design to deployment.
            </p>
            <div className="mt-6 flex justify-center space-x-4 opacity-0 animate-fade-in-delay-4">
              <a
                href="#projects"
                className="cosmic-button"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-mute-foreground mb-2">Scroll</span>
            <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </section>
    );
    }
export default HeroSection;