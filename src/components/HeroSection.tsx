import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="relative inline-block">
          <img
            src="/lovable-uploads/a41c14b5-cbd4-4c48-851f-0d55a80378b5.png"
            alt="Deepak Phaneesh Naidu"
            className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-elegant-accent shadow-2xl"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-elegant-accent/20 to-transparent"></div>
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-elegant-muted bg-clip-text text-transparent">
            Deepak Phaneesh Naidu Addala
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm Deepak Phaneesh Naidu Addala, an Artificial Intelligence and
            Machine Learning student and developer passionate about building
            innovative tech solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            size="lg"
            className="bg-elegant-accent hover:bg-elegant-accent/90 text-background font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-elegant-border hover:bg-elegant-surface text-foreground px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection("resume")}
          >
            Download Resume
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="hover:bg-elegant-surface text-elegant-muted hover:text-foreground px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
