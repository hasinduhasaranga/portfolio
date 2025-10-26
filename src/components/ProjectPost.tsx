import {
  Heart,
  MessageCircle,
  Share2,
  ExternalLink,
  Github,
  X,
  ZoomIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

interface ProjectPostProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  likes: number;
  comments: number;
  demoUrl?: string;
  githubUrl?: string;
  timeAgo: string;
}

const ProjectPost = ({
  title,
  description,
  image,
  technologies,
  likes,
  comments,
  demoUrl,
  githubUrl,
  timeAgo,
}: ProjectPostProps) => {
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);

  return (
    <div className="fb-card mb-6">
      {/* Post Header */}
      <div className="px-4 sm:px-6 py-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-semibold text-sm sm:text-base">
              HW
            </span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground text-sm sm:text-base">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {timeAgo}
            </p>
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="px-4 sm:px-6 py-4">
        <p className="text-foreground mb-4 text-sm sm:text-base leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs px-2 py-1"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Project Image */}
      <div className="px-4 sm:px-6">
        <Dialog open={isImageDialogOpen} onOpenChange={setIsImageDialogOpen}>
          <DialogTrigger asChild>
            <div className="relative cursor-pointer group hover-scale">
              <img
                src={image}
                alt={title}
                className="w-full h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
              />
              {/* Zoom overlay on hover */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent
            className="max-w-7xl w-[95vw] h-[90vh] p-0 border-0 bg-black/95 [&>button]:hidden"
            onOpenAutoFocus={(e) => e.preventDefault()}
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Close button */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white border-0"
                onClick={() => setIsImageDialogOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>

              {/* Full size image */}
              <img
                src={image}
                alt={title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />

              {/* Image caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4 text-white">
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-sm text-white/80">{description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {technologies.slice(0, 5).map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs bg-white/20 text-white border-white/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {technologies.length > 5 && (
                    <Badge
                      variant="secondary"
                      className="text-xs bg-white/20 text-white border-white/20"
                    >
                      +{technologies.length - 5} more
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Action Buttons */}
      <div className="px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
          {/* Social Actions */}
          <div className="flex items-center space-x-3 sm:space-x-6">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              <span className="text-sm">{likes}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              <span className="text-sm">{comments}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary"
            >
              <Share2 className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              <span className="text-sm">Share</span>
            </Button>
          </div>

          {/* Project Action Buttons */}
          {(demoUrl || githubUrl) && (
            <div className="flex gap-2 justify-center sm:justify-end">
              {githubUrl && (
                <Button
                  size="sm"
                  variant="secondary"
                  className="fb-button-secondary flex-1 sm:flex-initial"
                >
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 " />
                    
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPost;
