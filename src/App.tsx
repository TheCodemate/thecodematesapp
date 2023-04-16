import { Layout } from '@layouts/Layout/Layout';
import { Route, Routes } from 'react-router';
import { Home } from './pages/Home/Home';
import { TermsOfService } from './pages/TermsOfService/TermsOfService';
import { PrivacyPolicy } from './pages/PrivacyPolicy/PrivacyPolicy';
import { NotFound } from './pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
