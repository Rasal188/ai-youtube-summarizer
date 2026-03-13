'use client'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
    {
        content: "SummarAI has completely changed how I learn. I used to spend hours watching tutorials, now I just read the summaries and actionable notes in 2 minutes. It's like having a superpower.",
        author: {
            name: "Sarah Chen",
            role: "Software Engineer",
            avatar: "SC"
        }
    },
    {
        content: "The Notion export feature is exactly what I needed. I pipe all my research podcasts directly into my second brain now. The timestamp highlights make it so easy to go back and get the full context.",
        author: {
            name: "Marcus Johnson",
            role: "Product Manager",
            avatar: "MJ"
        }
    },
    {
        content: "I was skeptical about AI summaries, but the accuracy of the key takeaways is mind-blowing. It perfectly captures the nuance of long-form video essays and documentaries.",
        author: {
            name: "Elena Rodriguez",
            role: "Content Creator",
            avatar: "ER"
        }
    }
]

export function TestimonialsSection() {
    return (
        <section className="py-24 bg-transparent relative z-10 border-t border-[#FDE68A]/10">
            <div className="container">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-[#FFF7CC] uppercase tracking-widest">
                        User Logs
                    </h2>
                    <p className="mt-4 text-lg text-[#FDE68A]">
                        Verified feedback from active terminal instances.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Card className="h-full flex flex-col bg-[#111111]/80 backdrop-blur-md rounded-none border border-[#FDE68A]/20 shadow-sm hover:shadow-[0_0_15px_rgba(253,230,138,0.15)] transition-all relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FDE68A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <CardContent className="pt-6 flex-1">
                                    <div className="flex mb-4 gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-4 w-4 fill-[#FDE68A] text-[#FDE68A] shadow-[0_0_5px_rgba(253,230,138,0.5)]" />
                                        ))}
                                    </div>
                                    <blockquote className="text-base leading-relaxed text-[#FFF7CC] font-mono opacity-90">
                                        {`> "${testimonial.content}"`}
                                    </blockquote>
                                </CardContent>
                                <CardFooter className="gap-4 pt-4 border-t border-[#FDE68A]/10 bg-[#FDE68A]/5">
                                    <Avatar className="rounded-none border border-[#FDE68A]/30">
                                        <AvatarFallback className="bg-[#0A0A0A] text-[#FDE68A] font-bold rounded-none">
                                            {testimonial.author.avatar}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-bold text-[#FFF7CC] text-sm tracking-wide">{testimonial.author.name}</div>
                                        <div className="text-xs text-[#FDE68A] opacity-80 uppercase tracking-wider">{testimonial.author.role}</div>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
