import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Ecommerce Website",
      description:
        "Online shopping platform with authentication, product management, and secure checkout.",
      technologies: ["PHP", "MySQL"],
      githubLink: "https://github.com/Deepak-Phaneesh/addala-ecommerce-website",
    },
    {
      title: "Garbage Classification Web App",
      description:
        "Classifies waste images into categories using machine learning for environmental sustainability.",
      technologies: ["Python", "TensorFlow", "Keras", "Streamlit"],
      githubLink:
        "https://github.com/Deepak-Phaneesh/addala-garbage-classification-app",
    },
    {
      title: "Handwritten Character Recognition",
      description:
        "Recognizes handwritten characters with deep learning using convolutional neural networks.",
      technologies: ["CNN", "TensorFlow", "Keras"],
      githubLink:
        "https://github.com/Deepak-Phaneesh/addala-handwritten-text-recognition",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-elegant-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-elegant-muted bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-elegant-border hover:border-elegant-accent transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-elegant-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-elegant-accent/10 text-elegant-accent rounded-full text-sm border border-elegant-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-elegant-border hover:bg-elegant-accent hover:text-background transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
