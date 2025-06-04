
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Tools",
      skills: ["Python", "Java", "MySQL", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Frameworks & Technologies",
      skills: ["Machine Learning", "Frontend Development", "React", "Data Science"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 text-center"
                  >
                    <div className="text-2xl mb-2">
                      {skill === "Python" && "🐍"}
                      {skill === "Java" && "☕"}
                      {skill === "MySQL" && "🗄️"}
                      {skill === "HTML" && "🌐"}
                      {skill === "CSS" && "🎨"}
                      {skill === "JavaScript" && "⚡"}
                      {skill === "Machine Learning" && "🤖"}
                      {skill === "Frontend Development" && "💻"}
                      {skill === "React" && "⚛️"}
                      {skill === "Data Science" && "📊"}
                    </div>
                    <p className="font-medium text-gray-700">{skill}</p>
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

export default Skills;
