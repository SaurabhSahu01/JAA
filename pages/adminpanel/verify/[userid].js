import AdminLayout from "@/components/Admin/AdminLayout";
import { useRouter } from "next/router";
import Verify from "@/components/Admin/Users/Verify";
export default function VerifyPage(){
    const router = useRouter();
    return(
        <AdminLayout title={`${router.query.userid}`}>
           <Verify userid={router.query.userid}/>
        </AdminLayout>
    )
}