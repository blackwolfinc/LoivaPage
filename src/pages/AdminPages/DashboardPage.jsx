import React from 'react';
import { AdminCardSection1 } from '../../components/Admin/sections/AdminCardSection1';
import { AdminCardSection2 } from '../../components/Admin/sections/AdminCardSection2';
import { BreadcrumSection } from '../../components/Admin/sections/BreadcrumSection';
import { ChartSection2 } from '../../components/Admin/sections/ChartSection2';
import { MapSection } from '../../components/Admin/sections/MapSection';
import { ModalSection } from '../../components/Admin/sections/ModalSection';
import { TableSection } from '../../components/Admin/sections/TableSection';
import { MDBRow } from 'mdbreact';
import { Footer } from '../../components/Admin/Footer';
import { TopNavigation } from '../../components/Admin/TopNavigation';
import { SideNavigation } from '../../components/Admin/SideNavigation';

export const DashboardPage =  () => {
  return (

    
    <React.Fragment>
     
      <div className="flexible-content">
      <TopNavigation/>
      <SideNavigation/>
          <main id="content" className="p-5">
          <BreadcrumSection/>
      <AdminCardSection1/>
      <TableSection/>
      <ChartSection2/>
      <MDBRow className="mb-4">
        <MapSection/>
        <ModalSection/>
      </MDBRow>
      <AdminCardSection2/>
          </main>
          <Footer/>
        </div>
     
      
     
    </React.Fragment>
  )
}

  