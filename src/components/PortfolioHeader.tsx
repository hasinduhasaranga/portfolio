import { Search, Home, User, Briefcase, Mail, Menu, Sun, Moon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const PortfolioHeader = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Only render theme toggle after mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-primary">Portfolio</h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search projects, skills..." 
                className="fb-input w-full pl-10"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`fb-nav-item hover-scale ${location.pathname === "/" ? "active" : ""}`}
              asChild
            >
              <Link to="/">
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`fb-nav-item hover-scale ${location.pathname === "/about" ? "active" : ""}`}
              asChild
            >
              <Link to="/about">
                <User className="w-5 h-5" />
                <span>About</span>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`fb-nav-item hover-scale ${location.pathname === "/projects" ? "active" : ""}`}
              asChild
            >
              <Link to="/projects">
                <Briefcase className="w-5 h-5" />
                <span>Projects</span>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`fb-nav-item hover-scale ${location.pathname === "/contact" ? "active" : ""}`}
              asChild
            >
              <Link to="/contact">
                <Mail className="w-5 h-5" />
                <span>Contact</span>
              </Link>
            </Button>
            <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="ml-4 hover-scale"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          </nav>

          {/* Dark Mode Toggle */}
          

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-1 md:hidden flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hover-scale p-2"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleMobileMenu}
              className="hover-scale p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-card border-l border-border z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="text-xl font-bold text-primary">Menu</h2>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleMobileMenu}
              className="hover-scale"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Mobile Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search projects, skills..." 
                className="fb-input w-full pl-10"
              />
            </div>
            
            {/* Mobile Navigation Links */}
            <nav className="space-y-2">
              <Button 
                variant="ghost" 
                size="lg" 
                className={`w-full justify-start fb-nav-item hover-scale ${location.pathname === "/" ? "active bg-primary/10" : ""}`}
                asChild
              >
                <Link to="/">
                  <Home className="w-5 h-5 mr-4" />
                  <span className="text-base">Home</span>
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className={`w-full justify-start fb-nav-item hover-scale ${location.pathname === "/about" ? "active bg-primary/10" : ""}`}
                asChild
              >
                <Link to="/about">
                  <User className="w-5 h-5 mr-4" />
                  <span className="text-base">About</span>
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className={`w-full justify-start fb-nav-item hover-scale ${location.pathname === "/projects" ? "active bg-primary/10" : ""}`}
                asChild
              >
                <Link to="/projects">
                  <Briefcase className="w-5 h-5 mr-4" />
                  <span className="text-base">Projects</span>
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className={`w-full justify-start fb-nav-item hover-scale ${location.pathname === "/contact" ? "active bg-primary/10" : ""}`}
                asChild
              >
                <Link to="/contact">
                  <Mail className="w-5 h-5 mr-4" />
                  <span className="text-base">Contact</span>
                </Link>
              </Button>
            </nav>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Theme</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="hover-scale"
              >
                {mounted && theme === "dark" ? (
                  <>
                    <Sun className="h-4 w-4 mr-2" />
                    <span className="text-sm">Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 mr-2" />
                    <span className="text-sm">Dark</span>
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PortfolioHeader;