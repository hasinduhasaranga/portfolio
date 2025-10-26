import { MapPin, Calendar, Globe, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profileImage from "@/assets/profile.jpg";

const ProfileHero = () => {
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
  
  // Simple dialog state management (no scrollbar handling needed)
  useEffect(() => {
    const body = document.body;
    
    if (isImageDialogOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      
      // Prevent scrolling when dialog is open
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.left = '0';
      body.style.right = '0';
      body.style.overflow = 'hidden';
      
      // Store scroll position for restoration
      body.setAttribute('data-scroll-y', scrollY.toString());
    } else {
      // Restore body styles and scroll position
      const scrollY = body.getAttribute('data-scroll-y');
      
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.overflow = '';
      
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY));
        body.removeAttribute('data-scroll-y');
      }
    }
    
    // Cleanup on unmount
    return () => {
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.overflow = '';
      body.removeAttribute('data-scroll-y');
    };
  }, [isImageDialogOpen]);

  return (
    <div className="fb-card mb-6">
      {/* Cover Photo */}
      <div className="hero-gradient h-48 rounded-t-lg relative">
        <div className="absolute inset-0 bg-black/20 rounded-t-lg"></div>
      </div>

      {/* Profile Info */}
      <div className="px-6 pb-6">
        {/* Avatar and Basic Info */}
        <div className="flex flex-col md:flex-row md:items-end md:space-x-6 -mt-16 relative z-10">
          {/* Profile Picture with Click to Enlarge */}
          <Dialog open={isImageDialogOpen} onOpenChange={setIsImageDialogOpen}>
            <DialogTrigger asChild>
              <div className="cursor-pointer hover-scale">
                <Avatar className="w-32 h-32 border-4 border-card">
                  <AvatarImage src={profileImage} alt="Profile" />
                  <AvatarFallback className="text-2xl font-bold">Hasindu</AvatarFallback>
                </Avatar>
              </div>
            </DialogTrigger>
            <DialogContent 
              className="max-w-2xl p-0 border-0 bg-transparent"
              onOpenAutoFocus={(e) => e.preventDefault()}
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
              <div className="relative bg-background rounded-lg overflow-hidden animate-scale-in">
                <div className="p-6">
                  <div className="flex justify-center">
                    <Avatar className="w-80 h-80 border-4 border-primary/20 shadow-2xl">
                      <AvatarImage 
                        src={profileImage} 
                        alt="Profile Picture" 
                        className="object-cover"
                      />
                      <AvatarFallback className="text-6xl">Hasindu</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-2xl font-bold text-foreground">Hasindu Wijesekara</h3>
                    <p className="text-muted-foreground">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          <div className="flex-1 mt-4 md:mt-0 md:mb-4">
            <h1 className="text-3xl font-bold text-foreground">Hasindu Wijesekara</h1>
            <p className="text-xl text-muted-foreground mb-2">Full Stack Developer</p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Srilanka</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Available for hire</span>
              </div>
              
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button className="fb-button-primary" asChild>
                <Link to="/about">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Link>
              </Button>
              <Button variant="secondary" className="fb-button-secondary">
                <Github className="w-4 h-4 mr-2" />
                <a href="https://github.com/hasinduhasaranga">GitHub</a>
              </Button>
              <Button variant="secondary" className="fb-button-secondary">
                <Linkedin className="w-4 h-4 mr-2" />
                <a href="https://www.linkedin.com/in/hasinduwijesekara">LinkedIn</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">10+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">10+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;