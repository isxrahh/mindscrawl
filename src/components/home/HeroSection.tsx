import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import {nav_items} from "@/constants/constant";
import {Button} from "@/components/ui/button";
import AIButton from "@/components/AIButton";
import {useTheme} from "next-themes";
import { Blocks, Moon, Rocket, Sun} from "lucide-react";
import Typewriter from "typewriter-effect";
import SocialProof from "@/components/SocialProof";
import {Badge} from "@/components/ui/badge";

const HeroSection = () => {
    const {theme, setTheme} = useTheme();

    return (
        <section className="relative min-h-screen flex flex-col">
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                <div className="grid grid-cols-24 md:grid-cols-40 gap-0 h-full w-full">
                    {Array.from({length: 960}).map((_, i) => (
                        <div key={i} className="border border-primary/20 aspect-square"/>
                    ))}
                </div>
            </div>

            {/* Navbar */}
            <motion.header
                initial={{y: -100}}
                animate={{y: 0}}
                className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/assets/logo_light.png"
                            width={350}
                            height={150}
                            alt="MindScrawl Logo"
                            className="block dark:hidden"
                        />
                        <Image
                            src="/assets/logo_dark.png"
                            width={350}
                            height={150}
                            alt="MindScrawl Logo"
                            className="hidden dark:block"
                        />
                    </div>
                    <div className="flex gap-4">
                        {
                            nav_items.map((item, i) => (
                                <Button key={i} variant="ghost" className="uppercase text-lg">{item.title}</Button>
                            ))
                        }

                        <AIButton/>

                        <Button
                            variant="outline"
                            size="icon"
                            aria-label="Toggle theme"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            {theme === "dark" ? <Sun className="h-5 w-5"/> : <Moon className="h-5 w-5"/>}
                        </Button>
                    </div>
                </div>
            </motion.header>

            {/* Hero Content */}
            <div className="flex-1 flex items-center justify-center px-6 pt-32 pb-20">
                <div className="text-center max-w-5xl relative z-10">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 mb-8"
                    >
                        <Badge variant="secondary">New</Badge>
                        <span className="text-sm">Introducing databases, AI summaries, plugins & more!</span>
                    </motion.div>

                    <motion.h1
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                    >
                        Build your second brain with
                        <span className="text-primary"> MindScrawl ⚡</span>
                        <br/>
                        <span className="block mt-4 text-4xl md:text-5xl">
                                All-in-one workspace for
                                <Typewriter
                                    options={{
                                        strings: [
                                            '<span class="text-primary font-semibold ml-3">notes</span>',
                                            '<span class="text-primary font-semibold ml-3">tasks</span>',
                                            '<span class="text-primary font-semibold ml-3">databases</span>',
                                            '<span class="text-primary font-semibold ml-3">ideas</span>',
                                            '<span class="text-primary font-semibold ml-3">life</span>',
                                            '<span class="text-primary font-semibold ml-3">projects</span>',
                                            '<span class="text-primary font-semibold ml-3">knowledge</span>',
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        delay: 60,
                                        deleteSpeed: 40,
                                    }}
                                />
                            </span>
                    </motion.h1>

                    <motion.p
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.3}}
                        className="mt-8 text-xl text-muted-foreground max-w-3xl mx-auto"
                    >
                        In a world of scattered notes and bloated apps, MindScrawl is your quiet, beautiful
                        sanctuary — an extension of your mind.
                    </motion.p>


                    <SocialProof/>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.5}}
                        className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <Button size="lg" className="px-10 py-6 text-lg">
                            <Rocket className="mr-2 h-6 w-6"/> Start Building Now
                        </Button>
                        <Button size="lg" variant="outline" className="px-10 py-6 text-lg">
                            <Blocks className="mr-2 h-6 w-6"/> Explore Features
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>

    )
}
export default HeroSection
