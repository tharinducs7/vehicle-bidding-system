import React, { PropsWithChildren } from 'react';
import { Header } from '@/components';

type LayoutProps = PropsWithChildren<{}>;

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container mx-auto px-4">
    <Header/>
        {children}
    <div>Footer</div>
    </div>
    
  )
}

export default Layout