import React, { PropsWithChildren } from 'react';
import { Header } from '@/components';
import Footer from '@/components/Footer';

type LayoutProps = PropsWithChildren<{}>;

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="flex-grow container px-4 sm:px-6 lg:px-8 m-20">
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;