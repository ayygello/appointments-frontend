import Head from 'next/head';
import Header from './Header';
import Menu from './Menu';

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
