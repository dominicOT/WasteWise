import React from 'react';
import profile from "../assets/home-avatar.jpeg"
import { Building2, Users,  ChartLine, FileText} from 'lucide-react';
import SideBar from './SideBar';
import './AgencyOptions.css';


const AgencyDashboard = () => {
  return (
    <div className="dashboard-container">
      <SideBar />
      <div className="dashboard-content">
        <h1 className="dashboard-title">Agency Dashboard</h1>

        <div className="modules">
          <div className="module">
            <Users size={40} className="module-icon" />
            <p>Reports</p>
          </div>
          <div className="module">
            <Building2 size={40} className="module-icon" />
            <p>Collected Wastes</p>
          </div>
          <div className="module">
            <ChartLine size={40} className="module-icon" />
            <p>Pending Wastes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyDashboard;