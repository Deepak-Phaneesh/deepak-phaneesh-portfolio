import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

const CertificatesSection = () => {
  const certificates = [
    {
      name: "NPTEL Internet of Things",
      link: "https://drive.google.com/file/d/16y9qNHgL9HXcd1bdlYIi_Rox4p4FuIFk/view?usp=drive_link",
    },
    {
      name: "NPTEL Cloud Computing",
      link: "https://drive.google.com/file/d/11mcK5TDHBSUQSAzDa0NcNHMiakzrxHWT/view?usp=drive_link",
    },
    {
      name: "AICTE SkillDzire Artificial Intelligence",
      link: "https://drive.google.com/file/d/10SN4VJGCRd47xB7N-VZ5LDv_Ig3KOl02/view?usp=drive_link",
    },
    {
      name: "APSSDC Edunet Artificial Intelligence and Machine Learning",
      link: "https://drive.google.com/file/d/1a8XBSU0xRL4kbmWf3kiYO9d-LOL_9xAu/view?usp=drive_link",
    },
  ];

  return (
    <section id="certificates" className="py-20 px-6 bg-elegant-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-elegant-muted bg-clip-text text-transparent">
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((certificate, index) => (
            <a
              key={index}
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="bg-card border-elegant-border hover:border-elegant-accent transition-all duration-300 hover:scale-105 group cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-elegant-accent group-hover:text-elegant-accent/80 transition-colors" />
                    <CardTitle className="text-lg text-foreground group-hover:text-elegant-accent transition-colors">
                      {certificate.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-2 bg-elegant-border rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-elegant-accent to-elegant-accent/60 rounded-full transform translate-x-0 transition-transform duration-500 group-hover:translate-x-1"></div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
