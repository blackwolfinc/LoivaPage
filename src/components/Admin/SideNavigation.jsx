import React from 'react';
import logo from "../../assets/AdminAssets/img/admin.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import '../../pages/AdminPages/Admin.css'
export const SideNavigation = () => {
    return (
        
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" className="img-fluid" src={logo}/>
            </a>
            <MDBListGroup className="list-group-flush">
                <NavLink className="a-khusus" exact={true} to="/admin/home" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3"/>
                        <h5 className="btn-Khusus">Dashboard</h5>
                    </MDBListGroupItem>
                </NavLink>
                <NavLink  className="a-khusus" to="/admin/profil" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        <h5  className="btn-Khusus">Profile</h5>
                    </MDBListGroupItem>
                </NavLink>
                <NavLink className="a-khusus"   to="/admin/tabel" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                       
                        <h5  className="btn-Khusus">Tables</h5>
                    </MDBListGroupItem>
                </NavLink>
                <NavLink className="a-khusus"  to="/admin/maps" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="map" className="mr-3"/>
                        <h5  className="btn-Khusus">Maps</h5>
                    </MDBListGroupItem>
                </NavLink>
                <NavLink className="a-khusus"  to="/admin/404" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="exclamation" className="mr-3"/>
                        <h5  className="btn-Khusus">404</h5>
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
}

 