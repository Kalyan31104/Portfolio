
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import CollegeModal from "./CollegeModal";
import IntermediateModal from "./IntermediateModal";
import SchoolModal from "./SchoolModal";

const About = () => {
  const [isCollegeModalOpen, setIsCollegeModalOpen] = useState(false);
  const [isIntermediateModalOpen, setIsIntermediateModalOpen] = useState(false);
  const [isSchoolModalOpen, setIsSchoolModalOpen] = useState(false);

  const education = [
    {
      degree: "B.E in Computer Science (AI & ML)",
      institution: "Vel Tech High Tech Engineering College",
      period: "2022–Present",
      grade: "CGPA: 8.97",
      status: "current",
      modalType: "college"
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior College",
      period: "2020–2022",
      grade: "92%",
      status: "completed",
      modalType: "intermediate"
    },
    {
      degree: "Secondary School",
      institution: "Prasanna Bharathi High School",
      period: "2019–2020",
      grade: "92.6%",
      status: "completed",
      modalType: "school"
    }
  ];

  const handleViewMore = (modalType: string) => {
    switch (modalType) {
      case "college":
        setIsCollegeModalOpen(true);
        break;
      case "intermediate":
        setIsIntermediateModalOpen(true);
        break;
      case "school":
        setIsSchoolModalOpen(true);
        break;
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
        </div>

        {/* My Journey - Full Width */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">My Journey</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-6 text-center">
              I'm passionate about building intelligent systems and crafting user-friendly websites. 
              With a strong academic record and hands-on project experience, I'm eager to contribute 
              to challenging technical environments.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              My expertise spans across machine learning, artificial intelligence, and frontend development. 
              I believe in continuous learning and staying updated with the latest technological advancements 
              to create innovative solutions.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16 animate-scale-in">
          <h3 className="text-2xl font-semibold mb-8 text-gray-800 text-center">Education</h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-600">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg text-gray-800">
                      {item.degree}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-purple-600 font-medium bg-purple-100 px-2 py-1 rounded">
                        {item.period}
                      </span>
                      <Button 
                        onClick={() => handleViewMore(item.modalType)}
                        variant="outline"
                        size="sm"
                        className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        View More
                      </Button>
                    </div>
                  </div>
                  <p className="text-purple-600 font-medium mb-2">{item.institution}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{item.grade}</span>
                    {item.status === 'current' && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modals */}
        <CollegeModal 
          isOpen={isCollegeModalOpen} 
          onClose={() => setIsCollegeModalOpen(false)} 
        />
        <IntermediateModal 
          isOpen={isIntermediateModalOpen} 
          onClose={() => setIsIntermediateModalOpen(false)} 
        />
        <SchoolModal 
          isOpen={isSchoolModalOpen} 
          onClose={() => setIsSchoolModalOpen(false)} 
        />
      </div>
    </section>
  );
};

export default About;
