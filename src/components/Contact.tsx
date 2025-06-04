
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Sending email with EmailJS...");

    try {
      const result = await emailjs.send(
        'service_vuvzsdf', // Your service ID
        'template_pak9jsq', // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Vuppu Reddy Kalyan',
        },
        '7_Ocyhd61X7ncjo7r' // Your public key
      );

      console.log('Email sent successfully:', result);
      
      toast({
        title: "Success!",
        description: "Your message has been sent successfully. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    { label: "Email", value: "vuppureddykalyan@gmail.com", icon: "📧" },
    { label: "Phone", value: "6304474738", icon: "📞" }
  ];

  const socialLinks = [
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com/in/vuppureddykalyan", 
      icon: <Linkedin className="w-5 h-5" />
    },
    { 
      name: "GitHub", 
      url: "https://github.com/Kalyan31104", 
      icon: <Github className="w-5 h-5" />
    },
    { 
      name: "LeetCode", 
      url: "https://leetcode.com/u/Kalyan31104/", 
      icon: "💻"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's discuss how we can work together to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name" 
                    className="border-gray-300 focus:border-purple-600 focus:ring-purple-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com" 
                    className="border-gray-300 focus:border-purple-600 focus:ring-purple-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..." 
                    rows={5}
                    className="border-gray-300 focus:border-purple-600 focus:ring-purple-600"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-scale-in">
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <p className="font-medium text-gray-800">{info.label}</p>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Me</h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg hover:shadow-md transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="text-2xl mb-2">
                        {typeof link.icon === 'string' ? link.icon : link.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-700">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            © 2024 Vuppu Reddy Kalyan. Built with passion and dedication.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
