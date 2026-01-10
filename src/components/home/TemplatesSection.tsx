import {motion, Variants} from "framer-motion";

import {TEMPLATES} from "@/constants/constant";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

import {Check} from "lucide-react";

// Animation variants
const containerVariants: Variants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {staggerChildren: 0.15},
    },
};

const cardVariants: Variants = {
    hidden: {y: 30, opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
        transition: {duration: 0.5, ease: "easeOut"},
    },
};


export const TemplateSection = () => {
    return (
        <section className="py-24 px-6 bg-slate-50/60 dark:bg-[#1a1c23] ">
            <motion.div
                className="max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, margin: "-100px"}}
            >
                {/* Heading */}
                <div className="text-center mb-20">
                    <h2 className="text-6xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        Start with beautiful templates
                    </h2>
                    <p className="mt-6 mb-16 text-xl text-gray-700 max-w-2xl mx-auto dark:text-gray-500">
                        Skip the blank canvas. Choose from thoughtfully designed templates
                        built for productivity and clarity.
                    </p>
                </div>

                {/* Template Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {TEMPLATES.map((template) => (
                        <motion.div
                            key={template.id}
                            variants={cardVariants}
                            whileHover={{y: -8}}
                            className="group p-6"
                        >
                            <Card
                                className="h-full overflow-hidden rounded-3xl border-none bg-white dark:bg-[#0f1117] shadow-lg hover:shadow-2xl dark:shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-300">

                                {/* IMAGE SECTION */}
                                <div className="relative h-full w-full overflow-hidden dark:py-12 py-10">
                                    <motion.img
                                        src={template.src}
                                        alt={template.title}
                                        className="relative h-full w-full overflow-hidden dark:py-0 py-10 dark:bg-gradient-to-b dark:from-black/40 dark:via-black/10 dark:to-transparent"
                                        whileHover={{scale: 1.08}}
                                        transition={{duration: 0.5, ease: "easeOut"}}
                                    />

                                    {/* Gradient overlay */}
                                    <div
                                        className="absolute dark:hidden inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent"/>

                                    {/* Badge */}
                                    <span className="absolute -top-2 left-4 dark:-top-3 dark:my-3 rounded-full bg-white/90 dark:bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary dark:text-emerald-400 shadow dark:shadow-[0_4px_20px_rgba(16,185,129,0.25)]">
                                        Template
                                    </span>
                                </div>

                                {/* CONTENT */}
                                <CardContent className="px-8 flex flex-col justify-between h-full">
                                    <div>
                                        <h3 className="text-4xl mb-6 dark:text-white font-bold text-gray-800 leading-tight dark:drop-shadow-[0_1px_8px_rgba(255,255,255,0.08)]">
                                            {template.title}
                                        </h3>

                                        <p className="mt-3 text-lg dark:text-gray-400 text-slate-500 leading-relaxed line-clamp-2">
                                            {template.desc}
                                        </p>

                                        <div className="mt-6 space-y-3">
                                            {[template.desc_1, template.desc_2, template.desc_3]
                                                .filter(Boolean)
                                                .map((detail, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex dark:text-gray-300 items-start gap-3 text-md text-slate-600"
                                                    >
                                                        <Check
                                                            style={{color: "#16a34a"}} // emerald-600 hex
                                                            className="mt-1 h-5 w-5 shrink-0 drop-shadow-[0_0_6px_rgba(16,185,129,0.4)]"
                                                        />
                                                        <span className="leading-relaxed">{detail}</span>
                                                    </div>
                                                ))}
                                        </div>

                                    </div>

                                    {/* CTA */}
                                    <Button
                                        variant="ghost"
                                        className="group/button mt-8 w-full justify-between rounded-xl border border-slate-200 dark:border-white/10 px-6 py-5 text-sm font-semibold bg-white dark:bg-[#12141c] transition-all duration-300 hover:!bg-[#16a34a] hover:!text-white hover:!border-[#16a34a] dark:hover:shadow-[0_10px_30px_rgba(16,185,129,0.35)] active:scale-[0.97] cursor-pointer"> <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                                            Use Template
                                        </span>
                                        <span className="ml-2 transition-transform duration-300 group-hover/button:translate-x-2">
                                            →
                                        </span>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
