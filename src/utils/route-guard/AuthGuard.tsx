import { useRouter } from 'next/router';
// project imports
// import useAuth from 'hooks/useAuth';
import { GuardProps } from 'types';
import { useEffect } from 'react';
import Loader from 'components/ui-component/Loader';
import { useSelector } from 'store';

// ==============================|| AUTH GUARD ||============================== //

/**
 * Authentication guard for routes
 * @param {PropTypes.node} children children element/node
 */
const AuthGuard = ({ children }: GuardProps) => {
  const user = useSelector(state => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (!user.isLoggedIn) {
      router.push('/auth/login');
    }
    // eslint-disable-next-line
  }, [user.isLoggedIn]);

  if (!user.isLoggedIn) return <Loader />;

  return children;
};

export default AuthGuard;
