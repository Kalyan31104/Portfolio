
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MedicinalProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MedicinalProjectModal = ({ isOpen, onClose }: MedicinalProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Medicinal Plant Image Classification using CNN and ViT
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-100">
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                This project aims to classify medicinal plants based on leaf images using a deep learning hybrid model. 
                We utilized a publicly available dataset from Hugging Face, consisting of 6,000 images across 40 different 
                medicinal plant species.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                A Convolutional Neural Network (CNN) is used for feature extraction, capturing low-level features such as 
                edges and textures from the input images.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                These extracted features are then passed to a Vision Transformer (ViT) model, which captures global and 
                high-level features.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                We used a pretrained ViT model from Hugging Face to enhance performance and accuracy in classification.
              </p>
              
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-3 text-lg">Results Achieved:</h4>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <p className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Overall Classification Accuracy: 95%
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <p className="text-gray-600 leading-relaxed">
                    This hybrid approach of combining CNN and ViT enables effective learning of both local and global features, 
                    leading to high accuracy in medicinal plant identification.
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

export default MedicinalProjectModal;
