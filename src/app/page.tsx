"use client";

import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {GoogleGeminiEffect} from "@/components/ui/google-gemini-effect";

import Newsletter from "@/components/home/Newsletter";
import {TemplateSection} from "@/components/home/TemplatesSection";
import Footer from "@/components/home/Footer";
import FaqsSection from "@/components/home/FaqsSection";
import TrustedBy from "@/components/home/TrustedBy";
import PricingSection from "@/components/home/PricingSection";
import ReviewSection from "@/components/home/ReviewSection";
import MilestonesSection from "@/components/home/MilestonesSection";
import TimelineSection from "@/components/home/TimelineSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import IdeasInMotion from "@/components/home/IdeasInMotion";

/**
 * Render the landing page composed of sequential site sections and a scroll-linked AI visual effect.
 *
 * Includes a sticky AI-effect section that maps the container's scroll progress to animated path lengths
 * passed into the GoogleGeminiEffect component.
 *
 * @returns The root JSX element rendering the full landing page layout.
 */
export default function LandingPage() {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);


    return (
        <main className="bg-background text-foreground overflow-x-hidden">
            {/*Main section*/}
            <HeroSection/>

            {/*Features*/}
            <FeaturesSection/>

            {/*IdeasInMotion*/}
            <IdeasInMotion/>

            {/*AI Effect*/}
            <section>
                <div
                    className="min-h-[90px] dark:bg-black bg-white w-full dark:border dark:border-white/[0.1] rounded-md relative pt-4 overflow-clip"
                    ref={ref}
                >
                    <div className="sticky top-0 h-screen pt-40">

                        <GoogleGeminiEffect
                            pathLengths={[
                                pathLengthFirst,
                                pathLengthSecond,
                                pathLengthThird,
                                pathLengthFourth,
                                pathLengthFifth,
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* "Why MindScrawl?" */}
            <AboutSection/>

            {/* Featured Templates */}
            <TemplateSection/>

            {/* Timeline */}
            <TimelineSection/>

            {/* Milestones */}
            <MilestonesSection/>

            {/* Reviews Carousel (Auto-scroll + 3-grid: 2 top, 1 bottom) */}
            <ReviewSection/>

            {/* Pricing Section – Table + Highlighted Offer Card */}
            <PricingSection/>

            {/* Trusted By */}
            <TrustedBy/>

            {/* FAQs – Multi-Column with Subtopics */}
            <FaqsSection/>

            {/* Newsletter */}
            <Newsletter/>

            {/* Detailed & Long Footer */}
            <Footer/>
        </main>
    );
}
