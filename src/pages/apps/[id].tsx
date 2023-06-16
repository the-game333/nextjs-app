import FooterPage from 'components/landingpage/Footer';
import React from 'react';
import AppBar from 'ui-component/extended/AppBar';

const Apps = ({ params }: { params: { id: string } }) => {
  // console.log(params.id)
  return (
  <div>
    <AppBar />

    <FooterPage />
  </div>
  );
};

export default Apps;