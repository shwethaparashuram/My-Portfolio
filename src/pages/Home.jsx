import AboutMe from '../components/AboutMe';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import StarBackground from '../components/StarBackground';
import ThemeToggle from '../components/ThemeToggle';

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* <div className="fixed top-5 right-5 z-50"> */}
      <ThemeToggle />
      {/*Theme Toggle*/}

      {/*Background Animation*/}
      <StarBackground />

      {/*Navbar*/}
      <Navbar />

      {/*Main Content*/}

      <main>
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/*footer*/}
      <Footer />
    </div>
  );
};
export default Home;
