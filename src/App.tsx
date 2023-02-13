import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Loader from './components/Loader';
const BasicView = lazy(() => import('./Views/BasicView/BasicView'));

const styles = {
  Container: {
    background: 'linear-gradient(90deg, #69b7eb, #b3dbd3, #f4d6db)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    pt: '20px',
  },
};

export const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Container maxWidth="xl" sx={{ pt: 4, pb: 4 }} style={styles.Container}>
        <Routes>
          <Route path="/" element={<BasicView />} />
        </Routes>
      </Container>
    </Suspense>
  );
};
