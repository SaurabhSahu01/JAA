'use client';

import React, { use } from 'react';
import AdminLayout from "@/components/Admin/AdminLayout";
import Verify from "@/components/Admin/Users/Verify";

export default function VerifyPage({ params }) {
  const resolvedParams = use(params);
  const userid = resolvedParams.userid;

  return (
    <AdminLayout>
      <Verify userid={userid} />
    </AdminLayout>
  );
}
