import React, { PropsWithChildren } from 'react';
import { Header } from '@/components';
import Footer from '@/components/Footer';

type LayoutProps = PropsWithChildren<{}>;

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
    <Header/>
    <div className="container mx-auto">
        {children}
        </div>
    <Footer/>
    </>
    
  )
}

export default Layout