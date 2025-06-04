
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LeetCodeStats {
  username: string;
  ranking: number;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
}

const LeetCodeStats = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        setLoading(true);
        // Using a public API to fetch LeetCode stats
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/Kalyan31104');
        
        if (!response.ok) {
          throw new Error('Failed to fetch LeetCode stats');
        }
        
        const data = await response.json();
        
        setStats({
          username: 'Kalyan31104',
          ranking: data.ranking || 0,
          totalSolved: data.totalSolved || 0,
          totalQuestions: data.totalQuestions || 3571,
          easySolved: data.easySolved || 0,
          mediumSolved: data.mediumSolved || 0,
          hardSolved: data.hardSolved || 0,
          acceptanceRate: data.acceptanceRate || 0
        });
      } catch (err) {
        console.error('Error fetching LeetCode stats:', err);
        setError('Unable to fetch LeetCode statistics');
        // Fallback data for demo purposes
        setStats({
          username: 'Kalyan31104',
          ranking: 0,
          totalSolved: 0,
          totalQuestions: 3571,
          easySolved: 0,
          mediumSolved: 0,
          hardSolved: 0,
          acceptanceRate: 0
        });
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  if (loading) {
    return (
      <Card className="bg-gray-900 border-gray-700 text-white">
        <CardContent className="p-6">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-700 rounded mb-4"></div>
            <div className="h-4 bg-gray-700 rounded mb-2"></div>
            <div className="h-4 bg-gray-700 rounded"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error || !stats) {
    return (
      <Card className="bg-gray-900 border-gray-700 text-white">
        <CardContent className="p-6">
          <div className="text-center">
            <p className="text-red-400 mb-2">⚠️ {error || 'Failed to load stats'}</p>
            <p className="text-gray-400 text-sm">
              Visit my profile: <a href="https://leetcode.com/u/Kalyan31104/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">leetcode.com/u/Kalyan31104</a>
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gray-900 border-gray-700 text-white hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">LC</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{stats.username}</h3>
              {stats.ranking > 0 && (
                <p className="text-gray-400 text-sm">Global Rank: #{stats.ranking.toLocaleString()}</p>
              )}
            </div>
          </div>
          <a 
            href="https://leetcode.com/u/Kalyan31104/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm hover:underline"
          >
            View Profile →
          </a>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Total Problems Solved */}
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-300">Total Solved</span>
            <span className="text-white font-semibold">{stats.totalSolved}/{stats.totalQuestions}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(stats.totalSolved / stats.totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Difficulty Breakdown */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-green-400 font-bold text-lg">{stats.easySolved}</div>
            <div className="text-gray-400 text-sm">Easy</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-yellow-400 font-bold text-lg">{stats.mediumSolved}</div>
            <div className="text-gray-400 text-sm">Medium</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-red-400 font-bold text-lg">{stats.hardSolved}</div>
            <div className="text-gray-400 text-sm">Hard</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeetCodeStats;
