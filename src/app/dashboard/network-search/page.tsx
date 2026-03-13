'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Compass, ExternalLink, Video, FileText } from 'lucide-react'

export default function NetworkSearchPage() {
    const [searches, setSearches] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchSearches = async () => {
        setIsLoading(true)
        try {
            const { createClient } = await import('@/lib/supabase/client')
            const supabase = createClient()
            const { data: { user } } = await supabase.auth.getUser()

            if (user) {
                const { data, error } = await supabase
                    .from('network_search')
                    .select('*')
                    .eq('user_id', user.id)
                    .order('created_at', { ascending: false })

                if (!error && data) {
                    setSearches(data)
                }
            }
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchSearches()
    }, [])

    return (
        <div className="space-y-8 font-mono">
            <div className="flex items-center justify-between border-b border-[#FDE68A]/20 pb-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-[#FFF7CC] uppercase flex items-center gap-2">
                        <Compass className="h-6 w-6 text-[#FDE68A]" />
                        Network Search
                    </h2>
                    <p className="text-[#FDE68A]/80 mt-1">{'>'} mapping_related_entities...</p>
                </div>
            </div>

            {isLoading ? (
                <div className="text-[#FDE68A] animate-pulse">Scanning global networks...</div>
            ) : searches.length === 0 ? (
                <div className="text-[#FDE68A]/60 p-8 border border-[#FDE68A]/20 bg-[#111111]">[{'>'}] No network mappings found.</div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2">
                    {searches.map((search) => (
                        <Card key={search.id} className="bg-[#0A0A0A] border border-[#FDE68A]/30 rounded-none shadow-[0_0_15px_rgba(253,230,138,0.1)] hover:border-[#FDE68A]/50 transition-colors">
                            <CardHeader className="bg-[#FDE68A]/5 border-b border-[#FDE68A]/20 pb-3">
                                <CardTitle className="text-[#FFF7CC] text-xs tracking-widest uppercase truncate border-l-2 border-[#FDE68A] pl-2">
                                    {search.video_url}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="p-4 border-b border-[#FDE68A]/10 bg-[#111111]">
                                    <h3 className="text-[#FDE68A] text-[10px] tracking-widest uppercase mb-3 flex items-center gap-2">
                                        <Video className="w-3 h-3" /> Related Videos
                                    </h3>
                                    <div className="space-y-2">
                                        {(search.related_videos || []).map((v: any, i: number) => (
                                            <a key={i} href={v.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-[#FFF7CC]/80 hover:text-[#FDE68A] group">
                                                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                                                <span className="truncate">{v.title}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-4 bg-[#111111]">
                                    <h3 className="text-[#FDE68A] text-[10px] tracking-widest uppercase mb-3 flex items-center gap-2">
                                        <FileText className="w-3 h-3" /> Related Articles
                                    </h3>
                                    <div className="space-y-2">
                                        {(search.related_articles || []).map((a: any, i: number) => (
                                            <a key={i} href={a.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-[#FFF7CC]/80 hover:text-[#FDE68A] group">
                                                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                                                <span className="truncate">{a.title}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}
