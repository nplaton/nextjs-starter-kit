"use client"
import Link from 'next/link';
import * as React from "react";
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { UserProfile } from "../user-profile";
import ModeToggle from "../mode-toggle";
import { BlocksIcon, Menu } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import config from "@/config";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { Dialog, DialogClose } from "@radix-ui/react-dialog";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "List Your Facility",
        href: "/list-facility",
        description: "Add your storage facility to our platform.",
    },
    {
        title: "How It Works",
        href: "/how-it-works",
        description: "Learn about our booking process and services.",
    },
    {
        title: "Dashboard",
        href: "/dashboard",
        description: "Access your account dashboard.",
    },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    let userId = null;
    if (config?.auth?.enabled) {
        const { userId: clerkUserId } = useAuth();
        userId = clerkUserId;
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md dark:bg-black dark:bg-opacity-50' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold text-primary flex items-center">
                        <BlocksIcon className="mr-2" aria-hidden="true" />
                        LookLockers
                    </Link>
                    <nav className="hidden md:flex space-x-8">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            {components.map((component) => (
                                                <ListItem
                                                    key={component.title}
                                                    title={component.title}
                                                    href={component.href}
                                                >
                                                    {component.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/list-facility" legacyBehavior passHref>
                                        <NavigationMenuLink className="text-sm font-medium hover:text-primary transition-colors">
                                            List Your Facility
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/how-it-works" legacyBehavior passHref>
                                        <NavigationMenuLink className="text-sm font-medium hover:text-primary transition-colors">
                                            How It Works
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                {userId ? (
                                    <NavigationMenuItem>
                                        <Link href="/dashboard" legacyBehavior passHref>
                                            <NavigationMenuLink className="text-sm font-medium hover:text-primary transition-colors">
                                                Dashboard
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                ) : (
                                    <NavigationMenuItem>
                                        <Link href="/login" legacyBehavior passHref>
                                            <NavigationMenuLink className="text-sm font-medium hover:text-primary transition-colors">
                                                Log in
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                )}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>
                    <div className="flex items-center space-x-4">
                        {userId && <UserProfile />}
                        <ModeToggle />
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
                                    {components.map((component) => (
                                        <DialogClose key={component.title} asChild>
                                            <Link href={component.href}>
                                                <Button variant="ghost" className="w-full justify-start">
                                                    {component.title}
                                                </Button>
                                            </Link>
                                        </DialogClose>
                                    ))}
                                    {!userId && (
                                        <DialogClose asChild>
                                            <Link href="/login">
                                                <Button variant="outline" className="w-full">Log in</Button>
                                            </Link>
                                        </DialogClose>
                                    )}
                                </div>
                            </SheetContent>
                        </Dialog>
                    </div>
                </div>
            </div>
        </header>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
