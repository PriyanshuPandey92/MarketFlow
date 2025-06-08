import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import OAuthLogin from 'modules/user-account-dashboard-personal-experience/components/OAuthLogin';
import Dashboard from 'modules/user-account-dashboard-personal-experience/components/Dashboard'; // create this component
import useAuthStore from 'shared/store/useAuthStore';

const UserAccountDashboardPersonalExperience = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);


  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      {!isLoggedIn ? <OAuthLogin /> : <Dashboard />}
    </GoogleOAuthProvider>
  );
};

export default UserAccountDashboardPersonalExperience;
