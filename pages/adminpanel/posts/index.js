import React from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import AdminPosts from '@/components/admin/adminPosts'

function PostsPage() {
  return (
    <AdminLayout title="Posts">
      <AdminPosts />
    </AdminLayout>
  )
}

export default PostsPage