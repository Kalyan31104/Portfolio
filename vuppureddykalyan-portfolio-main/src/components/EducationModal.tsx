
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface EducationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EducationModal = ({ isOpen, onClose }: EducationModalProps) => {
  const educationDetails = {
    college: {
      title: "College Summary",
      content: [
        "Currently pursuing core concepts in Machine Learning, with a strong foundation in key algorithms such as Regression, Classification, and Deep Learning techniques including Convolutional Neural Networks (CNN) and Multi-Layer Perceptrons (MLP). Experienced in solving real-world problems using classification and regression models.",
        "CGPA: 8.97 (till date)"
      ],
      achievements: [
        "Vel Ratna Award: Honored for securing the highest GPA in my branch during the 4th semester examinations.",
        "Second Prize – Science Quiz Competition: Won ₹600 cash prize at Vel Tech High Tech for outstanding performance.",
        "Coding Practice: Solved 100+ problems on LeetCode, strengthening algorithmic and problem-solving skills."
      ]
    },
    intermediate: {
      title: "Intermediate Summary",
      content: [
        "Completed higher secondary education with a focus on core science and mathematics subjects including English, Sanskrit, Mathematics, Physics, and Chemistry.",
        "Total Marks Scored: 920 out of 1000",
        "Percentage: 92%"
      ]
    },
    school: {
      title: "School Summary",
      content: [
        "Completed secondary education with a strong academic record, studying core subjects including Telugu, Hindi, English, Mathematics, General Science, and Social Studies.",
        "Total Marks Scored: 556 out of 600",
        "Percentage: 92.6%"
      ]
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Educational Journey - Detailed View
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-8">
            {/* College Details */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3"></div>
                {educationDetails.college.title}
              </h3>
              <div className="space-y-3 ml-6">
                {educationDetails.college.content.map((item, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">{item}</p>
                ))}
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Awards & Achievements:</h4>
                  <ul className="space-y-2">
                    {educationDetails.college.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-600 leading-relaxed flex items-start">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Intermediate Details */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                {educationDetails.intermediate.title}
              </h3>
              <div className="space-y-3 ml-6">
                {educationDetails.intermediate.content.map((item, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">{item}</p>
                ))}
              </div>
            </div>

            {/* School Details */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                {educationDetails.school.title}
              </h3>
              <div className="space-y-3 ml-6">
                {educationDetails.school.content.map((item, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">{item}</p>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default EducationModal;
