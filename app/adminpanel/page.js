import React from 'react';
import AdminLayout from '@/components/Admin/AdminLayout';
import Dashboard from '@/components/Admin/Dashboard';

export const metadata = {
  title: 'Admin Dashboard | JAA',
};

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <Dashboard />
    </AdminLayout>
  );
}
