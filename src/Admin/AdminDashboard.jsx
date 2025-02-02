import React from 'react';
import { Building2, Users,  ChartLine, FileText} from 'lucide-react';
import "./AdminDashboard.css";
import SideBar from './SideBar';
const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <SideBar />
      <div className="dashboard-content">
        <h1 className="dashboard-title">Admin Dashboard</h1>

        <div className="modules">
          <div className="module">
            <Users size={40} className="module-icon" />
            <p>Manage Users</p>
          </div>
          <div className="module">
            <Building2 size={40} className="module-icon" />
            <p>Manage Agencies</p>
          </div>
          <div className="module">
            <ChartLine size={40} className="module-icon" />
            <p>Analytics</p>
          </div>
          <div className="module">
            <FileText size={40} className="module-icon" />
            <p>Manage Report</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
