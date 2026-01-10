import React from 'react'
import PricingSection from "@/components/home/PricingSection";
import TrustedBy from "@/components/home/TrustedBy";
import FaqsSection from "@/components/home/FaqsSection";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/home/Footer";
import Image from "next/image";
import {Card} from "@/components/ui/card";
import {Star} from "lucide-react";
import {REVIEWS} from "@/constants/constant";
import { motion } from "framer-motion";

const ReviewSection = () => {
    return (
        <section className="py-24 px-6 bg-muted/20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Loved by thousands</h2>
                <div className="overflow-hidden">
                    <motion.div
                        animate={{x: ["0%", "-100%"]}}
                        transition={{duration: 30, repeat: Infinity, ease: "linear"}}
                        className="flex gap-8"
                    >
                        {REVIEWS.map((review, i) => (
                            <Card key={i} className="min-w-[400px] p-8">
                                <div className="flex gap-1 mb-4">
                                    {Array.from({length: 5}).map((_, s) =>
                                        <Star key={s} className="h-5 w-5 fill-yellow-400 text-yellow-400"/>
                                    )}
                                </div>
                                <p className="text-lg mb-6">"{review.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <Image src={review.image} className="w-12 h-12 rounded-full bg-primary/20"
                                           alt={review.name} width={100} height={100}/>
                                    <div>
                                        <p className="font-semibold">{review.name}</p>
                                        <p className="text-sm text-muted-foreground">{review.role}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    <Card className="p-8">
                        <p className="text-xl italic mb-6">"Best note app I've ever used. Simple yet powerful."</p>
                        <p className="font-semibold">- Sarah Chen, Designer</p>
                    </Card>
                    <Card className="p-8">
                        <p className="text-xl italic mb-6">"Replaced Notion completely for my team."</p>
                        <p className="font-semibold">- Alex Rivera, Founder</p>
                    </Card>
                </div>
                <div className="mt-8 max-w-2xl mx-auto">
                    <Card className="p-8 text-center">
                        <p className="text-2xl italic mb-6">"MindScrawl changed how I organize my entire life."</p>
                        <p className="font-semibold text-lg">- Jordan Lee, Student</p>
                    </Card>
                </div>
            </div>
        </section>

    )
}
export default ReviewSection
