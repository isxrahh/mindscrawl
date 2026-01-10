import React from 'react';
import { motion } from "framer-motion";
import BentoBox from "@/components/BentoBox";

const FeaturesSection = () => {
    return (
        <section className="py-24 px-6 bg-muted/20">
            <div className="max-w-7xl mx-auto">
                {/* Header with new animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
                        Powerful features, beautiful design
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground mt-6 max-w-4xl mx-auto">
                        Thoughtfully crafted tools where intelligence meets aesthetics.
                    </p>
                </motion.div>

                {/* Bento Grid with staggered entrance */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.12, // gentle stagger
                            },
                        },
                    }}
                >
                    <BentoBox />
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;