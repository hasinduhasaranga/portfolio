import PortfolioHeader from "@/components/PortfolioHeader";
import ProfileHero from "@/components/ProfileHero";
import ProjectPost from "@/components/ProjectPost";
import PortfolioSidebar from "@/components/PortfolioSidebar";

// Import project images
import globemed from "@/assets/Screenshot 2025-10-14 114614.png";
import SweetsByIndunil from "@/assets/Minimalist Neutral Multi Device Computer Mockup Website Launch Instagram Post (4).png";
import smartchat from "@/assets/Aesthetic Download Our App With Phone Mockup Instagram Post.png";
import furni from "@/assets/Screenshot 2025-10-25 115415.png";
import whatsup from "@/assets/Clean and Modern App Portfolio Mockup Presentation.png";
import pczone from "@/assets/Minimalist Neutral Multi Device Computer Mockup Website Launch Instagram Post (2).png";
import almasa from "@/assets/Screenshot 2025-10-07 194812.png";


const Index = () => {
  const projects = [
    {
      title: "GlobeMed - Healthcare Management System",
      description: "A comprehensive healthcare management system built with Java. Features patient management, appointment scheduling, medical records, and healthcare provider dashboard for efficient medical service delivery.",
      image: globemed,
      technologies: ["Java", "Spring Boot", "MySQL", "JavaFX", "JPA"],
      likes: 24,
      comments: 6,
      githubUrl: "https://github.com/hasinduhasaranga/GlobeMed",
      timeAgo: "9 minutes ago"
    },
    {
      title: "SweetsByIndunil - Food Delivery System",
      description: "A complete food delivery solution with Android mobile app for customers and admin management system. Features real-time order tracking, payment integration, and delivery management.",
      image: SweetsByIndunil,
      technologies: ["Java", "Android", "Firebase", "SQLite", "Material Design"],
      likes: 31,
      comments: 8,
      githubUrl: "https://github.com/hasinduhasaranga/SweetsByIndunil",
      timeAgo: "24 minutes ago"
    },
    {
      title: "SmartChat - Real-time Chat Application",
      description: "A modern real-time chat application with Java backend. Features instant messaging, group chats, file sharing, and user authentication with secure WebSocket connections.",
      image: smartchat,
      technologies: ["Java", "WebSocket", "Spring Boot", "MySQL", "JWT"],
      likes: 45,
      comments: 12,
      githubUrl: "https://github.com/hasinduhasaranga/smartchat",
      timeAgo: "12 hours ago"
    },
    {
      title: "Furni - E-commerce Web Application",
      description: "A full-stack e-commerce platform for furniture sales built with Java web technologies. Features product catalog, shopping cart, user authentication, and order management system.",
      image: furni,
      technologies: ["Java", "JSP", "Servlet", "MySQL", "HTML", "CSS"],
      likes: 38,
      comments: 9,
      githubUrl: "https://github.com/hasinduhasaranga/furni",
      timeAgo: "14 hours ago"
    },
    {
      title: "WhatsUp 2.0 - WhatsApp Clone",
      description: "An advanced WhatsApp clone chat application built with TypeScript. Features real-time messaging, media sharing, group chats, and modern UI with enhanced user experience.",
      image: whatsup,
      technologies: ["TypeScript", "React", "Node.js", "Socket.io", "MongoDB"],
      likes: 52,
      comments: 15,
      githubUrl: "https://github.com/hasinduhasaranga/whatsup-2.0",
      timeAgo: "15 hours ago"
    },
    {
      title: "WhatsUp - React Native Chat App",
      description: "A cross-platform mobile chat application built with React Native. Features instant messaging, push notifications, media sharing, and offline message sync capabilities.",
      image: whatsup,
      technologies: ["React Native", "JavaScript", "Firebase", "AsyncStorage", "Expo"],
      likes: 43,
      comments: 11,
      githubUrl: "https://github.com/hasinduhasaranga/whatsup",
      timeAgo: "15 hours ago"
    },
    {
      title: "PCZone - E-commerce Platform",
      description: "A comprehensive e-commerce web application for computer hardware and accessories. Built with PHP, featuring product management, user accounts, shopping cart, and payment processing.",
      image: pczone,
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML/CSS"],
      likes: 29,
      comments: 7,
      githubUrl: "https://github.com/hasinduhasaranga/pczone",
      timeAgo: "3 days ago"
    },
    {
      title: "Almasa - Business Website",
      description: "A professional business website for Almasa UAE company. Built with PHP and modern web technologies, featuring company portfolio, services showcase, and contact management system.",
      image: almasa,
      technologies: ["PHP", "MySQL", "JavaScript", "CSS3", "Responsive Design"],
      likes: 18,
      comments: 4,
      githubUrl: "https://github.com/hasinduhasaranga/almasa",
      timeAgo: "16 hours ago"
    },
    {
      title: "Adyapana - Student Management System",
      description: "A comprehensive student management system built with Java. Features student registration, course management, grade tracking, attendance monitoring, and academic report generation.",
      image: "",
      technologies: ["Java", "Swing", "MySQL", "JDBC", "JasperReports"],
      likes: 35,
      comments: 10,
      githubUrl: "https://github.com/hasinduhasaranga/Adyapana",
      timeAgo: "15 hours ago"
    },
    {
      title: "Kash - Garment Management System",
      description: "A specialized management system for Kash garment company. Built with Java, featuring inventory management, order processing, production tracking, and business analytics dashboard.",
      image: "",
      technologies: ["Java", "JavaFX", "MySQL", "JPA", "Apache POI"],
      likes: 27,
      comments: 6,
      githubUrl: "https://github.com/hasinduhasaranga/kash",
      timeAgo: "15 hours ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PortfolioHeader />
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="animate-fade-in">
              <ProfileHero />
            </div>
            
            {/* Project Feed */}
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="animate-fade-in hover-scale transition-all duration-300">
                  <ProjectPost {...project} />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="animate-fade-in">
              <PortfolioSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
