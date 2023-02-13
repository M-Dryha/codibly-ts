import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Loader from './components/Loader';
const BasicView = lazy(() => import('./Views/BasicView/BasicView'));

export const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Container maxWidth="xl" sx={{ pt: 4, pb: 4 }}>
        <Routes>
          <Route path="/" element={<BasicView />} />
        </Routes>
      </Container>
    </Suspense>
  );
};
