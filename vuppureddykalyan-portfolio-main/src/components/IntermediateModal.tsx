
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface IntermediateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const IntermediateModal = ({ isOpen, onClose }: IntermediateModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Intermediate Education - Detailed View
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
              Intermediate Summary
            </h3>
            <div className="space-y-3 ml-6">
              <p className="text-gray-600 leading-relaxed">
                Completed higher secondary education with a focus on core science and mathematics subjects including English, Sanskrit, Mathematics, Physics, and Chemistry.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Total Marks Scored: 920 out of 1000
              </p>
              <p className="text-gray-600 leading-relaxed">
                Percentage: 92%
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default IntermediateModal;
