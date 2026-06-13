import React from 'react';
import Users from '@/components/Admin/Users';
import AdminLayout from '@/components/Admin/AdminLayout';

export const metadata = {
  title: 'Admin Users | JAA',
};

export default function UsersPage() {
  return (
    <AdminLayout>
      <Users />
    </AdminLayout>
  );
}
