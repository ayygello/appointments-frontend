import Head from 'next/head';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} | Appvelox</title>
      </Head>
      <div className='wrapper'>
        <Menu />
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
