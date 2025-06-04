
const Languages = () => {
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Telugu", level: "Native" },
    { name: "Tamil", level: "Conversational" },
    { name: "Hindi", level: "Conversational" }
  ];

  return (
    <section id="languages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Languages Known
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((language, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in border border-purple-100"
              >
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {language.name}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium">
                    {language.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
