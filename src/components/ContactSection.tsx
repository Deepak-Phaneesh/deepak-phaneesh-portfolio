import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactLinks = [
    {
      icon: Phone,
      label: "Phone",
      value: "9553079665",
      href: "tel:9553079665"
    },
    {
      icon: Mail,
      label: "Email",
      value: "addaladp@gmail.com",
      href: "mailto:addaladp@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/deepak-phaneesh-naidu-addala-8a8907290/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "GitHub Profile",
      href: "https://github.com/Deepak-Phaneesh"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-elegant-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-elegant-muted bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-elegant-accent mb-6">Let's Connect</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
            </div>
            
            <div className="grid gap-4">
              {contactLinks.map((link, index) => (
                <Card key={index} className="bg-card border-elegant-border hover:border-elegant-accent transition-all duration-300 hover:scale-105 group cursor-pointer">
                  <CardContent className="p-4">
                    <a 
                      href={link.href}
                      target={link.label === "LinkedIn" || link.label === "GitHub" ? "_blank" : undefined}
                      rel={link.label === "LinkedIn" || link.label === "GitHub" ? "noopener noreferrer" : undefined}
                      className="flex items-center space-x-4"
                    >
                      <link.icon className="w-6 h-6 text-elegant-accent group-hover:text-elegant-accent/80 transition-colors" />
                      <div>
                        <p className="font-medium text-foreground group-hover:text-elegant-accent transition-colors">
                          {link.label}
                        </p>
                        <p className="text-sm text-muted-foreground">{link.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <Card className="bg-card border-elegant-border">
            <CardHeader>
              <CardTitle className="text-2xl text-elegant-accent">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-elegant-surface border-elegant-border focus:border-elegant-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-elegant-surface border-elegant-border focus:border-elegant-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                  <Input 
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-elegant-surface border-elegant-border focus:border-elegant-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-elegant-surface border-elegant-border focus:border-elegant-accent resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-elegant-accent hover:bg-elegant-accent/90 text-background font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;