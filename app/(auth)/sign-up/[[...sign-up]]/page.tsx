"use client"
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
            <SignUp appearance={{
                elements: {
                    rootBox: "bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-lg",
                    card: "bg-transparent shadow-none",
                }
            }} />
        </div>
    );
}