"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
    const containerRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className="py-6 px-6 bg-background selection:bg-white selection:text-black">
            <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-gray-900 text-6xl font-bold text-center mb-8 dark:text-white">
                Stay Updated
            </h2>

            <p className="text-gray-500 text-xl text-center leading-relaxed mb-16">
                Want to be the first to know when we add new components?
                Sign up for our newsletter and stay in the loop.
            </p>
        </div>

            <div
                className="max-w-7xl mx-auto perspective-[1200px]"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <motion.div
                    ref={containerRef}
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    className="relative rounded-xl bg-zinc-950 p-12 md:p-24 border border-white/10 shadow-2xl transition-colors duration-500"
                >
                    <div className="absolute inset-0 overflow-hidden rounded-[3.5rem] pointer-events-none">
                        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-purple-500/10 blur-[120px] rounded-full animate-pulse" />
                        <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-blue-500/10 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center" style={{ transform: "translateZ(50px)" }}>
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="group relative px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 transition-all hover:border-white/30"
                        >
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 group-hover:text-white transition-colors">
                                The Inner Circle
                            </span>
                            <div className="absolute inset-0 rounded-full bg-white/5 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>

                        <motion.h2
                            initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                            whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold text-gray-100 text-center tracking-tight mb-8 leading-[1] dark"
                        >
                            Master the art <br />
                            <span className="text-zinc-500 italic font-serif">of building.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-zinc-500 text-lg md:text-xl max-w-lg text-center font-light leading-relaxed mb-12"
                        >
                            Weekly blueprints for high-end digital products. <br className="hidden md:block" />
                            Join 10,000+ engineers crafting the future.
                        </motion.p>

                        <div className="w-full max-w-md relative mt-4">
                            <motion.div
                                style={{ transform: "translateZ(80px)" }}
                                className="flex items-center p-1.5 bg-black/40 backdrop-blur-2xl rounded-[2rem] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,1)] ring-1 ring-white/5"
                            >
                                <Input
                                    type="email"
                                    placeholder="name@email.com"
                                    className="border-none bg-transparent focus-visible:ring-0 text-white h-14 pl-6 text-lg placeholder:text-zinc-600"
                                    required
                                />
                                <Button
                                    className="rounded-[1.6rem] bg-white text-black px-8 h-14 font-black text-sm uppercase tracking-tighter hover:bg-zinc-200 transition-all active:scale-95"
                                >
                                    Join Now
                                </Button>
                            </motion.div>

                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/40 blur-xl rounded-full" />
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-20 text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold"
                        >
                            Secure • Curated • Exclusive
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}