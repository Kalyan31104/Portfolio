
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SchoolModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SchoolModal = ({ isOpen, onClose }: SchoolModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            School Education - Detailed View
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
              School Summary
            </h3>
            <div className="space-y-3 ml-6">
              <p className="text-gray-600 leading-relaxed">
                Completed secondary education with a strong academic record, studying core subjects including Telugu, Hindi, English, Mathematics, General Science, and Social Studies.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Total Marks Scored: 556 out of 600
              </p>
              <p className="text-gray-600 leading-relaxed">
                Percentage: 92.6%
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default SchoolModal;
