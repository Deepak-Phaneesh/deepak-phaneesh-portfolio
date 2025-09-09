import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-elegant-muted bg-clip-text text-transparent">
          Resume
        </h2>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Download my complete resume to learn more about my experience,
          projects, and qualifications.
        </p>

        <div className="pt-8">
          <a
            href="https://drive.google.com/file/d/1sDvxuZsYU5gD41g1L9IHimNKrdbfOFew/view?usp=sharing"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-elegant-accent hover:bg-elegant-accent/90 text-background font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Download className="w-5 h-5 mr-3" />
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
