
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Resume from "./Resume";

const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-15 animate-bounce" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text content */}
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-800">Hi, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Vuppu Reddy Kalyan
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-4 font-medium">
              Fresher | Frontend Developer | Machine Learning Enthusiast
            </p>
            
            <p className="text-lg text-gray-600 mb-12 max-w-2xl">
              A motivated and enthusiastic fresher excited to apply AI/ML and problem-solving skills in real-world scenarios. 
              Passionate about contributing to innovative environments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Resume 
                buttonText="Download Resume" 
                size="lg"
              />
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleContactClick}
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 text-lg"
              >
                Contact Me
              </Button>
            </div>
          </div>
          
          {/* Profile image */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/38726f42-79ac-427c-ba63-7191aa9ea24b.png" 
                    alt="Vuppu Reddy Kalyan"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-600" />
      </div>
    </section>
  );
};

export default Hero;
