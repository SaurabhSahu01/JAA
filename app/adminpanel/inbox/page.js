import React from 'react';
import Messages from '@/components/Admin/Messages';
import AdminLayout from '@/components/Admin/AdminLayout';

export const metadata = {
  title: 'Admin Inbox | JAA',
};

export default function MessagesPage() {
  return (
    <AdminLayout>
      <Messages />
    </AdminLayout>
  );
}
