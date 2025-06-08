import React, { useEffect } from 'react';
import useAuthStore from 'shared/store/useAuthStore';

const Dashboard = () => {
  const { login } = useAuthStore();

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (user) login(JSON.parse(user));
  }, [login]);

  const userDetails = JSON.parse(sessionStorage.getItem('user'));

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-background to-secondary-50 flex flex-col items-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center">
        <div className="w-28 h-28 rounded-full overflow-hidden shadow mb-4 border-4 border-primary-200">
          {userDetails?.picture ? (
            <img src={userDetails.picture} alt="User Avatar" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl bg-gray-100 text-gray-400">
              ?
            </div>
          )}
        </div>
        <h1 className="text-3xl font-bold text-primary-700 mb-2">Welcome, {userDetails?.name || 'User'}</h1>
        <p className="text-gray-600 mb-1 text-lg">{userDetails?.email || 'Not provided'}</p>
        <div className="flex flex-wrap gap-2 mt-2 mb-4">
          <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
            Google ID: {userDetails?.sub || 'N/A'}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${userDetails?.email_verified ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            Verified: {userDetails?.email_verified ? 'Yes' : 'No'}
          </span>
        </div>
        <button
          className="mt-8 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-semibold shadow"
          onClick={() => {
            sessionStorage.clear();
            window.location.reload();
          }}
        >
          Logout
        </button>
      </div>
      <div className="mt-10 w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4 text-primary-700">Your Account Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <span className="text-2xl mb-2">🛒</span>
            <span className="font-medium">Order History</span>
            <span className="text-xs text-gray-400 mt-1">Coming soon</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <span className="text-2xl mb-2">⭐</span>
            <span className="font-medium">Saved Items</span>
            <span className="text-xs text-gray-400 mt-1">Coming soon</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <span className="text-2xl mb-2">⚙️</span>
            <span className="font-medium">Account Settings</span>
            <span className="text-xs text-gray-400 mt-1">Coming soon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;