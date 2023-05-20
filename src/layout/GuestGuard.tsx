import { FC } from 'react';
// project imports
import Customization from './Customization';
import GuestGuard from 'utils/route-guard/GuestGuard';
import NavMotion from './NavMotion';
import { useDispatch, useSelector } from 'store';
// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout: FC = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);
  console.log(user, "::::user");
  return (
    <NavMotion>
      <GuestGuard>
        <>
          {children}
          <Customization />
        </>
      </GuestGuard>
    </NavMotion>
  )
};

export default MinimalLayout;
