import { User, Briefcase, Code, Award, MessageSquare, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import resumeFile from "@/assets/HasinduWijesekaraResume.pdf";

const PortfolioSidebar = () => {
  const skills = [
    { name: "Java", level: 95 },
    { name: "PHP", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "React Native", level: 82 },
    { name: "MySQL", level: 90 },
    { name: "Spring Boot", level: 88 },
    { name: "Android Dev", level: 80 },
  ];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'HasinduWijesekaraResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="fb-card p-6">
        <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
        <div className="space-y-3">
          <Button variant="ghost" className="w-full justify-start fb-nav-item">
            <User className="w-5 h-5 mr-3" />
            About Me
          </Button>
          <Button variant="ghost" className="w-full justify-start fb-nav-item">
            <Briefcase className="w-5 h-5 mr-3" />
            My Projects
          </Button>
          <Button variant="ghost" className="w-full justify-start fb-nav-item">
            <Code className="w-5 h-5 mr-3" />
            Skills
          </Button>
          <Button variant="ghost" className="w-full justify-start fb-nav-item">
            <Award className="w-5 h-5 mr-3" />
            Achievements
          </Button>
          <Button variant="ghost" className="w-full justify-start fb-nav-item">
            <MessageSquare className="w-5 h-5 mr-3" />
            Testimonials
          </Button>
        </div>
      </div>

      {/* Skills */}
      <div className="fb-card p-6">
        <h3 className="font-semibold text-foreground mb-4">Top Skills</h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-foreground">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </div>

      {/* Resume Download */}
      <div className="fb-card p-6">
        <h3 className="font-semibold text-foreground mb-4">Get My Resume</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Download my detailed resume with all experience and achievements.
        </p>
        <Button className="w-full fb-button-primary" onClick={handleResumeDownload}>
          <Download className="w-4 h-4 mr-2" />
          Download Resume
        </Button>
      </div>

      {/* Recent Activity */}
      <div className="fb-card p-6">
        <h3 className="font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p className="text-foreground">Updated GlobeMed Healthcare System</p>
              <p className="text-muted-foreground">9 minutes ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <p className="text-foreground">Enhanced SweetsByIndunil food delivery app</p>
              <p className="text-muted-foreground">24 minutes ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
            <div>
              <p className="text-foreground">Improved SmartChat real-time features</p>
              <p className="text-muted-foreground">12 hours ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
            <div>
              <p className="text-foreground">Deployed Furni e-commerce platform</p>
              <p className="text-muted-foreground">14 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSidebar;