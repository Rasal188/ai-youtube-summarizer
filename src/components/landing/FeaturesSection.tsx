'use client'

import { motion } from 'framer-motion'
import { FileText, Clock, Zap, ListChecks, Download, Share2 } from 'lucide-react'

const features = [
    {
        name: 'Instant Summaries',
        description: 'Get a concise, highly accurate paragraph summarizing the core message of any video in seconds.',
        icon: Zap,
    },
    {
        name: 'Key Takeaways',
        description: 'Automatically extract the most important bullet points so you never miss a crucial detail.',
        icon: ListChecks,
    },
    {
        name: 'Timestamp Highlights',
        description: 'Jump directly to the most interesting parts of the video with clickable timestamp references.',
        icon: Clock,
    },
    {
        name: 'Detailed Notes',
        description: 'Generate well-structured markdown notes ready to be exported to Notion, Obsidian, or Word.',
        icon: FileText,
    },
    {
        name: 'Export Anywhere',
        description: 'Download your summaries as PDF, Markdown, or copy them directly to your clipboard.',
        icon: Download,
    },
    {
        name: 'Save & Organize',
        description: 'Keep all your video summaries in one secure dashboard. Never lose a great insight again.',
        icon: Share2,
    },
]

export function FeaturesSection() {
    return (
        <section className="py-24 bg-transparent relative z-10">
            <div className="container">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-[#FFF7CC] uppercase tracking-widest">
                        System Modules
                    </h2>
                    <p className="mt-4 text-lg text-[#FDE68A]">
                        SummarAI extracts the noise and gives you exactly what you need to know from any video stream.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex flex-col p-6 bg-[#111111]/80 backdrop-blur-md rounded-none border border-[#FDE68A]/20 shadow-sm hover:shadow-[0_0_20px_rgba(253,230,138,0.2)] hover:border-[#FDE68A]/50 transition-all group"
                        >
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#FDE68A]" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#FDE68A]" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#FDE68A]" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#FDE68A]" />

                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-none bg-[#FDE68A]/10 group-hover:bg-[#FDE68A]/20 transition-colors border border-[#FDE68A]/30">
                                <feature.icon className="h-6 w-6 text-[#FDE68A]" aria-hidden="true" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-[#FFF7CC]">{'>'} {feature.name}</h3>
                            <p className="text-[#FDE68A] leading-relaxed flex-1 text-sm font-mono opacity-80 group-hover:opacity-100 transition-opacity">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
