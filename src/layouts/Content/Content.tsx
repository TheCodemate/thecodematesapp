import { Route, Routes } from 'react-router';
import { Home } from '@pages/Home/Home';
import { PrivacyPolicy } from '@pages/PrivacyPolicy/PrivacyPolicy';
import { TermsOfService } from '@pages/TermsOfService/TermsOfService';
import { NotFound } from '@pages/NotFoundPage/NotFoundPage';

type Props = {
  toggleModalHandler: () => void;
};

export const Content = ({ toggleModalHandler }: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Home toggleModalHandler={toggleModalHandler} />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  // <Home toggleModalHandler={toggleModalHandler} />;
};
