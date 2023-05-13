import { useEffect } from 'react';
import { useRouter } from 'next/router';

// project imports
import useAuth from 'hooks/useAuth';
import { DASHBOARD_PATH } from 'config';
import { GuardProps } from 'types';
import Loader from 'components/ui-component/Loader';
import useConfig from 'hooks/useConfig';

// ==============================|| GUEST GUARD ||============================== //

/**
 * Guest guard for routes having no auth required
 * @param {PropTypes.node} children children element/node
 */

const GuestGuard = ({ children }: GuardProps) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const { onChangeMenuType } = useConfig();
  useEffect(() => {
    onChangeMenuType('dark');
    if (isLoggedIn) {
      router.push(DASHBOARD_PATH);
    }
    // eslint-disable-next-line
  }, [isLoggedIn]);

  if (isLoggedIn) return <Loader />;

  return children;
};

export default GuestGuard;
