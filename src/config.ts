// types
import { ConfigProps } from './types/config';

export const JWT_API = {
  secret: 'SECRET-KEY',
  timeout: '1 days'
};

export const FIREBASE_API = {
  apiKey: 'AIzaSyBernKzdSojh_vWXBHt0aRhf5SC9VLChbM',
  authDomain: 'berry-material-react.firebaseapp.com',
  projectId: 'berry-material-react',
  storageBucket: 'berry-material-react.appspot.com',
  messagingSenderId: '901111229354',
  appId: '1:901111229354:web:a5ae5aa95486297d69d9d3',
  measurementId: 'G-MGJHSL8XW3'
};

export const AUTH0_API = {
  client_id: '7T4IlWis4DKHSbG8JAye4Ipk0rvXkH9V',
  domain: 'dev-w0-vxep3.us.auth0.com'
};

export const AWS_API = {
  poolId: 'us-east-1_AOfOTXLvD',
  appClientId: '3eau2osduslvb7vks3vsh9t7b0'
};
const urls = {
  SERVER_URL: process.env.NODE_ENV === 'development' ? 'http://localhost:2000' : 'https://'
};

export const BASE_URL = urls.SERVER_URL;

// basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
// like '/berry-material-react/react/default'
export const BASE_PATH = '';

export const DASHBOARD_PATH = '/dashboard';

export const HOME_PATH = '/';

const config: ConfigProps = {
  fontFamily: `'Sansita', 'Poppins', sans-serif`,
  borderRadius: 8,
  outlinedFilled: true,
  navType: 'light', // light, dark
  presetColor: 'default', // default, theme1, theme2, theme3, theme4, theme5, theme6
  locale: 'en', // 'en' - English, 'fr' - French, 'ro' - Romanian, 'zh' - Chinese
  rtlLayout: false
};

export default config;
