import React from 'react'
import {TemplateSection} from "@/components/home/TemplatesSection";
import TimelineSection from "@/components/home/TimelineSection";
import MilestonesSection from "@/components/home/MilestonesSection";
import ReviewSection from "@/components/home/ReviewSection";
import PricingSection from "@/components/home/PricingSection";
import TrustedBy from "@/components/home/TrustedBy";
import FaqsSection from "@/components/home/FaqsSection";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/home/Footer";
import { motion } from "framer-motion";
import {WHY_FEATURES} from "@/constants/constant";
import {Card, CardContent} from "@/components/ui/card";

const AboutSection = () => {
    return (
        <section className="px-6 py-24 bg-background">
            <div className="mx-auto max-w-5xl text-center">
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Your thoughts deserve a better home
                    </h2>

                </motion.div>

                {/* Highlight Cards */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {WHY_FEATURES.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{opacity: 0, y: 40}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: i * 0.15, duration: 0.7}}
                            className="group"
                        >
                            <Card
                                className="h-full bg-muted/50 border-transparent hover:border-primary/50 hover:bg-muted transition-all duration-300">
                                <CardContent className="p-8 text-center">
                                    <div
                                        className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <item.icon className="h-8 w-8 text-primary"/>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    )
}
export default AboutSection
