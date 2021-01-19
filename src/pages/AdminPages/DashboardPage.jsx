import React from 'react';
import { MDBRow } from 'mdbreact';
import AdminCardSection1 from '../../../components/Admin/AdminComponents/sections/AdminCardSection1';
import AdminCardSection2 from '../../../components/Admin/AdminComponents/sections/AdminCardSection2';
import TableSection from '../../../components/Admin/AdminComponents/sections/TableSection';
import BreadcrumSection from '../../../components/Admin/AdminComponents/sections/BreadcrumSection';
import ChartSection1 from '../../../components/Admin/AdminComponents/sections/ChartSection1';
import ChartSection2 from '../../../components/Admin/AdminComponents/sections/ChartSection2';
import MapSection from '../../../components/Admin/AdminComponents/sections/MapSection';
import ModalSection from '../../../components/Admin/AdminComponents/sections/ModalSection';

const DashboardPage =  () => {
  return (
    <React.Fragment>
      {/* <BreadcrumSection />
      <AdminCardSection1 />
      <ChartSection1 />
      <TableSection />
      <ChartSection2 />
      <MDBRow className="mb-4">
          <MapSection />
          <ModalSection />
      </MDBRow>
      <AdminCardSection2 /> */}
    </React.Fragment>
  )
}

export default DashboardPage;