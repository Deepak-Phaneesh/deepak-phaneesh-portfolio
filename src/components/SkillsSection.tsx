const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "SQL", "JavaScript", "TypeScript", "HTML/CSS", "R"]
    },
    {
      title: "Frameworks",
      skills: ["React.js", "Node.js", "FastAPI", "Scikit-learn", "Keras", "TensorFlow", "PyTorch"]
    },
    {
      title: "Tools",
      skills: ["Git", "Google Cloud Platform", "VS Code", "Visual Studio", "Jupyter", "Google Colab", "Power BI"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-elegant-muted bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-semibold text-elegant-accent text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-elegant-surface p-4 rounded-lg border border-elegant-border hover:border-elegant-accent transition-all duration-300 hover:scale-105 text-center group"
                  >
                    <span className="text-foreground group-hover:text-elegant-accent transition-colors font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;