
const Services = () => {
  const services = [
    {
      title: "Frontend Web Development",
      description: "Building responsive, user-friendly websites using HTML, CSS, and JavaScript with modern frameworks.",
      icon: "💻",
      features: ["Responsive Design", "Modern UI/UX", "Performance Optimization", "Cross-browser Compatibility"]
    },
    {
      title: "Machine Learning Solutions",
      description: "Designing ML models for classification, prediction, and automation using Python and advanced algorithms.",
      icon: "🤖",
      features: ["Data Analysis", "Model Development", "Algorithm Optimization", "Research Implementation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Services I Offer
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Combining technical expertise with creativity to deliver exceptional solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
            >
              <div className="text-6xl mb-6 text-center">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-center">
                {service.description}
              </p>
              
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
