import { ExternalLink, Github, Star, Eye, Filter, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import PortfolioHeader from "@/components/PortfolioHeader";
import globemed from "@/assets/Screenshot 2025-10-14 114614.png";
import SweetsByIndunil from "@/assets/Minimalist Neutral Multi Device Computer Mockup Website Launch Instagram Post (4).png";
import smartchat from "@/assets/Aesthetic Download Our App With Phone Mockup Instagram Post.png";
import furni from "@/assets/Screenshot 2025-10-25 115415.png";
import whatsup from "@/assets/Clean and Modern App Portfolio Mockup Presentation.png";
import pczone from "@/assets/Minimalist Neutral Multi Device Computer Mockup Website Launch Instagram Post (2).png";
import almasa from "@/assets/Screenshot 2025-10-07 194812.png";

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: "GlobeMed - Healthcare Management System",
      description: "A comprehensive healthcare management system built with Java. Features patient management, appointment scheduling, medical records, and healthcare provider dashboard for efficient medical service delivery.",
      image: globemed,
      technologies: ["Java", "Spring Boot", "MySQL", "JavaFX", "JPA"],
      category: "Desktop App",
      featured: true,
      stars: 24,
      views: 856,
      githubUrl: "https://github.com/hasinduhasaranga/GlobeMed",
      status: "Active"
    },
    {
      id: 2,
      title: "WhatsUp 2.0 - WhatsApp Clone",
      description: "An advanced WhatsApp clone chat application built with TypeScript. Features real-time messaging, media sharing, group chats, and modern UI with enhanced user experience.",
      image: whatsup,
      technologies: ["TypeScript", "React", "Node.js", "Socket.io", "MongoDB"],
      category: "Web App",
      featured: true,
      stars: 52,
      views: 1432,
      githubUrl: "https://github.com/hasinduhasaranga/whatsup-2.0",
      status: "Completed"
    },
    {
      id: 3,
      title: "PCZone - E-commerce Platform",
      description: "A comprehensive e-commerce web application for computer hardware and accessories. Built with PHP, featuring product management, user accounts, shopping cart, and payment processing.",
      image: pczone,
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML/CSS"],
      category: "E-Commerce",
      featured: true,
      stars: 29,
      views: 967,
      githubUrl: "https://github.com/hasinduhasaranga/pczone",
      status: "Completed"
    },
    {
      id: 4,
      title: "SmartChat - Real-time Chat Application",
      description: "A modern real-time chat application with Java backend. Features instant messaging, group chats, file sharing, and user authentication with secure WebSocket connections.",
      image: smartchat,
      technologies: ["Java", "WebSocket", "Spring Boot", "MySQL", "JWT"],
      category: "Web App",
      featured: true,
      stars: 45,
      views: 1123,
      githubUrl: "https://github.com/hasinduhasaranga/smartchat",
      status: "Active"
    },
    {
      id: 5,
      title: "SweetsByIndunil - Food Delivery System",
      description: "A complete food delivery solution with Android mobile app for customers and admin management system. Features real-time order tracking, payment integration, and delivery management.",
      image: SweetsByIndunil,
      technologies: ["Java", "Android", "Firebase", "SQLite", "Material Design"],
      category: "Mobile",
      featured: false,
      stars: 31,
      views: 712,
      githubUrl: "https://github.com/hasinduhasaranga/SweetsByIndunil",
      status: "Active"
    },
    {
      id: 6,
      title: "WhatsUp - React Native Chat App",
      description: "A cross-platform mobile chat application built with React Native. Features instant messaging, push notifications, media sharing, and offline message sync capabilities.",
      image: whatsup,
      technologies: ["React Native", "JavaScript", "Firebase", "AsyncStorage", "Expo"],
      category: "Mobile",
      featured: false,
      stars: 43,
      views: 834,
      githubUrl: "https://github.com/hasinduhasaranga/whatsup",
      status: "Completed"
    },
    {
      id: 7,
      title: "Furni - E-commerce Web Application",
      description: "A full-stack e-commerce platform for furniture sales built with Java web technologies. Features product catalog, shopping cart, user authentication, and order management system.",
      image: furni,
      technologies: ["Java", "JSP", "Servlet", "MySQL", "HTML", "CSS"],
      category: "E-Commerce",
      featured: false,
      stars: 38,
      views: 623,
      githubUrl: "https://github.com/hasinduhasaranga/furni",
      status: "Completed"
    },
    {
      id: 8,
      title: "Adyapana - Student Management System",
      description: "A comprehensive student management system built with Java. Features student registration, course management, grade tracking, attendance monitoring, and academic report generation.",
      image: "",
      technologies: ["Java", "Swing", "MySQL", "JDBC", "JasperReports"],
      category: "Desktop App",
      featured: false,
      stars: 35,
      views: 567,
      githubUrl: "https://github.com/hasinduhasaranga/Adyapana",
      status: "Completed"
    },
    {
      id: 9,
      title: "Kash - Garment Management System",
      description: "A specialized management system for Kash garment company. Built with Java, featuring inventory management, order processing, production tracking, and business analytics dashboard.",
      image: "",
      technologies: ["Java", "JavaFX", "MySQL", "JPA", "Apache POI"],
      category: "Desktop App",
      featured: false,
      stars: 27,
      views: 445,
      githubUrl: "https://github.com/hasinduhasaranga/kash",
      status: "Completed"
    },
    {
      id: 10,
      title: "Almasa - Business Website",
      description: "A professional business website for Almasa UAE company. Built with PHP and modern web technologies, featuring company portfolio, services showcase, and contact management system.",
      image: almasa,
      technologies: ["PHP", "MySQL", "JavaScript", "CSS3", "Responsive Design"],
      category: "Web App",
      featured: false,
      stars: 18,
      views: 334,
      githubUrl: "https://github.com/hasinduhasaranga/almasa",
      status: "Completed"
    }
  ];

  const categories = ["All", "Web App", "E-Commerce", "Mobile", "Desktop App"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [imageDialog, setImageDialog] = useState({ isOpen: false, project: null as typeof allProjects[0] | null });

  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  const featuredProjects = allProjects.filter(project => project.featured);

  const handleImageClick = (project: typeof allProjects[0]) => {
    setImageDialog({ isOpen: true, project });
  };

  const closeImageDialog = () => {
    setImageDialog({ isOpen: false, project: null });
  };

  const ProjectImage = ({ project, className = "" }: { project: typeof allProjects[0], className?: string }) => (
    <>
      <img 
        src={project.image} 
        alt={project.title}
        className={`group-hover:scale-105 transition-transform duration-300 ${className}`}
      />
      {/* Zoom overlay on hover - positioned in center of the container */}
      <div 
        className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer flex items-center justify-center"
        onClick={() => handleImageClick(project)}
      >
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
          <ZoomIn className="w-6 h-6 text-white" />
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-background">
      <PortfolioHeader />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse portfolio of 10+ projects spanning healthcare systems, e-commerce platforms, 
            chat applications, and management systems. Built with Java, TypeScript, PHP, React Native, and modern web technologies.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="all" className="animate-fade-in">All Projects</TabsTrigger>
            <TabsTrigger value="featured" className="animate-fade-in">Featured</TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="space-y-8">
            {/* Featured Projects */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Card key={project.id} className="overflow-hidden hover-scale animate-fade-in">
                  <div className="aspect-video overflow-hidden relative group">
                    <ProjectImage 
                      project={project}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">{tech}</Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {project.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {project.views}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all" className="space-y-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="hover-scale"
                >
                  <Filter className="w-4 h-4 mr-1" />
                  {category}
                </Button>
              ))}
            </div>

            {/* All Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-calls-3 gap-6">
              {filteredProjects.map((project, index) => (
                <Card key={project.id} className="overflow-hidden hover-scale animate-fade-in">
                  <div className="aspect-video overflow-hidden relative group">
                    <ProjectImage 
                      project={project}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {project.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {project.views}
                        </div>
                      </div>
                      
                      <div className="flex gap-1">
                        
                        <Button size="sm" variant="ghost" className="h-8 px-2" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3 h-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Image Dialog */}
      <Dialog open={imageDialog.isOpen} onOpenChange={(open) => !open && closeImageDialog()}>
        <DialogContent 
          className="max-w-7xl w-[95vw] h-[90vh] p-0 border-0 bg-black/95 [&>button]:hidden"
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          {imageDialog.project && (
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Close button */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white border-0"
                onClick={closeImageDialog}
              >
                <X className="w-5 h-5" />
              </Button>
              
              {/* Full size image */}
              <img 
                src={imageDialog.project.image} 
                alt={imageDialog.project.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              
              {/* Image caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{imageDialog.project.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-white/70">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {imageDialog.project.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {imageDialog.project.views}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-white/80 mb-3">{imageDialog.project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {imageDialog.project.technologies.slice(0, 8).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-white/20 text-white border-white/20">
                      {tech}
                    </Badge>
                  ))}
                  {imageDialog.project.technologies.length > 8 && (
                    <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/20">
                      +{imageDialog.project.technologies.length - 8} more
                    </Badge>
                  )}
                </div>
                {imageDialog.project.githubUrl && (
                  <div className="flex gap-2">
                    
                    <Button size="sm" variant="outline" className="text-white border-white/30 hover:bg-white/10" asChild>
                      <a href={imageDialog.project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;