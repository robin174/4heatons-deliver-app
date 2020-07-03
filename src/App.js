import React, { useEffect } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { CalloutCard, CookieNotice, } from './components/Cards';
import { Container } from './components/Layout';
import { HeroHeader, Nav } from './components/Headers';
import { LoadingSpinner } from './components/Helpers';
import { CustomForm } from './components/Forms';


// Code Splitting
const LocationList = React.lazy(() => import('./components/Locations').then(module => ({ default: module.LocationList })));
const Modal = React.lazy(() => import('./components/Modal').then(module => ({ default: module.Modal })));

// Mailchimp
const url = 'https://gmail.us10.list-manage.com/subscribe/post?u=a0065b2712b7e55873bc22a4b&amp;id=eb3b219f3a';



const App = () => {
  return (
    <>
      <Nav />
      <HeroHeader />
      <React.Suspense fallback={<LoadingSpinner fixed={true} />}>
        <LocationList />
        <Modal />
      </React.Suspense>
      <Container style={{ paddingBottom: '6rem' }}>
        <CalloutCard id="stay-informed">
          <h2>Stay informed</h2>
          <p>Sign up for occasional emails from 4 Heatons Deliver.</p>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
            )}
          />
        </CalloutCard>
        <ToastContainer />
        <CookieNotice />
      </Container>
    </>
  )
}

export default App;
