
import LeetCodeStats from "./LeetCodeStats";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Python Internship Experience */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600"></div>
            
            <div className="flex items-start space-x-8 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                🐍
              </div>
              
              <div className="flex-1 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 border border-purple-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Python for Data Science Intern
                    </h3>
                    <p className="text-purple-600 font-semibold text-lg">NSIC</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Completed
                  </span>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Gained hands-on experience in data analysis, visualization, and basic ML model building. 
                  Worked with Python libraries including pandas, numpy, matplotlib, and scikit-learn to 
                  analyze real-world datasets and build predictive models.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Data Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Data Visualization</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">ML Model Building</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Python Programming</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Problem Solving Experience */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-red-500"></div>
            
            <div className="flex items-start space-x-8 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                🧠
              </div>
              
              <div className="flex-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Problem Solving Experience
                  </h3>
                  <p className="text-orange-600 font-semibold text-lg">LeetCode</p>
                  <p className="text-gray-600 mt-2">
                    Actively solving algorithmic problems to strengthen problem-solving skills and programming proficiency.
                  </p>
                </div>
                
                <LeetCodeStats />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
