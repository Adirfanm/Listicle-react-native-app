import React, { useEffect, useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './Routes';

export const UserContext = React.createContext();
export const ProfileContext = React.createContext();
export const ServicesContext = React.createContext([]);

const App = () => {
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();
  const [services, setServices] = useState();

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, []);

  return (
    <SafeAreaProvider>
      <UserContext.Provider value={{ user, setUser }}>
        <ProfileContext.Provider value={{ profile, setProfile }} >
          <ServicesContext.Provider value={{ services, setServices }}>
            <Routes />
          </ServicesContext.Provider>
        </ProfileContext.Provider >
      </UserContext.Provider>
    </SafeAreaProvider >
  );
};

export default App;
