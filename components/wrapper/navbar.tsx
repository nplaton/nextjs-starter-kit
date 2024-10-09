"use client"
import Link from 'next/link';
import * as React from "react";
import { useState, useEffect } from 'react';
import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { BlocksIcon, Menu, User, PlusCircle } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { Dialog, DialogClose } from "@radix-ui/react-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

interface NavbarProps {
    isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
    const [isClient, setIsClient] = useState(false)
    const { isSignedIn, user } = useUser();
    const { signOut } = useClerk();
    const router = useRouter();

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) {
        return null // or a loading placeholder
    }

    const handleSignOut = async () => {
        await signOut();
        router.push('/'); // Redirect to home page after sign out
    };

    return (
        <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-primary flex items-center">
                    <BlocksIcon className="mr-2" aria-hidden="true" />
                    LookLockers
                </Link>
                <div className="flex items-center space-x-4">
                    <Button variant="default" size="lg" className="hidden md:flex items-center" asChild>
                        <Link href="/list-facility">
                            <PlusCircle className="mr-2 h-4 w-4" /> List Your Facility
                        </Link>
                    </Button>
                    {isSignedIn ? (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={user?.imageUrl} alt={user?.username || "User"} />
                                        <AvatarFallback>{user?.username?.[0] || "U"}</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-56" align="end" forceMount>
                                <div className="grid gap-4">
                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-10 w-10">
                                            <AvatarImage src={user?.imageUrl} alt={user?.username || "User"} />
                                            <AvatarFallback>{user?.username?.[0] || "U"}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-sm font-medium">{user?.username}</p>
                                            <p className="text-xs text-muted-foreground">{user?.primaryEmailAddress?.emailAddress}</p>
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        <Button variant="ghost" className="w-full justify-start" asChild>
                                            <Link href="/user-profile">Profile</Link>
                                        </Button>
                                        <Button variant="ghost" className="w-full justify-start" asChild>
                                            <Link href="/settings">Settings</Link>
                                        </Button>
                                        <Button variant="ghost" className="w-full justify-start" onClick={handleSignOut}>
                                            Sign out
                                        </Button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    ) : (
                        <Button variant="outline" asChild>
                            <Link href="/sign-in">
                                <User className="mr-2 h-4 w-4" /> Sign in
                            </Link>
                        </Button>
                    )}
                    <Dialog>
                        <SheetTrigger className="md:hidden">
                            <Button variant="ghost" size="icon" aria-label="Open menu">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col space-y-4 mt-4">
                                <DialogClose asChild>
                                    <Link href="/list-facility">
                                        <Button variant="default" className="w-full justify-start">
                                            <PlusCircle className="mr-2 h-4 w-4" /> List Your Facility
                                        </Button>
                                    </Link>
                                </DialogClose>
                                {!isSignedIn && (
                                    <DialogClose asChild>
                                        <Link href="/sign-in">
                                            <Button variant="outline" className="w-full">
                                                <User className="mr-2 h-4 w-4" /> Sign in
                                            </Button>
                                        </Link>
                                    </DialogClose>
                                )}
                            </div>
                        </SheetContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}
