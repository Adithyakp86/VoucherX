import { User, Star, TrendingUp, Award, Calendar, CheckCircle, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Profile() {
  const { profile } = useAuth();

  const stats = [
    { label: 'Total Trades', value: profile?.total_trades || 12, icon: TrendingUp, color: 'from-blue-500 to-blue-600' },
    { label: 'VoucherCoins', value: profile?.voucher_coins || 350, icon: Star, color: 'from-amber-500 to-amber-600' },
    { label: 'Rating', value: `${profile?.rating || 4.8}/5`, icon: Award, color: 'from-emerald-500 to-emerald-600' },
  ];

  const recentActivity = [
    {
      type: 'trade',
      description: 'Traded Netflix for Starbucks',
      date: '2025-10-07',
      status: 'completed',
    },
    {
      type: 'purchase',
      description: 'Bought Amazon voucher ($100)',
      date: '2025-10-05',
      status: 'completed',
    },
    {
      type: 'sale',
      description: 'Sold Spotify voucher ($30)',
      date: '2025-10-03',
      status: 'completed',
    },
    {
      type: 'trade',
      description: 'Traded Nike for Uber',
      date: '2025-10-01',
      status: 'completed',
    },
  ];

  const reviews = [
    {
      id: '1',
      from: 'John Doe',
      rating: 5,
      comment: 'Great trader! Fast and reliable. Highly recommended.',
      date: '2025-10-06',
    },
    {
      id: '2',
      from: 'Jane Smith',
      rating: 5,
      comment: 'Smooth transaction. Very trustworthy seller.',
      date: '2025-10-04',
    },
    {
      id: '3',
      from: 'Mike Johnson',
      rating: 4,
      comment: 'Good experience overall. Quick response time.',
      date: '2025-10-02',
    },
  ];

  const achievements = [
    { title: 'First Trade', unlocked: true, icon: '🎯' },
    { title: 'Power Trader', unlocked: true, icon: '⚡' },
    { title: 'Trusted Seller', unlocked: true, icon: '🛡️' },
    { title: 'Coin Master', unlocked: false, icon: '👑' },
    { title: 'Top Rated', unlocked: false, icon: '⭐' },
    { title: 'Category King', unlocked: false, icon: '🏆' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start space-x-6">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
              <User className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{profile?.full_name || 'User'}</h1>
              <div className="flex items-center space-x-4 mb-3">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(profile?.rating || 4.8) ? 'fill-amber-400 text-amber-400' : 'text-white/40'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white/90">{profile?.rating?.toFixed(1) || '4.8'} rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-white/80" />
                <span className="text-white/80 text-sm">Member since October 2025</span>
              </div>
            </div>
          </div>
          <button className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-slate-600">{stat.label}</span>
                <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-slate-800">{stat.value}</div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800">{activity.description}</p>
                  <p className="text-xs text-slate-500 mt-1">
                    {new Date(activity.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-xs font-semibold text-emerald-600 capitalize">
                  {activity.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Reviews & Ratings</h2>
          <div className="space-y-4">
            {reviews.map(review => (
              <div key={review.id} className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-800">{review.from}</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-2">{review.comment}</p>
                <p className="text-xs text-slate-500">{new Date(review.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl text-center transition-all ${
                achievement.unlocked
                  ? 'bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-400'
              }`}
            >
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <div className="text-xs font-semibold">{achievement.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Trading Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
            <div>
              <div className="font-medium text-slate-800">Email Notifications</div>
              <div className="text-sm text-slate-600">Receive updates about trades and matches</div>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gradient-to-r from-teal-500 to-blue-600">
              <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
            <div>
              <div className="font-medium text-slate-800">Auto-Accept Smart Matches</div>
              <div className="text-sm text-slate-600">Automatically accept trades above 90% match score</div>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-300">
              <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition" />
            </button>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
            <div>
              <div className="font-medium text-slate-800">Expiry Alerts</div>
              <div className="text-sm text-slate-600">Get notified 7 days before voucher expires</div>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gradient-to-r from-teal-500 to-blue-600">
              <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
