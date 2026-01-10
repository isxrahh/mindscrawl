import React from "react";
import {motion} from "framer-motion";
import {cn} from "@/lib/utils";
import {Globe, Shield, Sparkles} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FaqsSection = () => {
    // Staggered animation variants for columns
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1},
    };

    const columnVariants = {
        hidden: {opacity: 0, y: 30},
        visible: {opacity: 1, y: 0},
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 15},
        visible: {opacity: 1, y: 0},
    };

    return (
        <section className="py-32 px-6 bg-muted/5">
            <div className="max-w-7xl mx-auto">
                {/* Header with fade-in */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Everything you need to know about MindScrawl — privacy, features, pricing, and more.
                    </p>
                </motion.div>

                {/* Columns with staggered animation */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    transition={{staggerChildren: 0.2}}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                >
                    {/* Column 1: Privacy & Security */}
                    <motion.div variants={columnVariants}
                                transition={{duration: 0.7, ease: "easeOut"}}>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Shield className="h-8 w-8 text-primary"/>
                            Privacy & Security
                        </h3>
                        <Accordion type="single" collapsible className="space-y-4">
                            {[
                                {
                                    value: "privacy-1",
                                    trigger: "Is my data really private?",
                                    content:
                                        "Yes — 100%. By default, all your notes, databases, and files are stored locally on your device. We never access or track your content. No analytics, no cloud upload unless you explicitly enable sync.",
                                },
                                {
                                    value: "privacy-2",
                                    trigger: "Do you sell or share my data?",
                                    content:
                                        "Never. MindScrawl is built on the principle of data ownership. Your thoughts are yours alone — we don't monetize, share, or analyze your personal content.",
                                },
                                {
                                    value: "privacy-3",
                                    trigger: "Is end-to-end encryption available?",
                                    content:
                                        "Yes! Optional cloud sync uses end-to-end encryption. Only you hold the keys — even we can't read your data.",
                                },
                            ].map((faq, idx) => (
                                <motion.div key={faq.value} variants={itemVariants} transition={{duration: 0.5}}>
                                    <AccordionItem value={faq.value}>
                                        <AccordionTrigger>{faq.trigger}</AccordionTrigger>
                                        <AccordionContent>{faq.content}</AccordionContent>
                                    </AccordionItem>
                                </motion.div>
                            ))}
                        </Accordion>
                    </motion.div>

                    {/* Column 2: Features & Usage */}
                    <motion.div variants={columnVariants}>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Sparkles className="h-8 w-8 text-primary"/>
                            Features & Usage
                        </h3>
                        <Accordion type="single" collapsible className="space-y-4">
                            {[
                                {
                                    value: "features-1",
                                    trigger: "Can I use it completely offline?",
                                    content:
                                        "Absolutely. MindScrawl is offline-first by design. Write, organize, and use AI features without internet. Everything syncs instantly when you reconnect.",
                                },
                                {
                                    value: "features-2",
                                    trigger: "How does the AI work?",
                                    content:
                                        "AI is deeply integrated: generate content, summarize long notes, rewrite text, extract insights, and get smart suggestions — all powered by advanced models with full privacy.",
                                },
                                {
                                    value: "features-3",
                                    trigger: "Are there templates available?",
                                    content:
                                        "Yes! Hundreds of free templates for students (exam prep, research), developers (wiki, docs), creators (journal, content calendar), teams (projects, CRM), and more.",
                                },
                                {
                                    value: "features-4",
                                    trigger: "Can I customize the interface?",
                                    content:
                                        "Fully. Custom themes, icons, fonts, layouts, sidebar organization — make MindScrawl feel like home.",
                                },
                            ].map((faq, idx) => (
                                <motion.div key={faq.value} variants={itemVariants}>
                                    <AccordionItem value={faq.value}>
                                        <AccordionTrigger>{faq.trigger}</AccordionTrigger>
                                        <AccordionContent>{faq.content}</AccordionContent>
                                    </AccordionItem>
                                </motion.div>
                            ))}
                        </Accordion>
                    </motion.div>

                    {/* Column 3: Access & Support */}
                    <motion.div variants={columnVariants}>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Globe className="h-8 w-8 text-primary"/>
                            Access & Support
                        </h3>
                        <Accordion type="single" collapsible className="space-y-4">
                            {[
                                {
                                    value: "access-1",
                                    trigger: "Is there a mobile app?",
                                    content:
                                        "The web app (PWA) works beautifully on phones and tablets — install it to your home screen for a native-like experience. Dedicated iOS and Android apps are in development and coming soon!",
                                },
                                {
                                    value: "access-2",
                                    trigger: "Does it work on Windows, Mac, and Linux?",
                                    content:
                                        "Yes! MindScrawl runs perfectly on all desktop platforms via the web app. Native desktop apps (with system tray, shortcuts, etc.) are planned for 2026.",
                                },
                                {
                                    value: "access-3",
                                    trigger: "What if I need help?",
                                    content:
                                        "Free users get community support. Pro users get priority email support. We also have detailed docs, video guides, and an active community forum.",
                                },
                                {
                                    value: "access-4",
                                    trigger: "Can I try Pro features before buying?",
                                    content:
                                        "Yes! Start with a 14-day free trial of Pro — no credit card required. Experience AI, advanced databases, and custom themes risk-free.",
                                },
                            ].map((faq, idx) => (
                                <motion.div key={faq.value} variants={itemVariants}>
                                    <AccordionItem value={faq.value}>
                                        <AccordionTrigger>{faq.trigger}</AccordionTrigger>
                                        <AccordionContent>{faq.content}</AccordionContent>
                                    </AccordionItem>
                                </motion.div>
                            ))}
                        </Accordion>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default FaqsSection;