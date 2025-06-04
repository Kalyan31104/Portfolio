
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ResumeProps {
  buttonText?: string;
  buttonVariant?: "default" | "outline";
  size?: "sm" | "default" | "lg";
}

const Resume = ({ 
  buttonText = "Download Resume",
  buttonVariant = "default",
  size = "default"
}: ResumeProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      
      // GitHub raw file URL for the PDF
      const githubRawUrl = 'https://raw.githubusercontent.com/Kalyan31104/Resume/main/VUPPUREDDYKALYAN_RESUME.pdf';
      
      // Fetch the PDF file
      const response = await fetch(githubRawUrl);
      
      if (!response.ok) {
        throw new Error('Failed to fetch resume');
      }
      
      // Get the file as a blob
      const blob = await response.blob();
      
      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Vuppu_Reddy_Kalyan_Resume.pdf';
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast({
        title: "Resume Downloaded Successfully",
        description: "Thank you for downloading my resume!",
      });
      
    } catch (error) {
      console.error('Error downloading resume:', error);
      
      // Fallback: open GitHub repository if direct download fails
      window.open('https://github.com/Kalyan31104/Resume', '_blank');
      
      toast({
        title: "Download Issue",
        description: "Redirected to GitHub repository. Please download the PDF manually.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button 
      onClick={handleDownload}
      disabled={isDownloading}
      variant={buttonVariant}
      size={size}
      className={buttonVariant === "default" ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" : ""}
    >
      <Download className="w-4 h-4 mr-2" />
      {isDownloading ? "Downloading..." : buttonText}
    </Button>
  );
};

export default Resume;
