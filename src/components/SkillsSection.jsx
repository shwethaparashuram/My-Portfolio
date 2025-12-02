import React from 'react';
import cn from '../libs/Utils';

const skills = [
  { name: 'React.js', level: '85', category: 'Frontend' },
  { name: 'JavaScript', level: '80', category: 'Frontend' },
  { name: 'TypeScript', level: '70', category: 'Frontend' },
  { name: 'HTML5', level: '85', category: 'Frontend' },
  { name: 'CSS3', level: '85', category: 'Frontend' },
  { name: 'Chakra UI', level: '85', category: 'Frontend' },
  { name: 'Tailwind CSS', level: '85', category: 'Frontend' },
  { name: 'Bootstrap', level: '85', category: 'Frontend' },

  // Backend
  { name: 'Node.js', level: '80', category: 'Backend' },
  { name: 'Express.js', level: '80', category: 'Backend' },
  { name: 'NestJS', level: '75', category: 'Backend' },

  // Database
  { name: 'PostgreSQL', level: '80', category: 'Database' },
  { name: 'MongoDB', level: '80', category: 'Database' },
  { name: 'Sequelize', level: '70', category: 'Database' },
  { name: 'TypeORM', level: '70', category: 'Database' },

  // Version Control
  { name: 'Git', level: '70', category: 'Version Control' },
  { name: 'GitHub', level: '70', category: 'Version Control' },
  { name: 'Bitbucket', level: '70', category: 'Version Control' },

  // Tools
  { name: 'REST APIs', level: '85', category: 'Tools' },
  { name: 'Postman', level: '80', category: 'Tools' },
  { name: 'VS Code', level: '85', category: 'Tools' },
];
const categories = [
  'All',
  'Frontend',
  'Backend',
  'Database',
  'Version Control',
  'Tools',
];
const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filterSkills = skills.filter(
    (skill) => activeCategory === 'All' || skill.category === activeCategory
  );
  console.log(filterSkills);

  return (
    <section
      id="skills"
      className="py-24 px-4 bg-secondary/30 animate-fade-in-delay-2"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/70 text-foreground hover:bg-secondary/80'
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden ">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5_ease-out"
                  style={{ width: skill.level + '%' }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-mute-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
