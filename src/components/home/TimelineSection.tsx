import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {TIMELINE} from "@/constants/constant";
const TimelineSection = () => {

    return (
        <section className="py-12 px-6 bg-muted/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-6xl font-bold tracking-tight">Our Journey & Roadmap</h2>
                    <p className="mt-10 text-xl text-muted-foreground">Past • Present • Future</p>
                </motion.div>

                {/* Compact Spidernet Timeline */}
                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30 rounded-full" />

                    {/* Spidernet Connections */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible opacity-40"
                        aria-hidden="true"
                    >
                        {TIMELINE.map((_, i) => (
                            <motion.line
                                key={i}
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                x1="50%"
                                y1={`${10 + (i * 78) / (TIMELINE.length - 1)}%`}
                                x2={i % 2 === 0 ? "30%" : "70%"}
                                y2={`${10 + (i * 78) / (TIMELINE.length - 1) + 4}%`}
                                stroke="var(--primary)"
                                strokeWidth="2"
                                strokeDasharray="6 6"
                                strokeLinecap="round"
                            />
                        ))}
                    </svg>

                    {/* Milestones */}
                    <div className="space-y-10">
                        {TIMELINE.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className={cn("relative flex items-center", i % 2 === 0 ? "justify-start" : "justify-end")}
                            >
                                {/* Card */}
                                <motion.div
                                    whileHover={{ y: -4, scale: 1.03 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                    className={cn(
                                        "w-full max-w-lg",
                                        i % 2 === 0 ? "pr-16 md:pr-2 text-right mt-10" : "pl-16 md:pl-2 text-left"  // ← bigger values
                                    )}   >
                                    <div className="p-10 rounded-xl bg-background/80 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 shadow-sm hover:shadow-md transition-all">
                                        <div className={cn("flex items-center gap-3 mb-2", i % 2 === 0 ? "flex-row-reverse" : "")}>
                                            <motion.div
                                                whileHover={{ scale: 1.15, rotate: i % 2 === 0 ? -8 : 8 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                {item.icon && <item.icon className="w-10 h-10 text-primary" strokeWidth={1} />}
                                            </motion.div>

                                            <span className="px-4 py-2 text-md font-medium text-primary bg-primary/10 rounded-full">
                                                {item.date}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl py-2 font-semibold text-foreground">{item.title}</h3>
                                        <p className="mt-1 text-lg text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>

                                {/* Center Dot */}
                                <motion.div
                                    className="absolute left-1/2 -translate-x-1/2 z-20"
                                    whileHover={{ scale: 1.6 }}
                                    transition={{ type: "spring" }}
                                >
                                    <div className="w-3.5 h-3.5 rounded-full bg-primary shadow-lg ring-8 ring-primary/20" />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;