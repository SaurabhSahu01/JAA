import React from 'react'
import AdminLayout from '@/components/Admin/AdminLayout'
import Dashboard from '@/components/Admin/Dashboard'

function AdminDashboard() {
  return (
    <AdminLayout title="Dashboard">
      <Dashboard/>
    </AdminLayout>
  )
}

export default AdminDashboard