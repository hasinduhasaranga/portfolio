import { Calendar, MapPin, Download, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PortfolioHeader from "@/components/PortfolioHeader";
import resumeFile from "@/assets/HasinduWijesekaraResume.pdf";

const About = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'HasinduWijesekaraResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experiences = [
    {
      title: "web Developer",
      company: "Cyberpixels",
      period: "2023 - 2024",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies.",
      skills: ["React", "PHP", "CSS", "SQL", "JavaScript"]
    },
    
  ];

  const education = [
    {
      degree: "Bachelor of Software Engineering Honors",
      school: "Birmingham City University",
      year: "2022 - 2025",
    },
    {
      degree: "Bachelor of Computer Engineering",
      school: "Open University of Sri Lanka",
      year: "2022 - 2026",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PortfolioHeader />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 2+ years of experience creating 
            beautiful, functional, and user-friendly applications. I love turning complex 
            problems into simple, elegant solutions.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover-scale animate-fade-in">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">2+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </CardContent>
          </Card>
          <Card className="text-center hover-scale animate-fade-in">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </CardContent>
          </Card>
          <Card className="text-center hover-scale animate-fade-in">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </CardContent>
          </Card>
          <Card className="text-center hover-scale animate-fade-in">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-muted-foreground">Technologies</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1  gap-8">
          {/* Experience */}
          <div className="">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4 hover-scale transition-all duration-300">
                    <h3 className="font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                    <p className="text-muted-foreground mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Education & Skills */}
          <div className="space-y-6">
            {/* Education */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                {education.map((edu, index) => (
                  <div key={index} className="hover-scale transition-all duration-300 mb-3">
                    <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-primary">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.year}</p>
                    
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Download Resume */}
            <Card className="animate-fade-in">
              <CardContent className="pt-6">
                <Button className="w-full hover-scale" size="lg" onClick={handleResumeDownload}>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="animate-fade-in">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Sri Lanka</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Personal Statement */}
        <Card className="mt-12 animate-fade-in">
          <CardHeader>
            <CardTitle>My Philosophy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              I believe that great software is built by understanding people first, technology second. 
              Every line of code I write is an opportunity to make someone's day a little better, 
              whether that's through a smooth user interface, a lightning-fast API, or a feature 
              that solves a real problem. I'm constantly learning, constantly growing, and constantly 
              excited about what we can build next.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default About;