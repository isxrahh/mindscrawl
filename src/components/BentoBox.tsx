"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { BentoGridItem, BentoGrid } from "@/components/ui/bento-grid";
import {
    IconBoxAlignRightFilled,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature, IconSparkles,
    IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import {OrbitRotationDemo} from "@/components/OrbitRotationComponent";

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

const BentoGridItemWrapper = ({
                                  className,
                                  title,
                                  description,
                                  header,
                                  icon: Icon,
                              }: {
    className?: string;
    title: string;
    description: React.ReactNode;
    header: React.ReactNode;
    icon: any;
}) => (
    <motion.div
        variants={cardVariants}
        whileHover={{
            y: -8,
            scale: 1.015,
            boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)",
            transition: { type: "spring", stiffness: 300, damping: 25 },
        }}
        className={cn(
            "group/bento relative overflow-hidden rounded-2xl p-8 h-max",
            "bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-neutral-200/60 dark:border-white/10",
            "shadow-sm hover:shadow-2xl transition-all duration-300",
            className
        )}
    >
        <div className="relative z-10">
            <Icon className="h-10 w-10 md:h-12 md:w-12 text-primary mb-6" />
            <h3 className="font-bold text-2xl md:text-3xl mb-3">{title}</h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {description}
            </p>
        </div>

        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500" />

        {header}
    </motion.div>
);
export default function BentoBox() {
    return (
        <BentoGrid className="max-w-7xl mx-auto md:min-h-[32rem] lg:min-h-[38rem] gap-8 py-12">
            {items.map((item, i) => (
                <BentoGridItemWrapper
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={cn("[&>p:text-lg]", item.className)}
                    icon={item.icon}
                />
            ))}
        </BentoGrid>
    );
}

// Animated AI Core Card
const SkeletonOne = () => (
    <motion.div
        initial={{ opacity: 0.8 }}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex flex-1 my-6 py-17 w-full h-1/2 dark:bg-dot-white/[0.15] bg-dot-black/[0.15] bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-cyan-500/20 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800"
    >
        <div className="flex flex-col items-center justify-center w-full h-full">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
            >
                AI
            </motion.div>
            <p className="mt-4 text-md font-medium text-foreground/80">Intelligent Core Engine</p>
        </div>
    </motion.div>
);

// Smart Summarization Preview
const SkeletonTwo = () => (
    <motion.div
        initial="initial"
        whileHover="hover"
        className="flex flex-1 my-6 w-full py-12 rounded-xl p-6 bg-neutral-50/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50"
    >
        <div className="space-y-4 w-full">
            <motion.div variants={{ initial: { width: "70%" }, hover: { width: "100%" } }} className="h-4 bg-neutral-300/60 dark:bg-neutral-700/60 rounded-full" />
            <motion.div variants={{ initial: { width: "85%" }, hover: { width: "100%" } }} className="h-4 bg-neutral-300/50 dark:bg-neutral-700/50 rounded-full" />
            <motion.div variants={{ initial: { width: "55%" }, hover: { width: "85%" } }} className="h-4 bg-neutral-300/40 dark:bg-neutral-700/40 rounded-full" />
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="mt-6 flex gap-4 justify-center"
            >
                <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    Summarize
                </div>
                <div className="px-4 py-2 rounded-full bg-neutral-200/70 dark:bg-neutral-800/70 text-sm font-medium">
                    Expand
                </div>
            </motion.div>
        </div>
    </motion.div>
);

// Infinite Gradient Canvas
const SkeletonThree = () => (
    <motion.div
        className="flex flex-1 my-6 py-25 w-full rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{
            background: "linear-gradient(90deg, #8b5cf6, #ec4899, #06b6d4, #10b981, #f59e0b)",
            backgroundSize: "600% 600%",
        }}
    >
        <div className="absolute backdrop-blur-sm" />
        <div className="relative z-10 flex items-center justify-center w-full h-full">
            <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="text-7xl font-black text-white drop-shadow-2xl"
            >
                ∞
            </motion.div>
        </div>
    </motion.div>
);

// Tech Stack Logos - FINAL FIX: No clipping, description inside card
const SkeletonFour = () => (
    <div className="flex flex-col my-6 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-black">
        {/* Logos Grid - Flexible height, centered content */}
        <div className="flex-1 grid grid-cols-3 gap-6 p-6 md:p-8 min-h-0">
            <motion.div
                whileHover={{ y: -6, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex flex-col items-center justify-center space-y-3"
            >
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="w-12 h-12 md:w-14 md:h-14" />
                <p className="text-xs md:text-sm font-bold">React</p>
            </motion.div>
            <motion.div
                whileHover={{ y: -6, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex flex-col items-center justify-center space-y-3"
            >
                <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="Next.js" className="w-12 h-12 md:w-14 md:h-14 dark:invert" />
                <p className="text-xs md:text-sm font-bold">Next.js</p>
            </motion.div>
            <motion.div
                whileHover={{ y: -6, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex flex-col items-center justify-center space-y-3"
            >
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind" className="w-12 h-12 md:w-14 md:h-14" />
                <p className="text-xs md:text-sm font-bold">Tailwind</p>
            </motion.div>
            <motion.div
                whileHover={{ y: -6, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex flex-col items-center justify-center space-y-3"
            >
                <img src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg" alt="Framer" className="w-12 h-12 md:w-14 md:h-14 dark:invert" />
                <p className="text-xs md:text-sm font-bold">Framer Motion</p>
            </motion.div>
            <motion.div
                whileHover={{ y: -6, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex flex-col items-center justify-center space-y-3"
            >
                <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="TypeScript" className="w-12 h-12 md:w-14 md:h-14" />
                <p className="text-xs md:text-sm font-bold">TypeScript</p>
            </motion.div>
            <motion.div
                whileHover={{ y: -6, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex flex-col items-center justify-center space-y-3"
            >
                <img src="/assets/shadcn.svg" alt="shadcn/ui" className="dark:invert w-12 h-12 md:w-14 md:h-14" />
                <p className="text-xs md:text-sm font-bold">shadcn/ui</p>
            </motion.div>
        </div>

    </div>
);

// Collaboration Preview
const SkeletonFive = () => (
    <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-col justify-between py-18 px-4 my-6 bg-gradient-to-br from-white to-neutral-100 dark:from-neutral-950 dark:to-black rounded-xl border border-neutral-200 dark:border-neutral-800"
    >
        <div className="flex items-center gap-5">
            <motion.div
                variants={{
                    initial: { x: 0 },
                    animate: { x: [0, 10, 0] },
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg"
            />
            <div>
                <div className="h-4 bg-muted rounded w-40 mb-2" />
                <div className="h-3 bg-muted/60 rounded w-28" />
            </div>
        </div>

        <motion.div
            variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
            }}
            className="flex gap-4 justify-end mt-6"
        >
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-foreground font-semibold shadow-md">
                Generate
            </div>
            <div className="px-6 py-3 rounded-full bg-primary/20 text-primary font-semibold shadow-md">
                Rewrite
            </div>
        </motion.div>
    </motion.div>
);

const SkeletonOrbit = () => (
    <motion.div
        className="w-full h-full my-2 p-41 rounded-2xl overflow-hidden border border-neutral-200/50 dark:border-neutral-800/50 bg-neutral-50/80 dark:bg-neutral-900/80 backdrop-blur-md" whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_60%)]" />

        {/* Depth grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Center core */}
        <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="
          w-20
          h-20
          rounded-full
          bg-gradient-to-br
          from-indigo-500
          via-purple-500
          to-pink-500
          shadow-[0_0_80px_rgba(99,102,241,0.6)]
        "
            />
        </div>

        {/* Orbit system */}
        <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        >
            <OrbitRotationDemo />
        </motion.div>


    </motion.div>
);

const SkeletonSix = () => (
    <motion.div
        whileHover={{ scale: 1.04 }}
        className="relative flex flex-col my-6 justify-center items-center w-full p-12 rounded-xl overflow-hidden border border-neutral-200/50 dark:border-neutral-800/50 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-pink-500/10 backdrop-blur-md"
    >
        <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="text-6xl mb-4"
        >
            ✨
        </motion.div>
        <div className="text-center">
            <p className="text-3xl font-bold py-4 text-neutral-800 dark:text-neutral-100">Magic Features</p>
            <p className="text-md text-neutral-600 dark:text-neutral-400 mt-2">
                Auto-organize • Smart tags <br/> • Instant insights
            </p>
        </div>
        <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-white/20 dark:bg-black/20"
        />
    </motion.div>
);

const items = [
    {
        title: "AI-Powered Intelligence",
        description: <span className="text-sm">Advanced AI integrated into every note and database.</span>,
        header: <SkeletonOne />,
        className: "md:col-span-1",
        icon: IconClipboardCopy
    },
    {
        title: "Instant Summarization",
        description: <span className="text-sm">One-click summaries powered by state-of-the-art AI.</span>,
        header: <SkeletonTwo />,
        className: "md:col-span-1",
        icon: IconFileBroken
    },
    {
        title: "Infinite Creative Flow",
        description: <span className="text-sm">Dynamic visuals and AI-driven idea connections.</span>,
        header: <SkeletonThree />,
        className: "md:col-span-1",
        icon: IconSignature
    },
    {
        title: "Built with Modern Tech",
        description: <span className="text-sm">Performance-first stack with orbiting innovation.</span>,
        header: <SkeletonOrbit />,
        className: "md:col-span-2", // Takes 2 columns
        icon: IconBoxAlignRightFilled
    },
    {
        title: "Magic AI Features",
        description: <span className="text-sm">Auto-organize, smart tags, and instant insights.</span>,
        header: <SkeletonSix />,
        className: "md:col-span-1", // Placed beside the orbit card
        icon: IconSparkles
    },
    {
        title: "Technology Stack",
        description: <span className="text-sm">React • Next.js • Tailwind • TypeScript • Framer • shadcn/ui</span>,
        header: <SkeletonFour />,
        className: "md:col-span-2",
        icon: IconTableColumn
    },
    {
        title: "Live Collaboration",
        description: <span className="text-sm">Real-time AI suggestions and seamless sync.</span>,
        header: <SkeletonFive />,
        className: "md:col-span-1",
        icon: IconBoxAlignRightFilled
    },
];