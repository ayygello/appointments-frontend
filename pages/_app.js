import NextNProgress from 'nextjs-progressbar';
import '../styles/main.scss';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <NextNProgress
        color='#29D'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
