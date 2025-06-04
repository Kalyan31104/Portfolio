
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CollegeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CollegeModal = ({ isOpen, onClose }: CollegeModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            College Education - Detailed View
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3"></div>
              College Summary
            </h3>
            <div className="space-y-3 ml-6">
              <p className="text-gray-600 leading-relaxed">
                Currently pursuing core concepts in Machine Learning, with a strong foundation in key algorithms such as Regression, Classification, and Deep Learning techniques including Convolutional Neural Networks (CNN) and Multi-Layer Perceptrons (MLP). Experienced in solving real-world problems using classification and regression models.
              </p>
              <p className="text-gray-600 leading-relaxed">
                CGPA: 8.97 (till date)
              </p>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800 mb-2">Awards & Achievements:</h4>
                <ul className="space-y-2">
                  <li className="text-gray-600 leading-relaxed flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Vel Ratna Award: Honored for securing the highest GPA in my branch during the 4th semester examinations.
                  </li>
                  <li className="text-gray-600 leading-relaxed flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Second Prize – Science Quiz Competition: Won ₹600 cash prize at Vel Tech High Tech for outstanding performance.
                  </li>
                  <li className="text-gray-600 leading-relaxed flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Coding Practice: Solved 100+ problems on LeetCode, strengthening algorithmic and problem-solving skills.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default CollegeModal;
