
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface WineProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WineProjectModal = ({ isOpen, onClose }: WineProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Wine Quality Prediction using MCNN and MLP
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-100">
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                This project focuses on predicting the quality of wine using a synthetic dataset created by our team. 
                We implemented a hybrid deep learning approach combining Multi-Channel Convolutional Neural Network (MCNN) 
                and Multi-Layer Perceptron (MLP) to enhance prediction accuracy.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                The MCNN model extracts features through convolutional layers and divides them into two distinct 
                channels to generate an intermediate prediction.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                This intermediate output is passed to the MLP model, which refines and predicts the final wine quality score.
              </p>
              
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-3 text-lg">Results Achieved:</h4>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <ul className="space-y-2">
                    <li className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Red Wine Accuracy: 87.6%
                    </li>
                    <li className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      White Wine Accuracy: 90.0%
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-3 text-lg">Published Journal:</h4>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <p className="text-gray-600">
                    Available at REST Journal on Data Analytics and Artificial Intelligence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default WineProjectModal;
