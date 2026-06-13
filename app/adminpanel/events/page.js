import React from 'react';
import Events from '@/components/Admin/Events';
import AdminLayout from '@/components/Admin/AdminLayout';

export const metadata = {
  title: 'Admin Events | JAA',
};

export default function EventsPage() {
  return (
    <AdminLayout>
      <Events />
    </AdminLayout>
  );
}
