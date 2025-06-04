
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import WineProjectModal from "./WineProjectModal";
import MedicinalProjectModal from "./MedicinalProjectModal";

const Projects = () => {
  const [isWineModalOpen, setIsWineModalOpen] = useState(false);
  const [isMedicinalModalOpen, setIsMedicinalModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Wine Oracle",
      description: "Developed a hybrid model using MC-CNN and MLP for wine quality prediction. Published in REST Publications with enhanced accuracy in wine classification.",
      technologies: ["Python", "Machine Learning", "CNN", "MLP"],
      status: "Published Research",
      link: "https://github.com/Kalyan31104/WineQualityPrediction",
      modalType: "wine",
      hasReadMore: true
    },
    {
      title: "Medicinal Plant Identification",
      description: "Built a hybrid CNN + ViT model using Hugging Face datasets for enhanced plant classification with improved accuracy and real-world applications.",
      technologies: ["Python", "Computer Vision", "Transformers", "Hugging Face"],
      status: "Completed",
      link: "https://github.com/Kalyan31104/Medicinal_Image_Classification",
      modalType: "medicinal",
      hasReadMore: true
    },
    {
      title: "Front-End Development Experience",
      description: "Gained hands-on experience by working on various exercises and mini-projects using core front-end technologies. These practices helped strengthen my understanding of responsive design, DOM manipulation, and dynamic UI behavior.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
      link: "https://github.com/Kalyan31104/Web",
      modalType: "frontend",
      hasReadMore: false
    }
  ];

  const handleReadMore = (modalType: string) => {
    switch (modalType) {
      case "wine":
        setIsWineModalOpen(true);
        break;
      case "medicinal":
        setIsMedicinalModalOpen(true);
        break;
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing my hands-on experience in machine learning and web development
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            disabled={projects.length <= 2}
          >
            <ChevronLeft className="w-6 h-6 text-purple-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            disabled={projects.length <= 2}
          >
            <ChevronRight className="w-6 h-6 text-purple-600" />
          </button>

          {/* Projects Container */}
          <div className="overflow-hidden mx-16">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="w-1/2 flex-shrink-0 px-4"
                >
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 animate-fade-in border border-purple-100 h-full">
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800 leading-tight">{project.title}</h3>
                        {project.status && (
                          <span className={`px-3 py-1 rounded-full text-sm font-medium flex-shrink-0 ml-2 ${
                            project.status === 'Published Research' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {project.status}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                        {project.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white rounded-full text-sm font-medium text-purple-600 border border-purple-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 flex-wrap">
                      <Button 
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white flex-shrink-0"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                      {project.hasReadMore && (
                        <Button 
                          variant="outline" 
                          className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white flex-shrink-0"
                          onClick={() => handleReadMore(project.modalType)}
                        >
                          Read More
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-purple-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Project Modals */}
        <WineProjectModal 
          isOpen={isWineModalOpen} 
          onClose={() => setIsWineModalOpen(false)} 
        />
        <MedicinalProjectModal 
          isOpen={isMedicinalModalOpen} 
          onClose={() => setIsMedicinalModalOpen(false)} 
        />
      </div>
    </section>
  );
};

export default Projects;
