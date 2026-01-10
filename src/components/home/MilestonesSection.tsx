import React from 'react'
import ReviewSection from "@/components/home/ReviewSection";
import PricingSection from "@/components/home/PricingSection";
import TrustedBy from "@/components/home/TrustedBy";
import FaqsSection from "@/components/home/FaqsSection";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/home/Footer";
import { motion } from "framer-motion";
import {Card, CardContent} from "@/components/ui/card";
import {MILESTONES} from "@/constants/constant";
import CountEffect from "../../../utils/CountEffect";

const MilestonesSection = () => {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-6xl font-bold text-center mb-4">Milestones Achieved</h2>
                <p className="text-xl text-center text-gray-600 mb-16">Celebrating the milestones achieved with
                    mindscrawl.</p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {MILESTONES.map((milestone,i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}

                        >
                            <Card key={i} className="text-center py-12">
                                <CardContent>
                                    <milestone.icon
                                        className="w-12 h-12 text-gray-700 dark:text-white font-light items-center justify-center mx-auto mb-6"/>
                                    <p className="text-5xl font-bold text-primary">
                                        <CountEffect
                                            value={milestone.value}
                                            suffix={milestone.suffix}
                                            duration={1.8}
                                            delay={i * 0.25}
                                        />
                                    </p>

                                    <p className="text-xl mt-4">{milestone.label}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    )
}
export default MilestonesSection
