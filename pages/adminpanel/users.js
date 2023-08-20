import React from 'react'
import Users from '@/components/admin/users/Users'
import AdminLayout from '@/components/admin/AdminLayout'

function users() {
  return (
    <AdminLayout title="Users">
        <Users/>
    </AdminLayout>
  )
}

export default users