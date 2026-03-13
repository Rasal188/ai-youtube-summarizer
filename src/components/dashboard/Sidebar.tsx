'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { LayoutDashboard, ListVideo, Bookmark, Settings, Compass, Terminal } from 'lucide-react'
import { SignOutButton } from '@/components/auth/SignOutButton'

const routes = [
    {
        label: 'System Dashboard',
        icon: LayoutDashboard,
        href: '/dashboard',
    },
    {
        label: 'Memory Logs',
        icon: ListVideo,
        href: '/dashboard/memory-logs',
    },
    {
        label: 'Extracted Data',
        icon: Bookmark,
        href: '/dashboard/extracted-data',
    },
    {
        label: 'Network Search',
        icon: Compass,
        href: '/dashboard/network-search',
    },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#0A0A0A] shadow-[4px_0_24px_rgba(253,230,138,0.05)] border-r border-[#FDE68A]/20 relative overflow-hidden">
            {/* Scanline subtle overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_51%)] bg-[length:100%_4px] opacity-10" />

            <div className="px-3 py-2 relative z-10">
                <Link href="/" className="flex items-center pl-3 mb-10 gap-2 group transition-all hover:scale-105 cursor-pointer hover:drop-shadow-[0_0_15px_#FDE68A]">
                    <div className="p-1.5 bg-[#FDE68A]/10 rounded-none border border-[#FDE68A]/50 group-hover:bg-[#FDE68A]/30 group-hover:shadow-[0_0_20px_rgba(253,230,138,0.8)] transition-all">
                        <Terminal className="w-5 h-5 text-[#FDE68A]" />
                    </div>
                    <h1 className="text-xl font-bold text-[#FFF7CC] tracking-widest uppercase font-mono group-hover:text-[#FDE68A] group-hover:text-shadow-[0_0_10px_#FDE68A] transition-all">
                        SummarAI
                    </h1>
                </Link>
                <div className="space-y-2">
                    {routes.map((route) => {
                        const isActive = pathname === route.href
                        return (
                            <Link
                                href={route.href}
                                key={route.href}
                                className={cn(
                                    "text-sm group flex p-3 w-full justify-start font-mono cursor-pointer transition-all duration-300 relative overflow-hidden border border-transparent",
                                    isActive
                                        ? "text-[#FDE68A] bg-[#FDE68A]/10 shadow-[inset_0_0_15px_rgba(253,230,138,0.1)] border-[#FDE68A]/30"
                                        : "text-[#FDE68A] hover:text-[#FDE68A] hover:bg-[#FDE68A]/5 hover:border-[#FDE68A]/10"
                                )}
                            >
                                {isActive && (
                                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#FDE68A] shadow-[0_0_10px_#FDE68A]" />
                                )}
                                <div className="flex items-center flex-1 relative z-10 pl-2">
                                    <route.icon className={cn(
                                        "h-4 w-4 mr-3 transition-colors",
                                        isActive ? "text-[#FDE68A]" : "text-[#FDE68A] group-hover:text-[#FDE68A]"
                                    )} />
                                    {route.label}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className="mt-auto px-3 py-4 border-t border-[#FDE68A]/10 relative z-10 bg-[#FDE68A]/5">
                <SignOutButton />
            </div>
        </div>
    )
}
