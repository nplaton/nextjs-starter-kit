import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
            <SignIn appearance={{
                elements: {
                    rootBox: "bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-lg",
                    card: "bg-transparent shadow-none",
                }
            }} />
        </div>
    );
}