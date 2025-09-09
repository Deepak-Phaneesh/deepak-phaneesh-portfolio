const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-elegant-muted bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative inline-block">
              <img
                src="/lovable-uploads/a41c14b5-cbd4-4c48-851f-0d55a80378b5.png"
                alt="Deepak Phaneesh Naidu"
                className="w-64 h-64 rounded-full mx-auto md:mx-0 object-cover border-4 border-elegant-border shadow-xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-elegant-accent/10 to-transparent"></div>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Computer Science and Engineering student with a
              strong foundation in software development and artificial
              intelligence. I enjoy tackling complex problems and building
              innovative solutions that make a real-world impact.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-elegant-accent mb-4">
                  Education
                </h3>
                <div className="bg-elegant-surface p-6 rounded-lg border border-elegant-border">
                  <h4 className="text-lg font-medium text-foreground">
                    B.Tech in Artificial Intelligence and Machine Learning
                  </h4>
                  <p className="text-elegant-muted">
                    Aditya Engineering College
                  </p>
                  <p className="text-sm text-muted-foreground">2022 – 2026</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-elegant-accent mb-4">
                  Internships
                </h3>
                <div className="space-y-4">
                  <div className="bg-elegant-surface p-6 rounded-lg border border-elegant-border">
                    <h4 className="text-lg font-medium text-foreground">
                      AI/ML Virtual Intern
                    </h4>
                    <p className="text-elegant-muted">APSSDC</p>
                    <p className="text-sm text-muted-foreground">
                      May – July 2024
                    </p>
                  </div>
                  <div className="bg-elegant-surface p-6 rounded-lg border border-elegant-border">
                    <h4 className="text-lg font-medium text-foreground">
                      Web Development Intern
                    </h4>
                    <p className="text-elegant-muted">Eduexpose</p>
                    <p className="text-sm text-muted-foreground">
                      May – July 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
