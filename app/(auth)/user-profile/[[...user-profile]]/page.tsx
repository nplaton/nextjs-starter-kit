"use client"
import PageWrapper from "@/components/wrapper/page-wrapper";
import config from "@/config";
import { UserProfile } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function UserProfilePage() {
    const router = useRouter()

    if (!config?.auth?.enabled) {
        router.back()
    }
    return (
        <PageWrapper >
            <div className="h-full flex items-center justify-center p-9">
                {config?.auth?.enabled && <UserProfile path="/user-profile" routing="path" />}
            </div>
        </PageWrapper>
    )
}