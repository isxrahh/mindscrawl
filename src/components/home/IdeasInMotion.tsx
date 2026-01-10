"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { IconBulb, IconRocket, IconPuzzle } from "@tabler/icons-react";

const creativeItems = [
    {
        title: "AI Brainstorming",
        description: "Generate ideas, outlines, and concepts in seconds — never hit writer's block again.",
        icon: <IconBulb className="h-12 w-12 text-violet-500" />,
        color: { r: 139, g: 92, b: 246 },
    },
    {
        title: "Accelerated Workflow",
        description: "From concept to execution, watch your projects evolve faster than ever before.",
        icon: <IconRocket className="h-12 w-12 text-rose-500" />,
        color: { r: 244, g: 63, b: 94 },
    },
    {
        title: "Seamless Collaboration",
        description: "Connect with your team and AI simultaneously, with fluid real-time updates.",
        icon: <IconPuzzle className="h-12 w-12 text-sky-500" />,
        color: { r: 14, g: 165, b: 233 },
    },
];

const Card = ({ item, index, setHoveredIndex }: any) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17deg", "-17deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17deg", "17deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setHoveredIndex(null);
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative h-[480px] w-full rounded-3xl bg-white/80 dark:bg-neutral-900/80 p-12 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/70 shadow-2xl cursor-pointer overflow-hidden"
        >
            <div
                style={{ transform: "translateZ(80px)", transformStyle: "preserve-3d" }}
                className="relative z-10"
            >
                <div className="mb-10 inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white dark:bg-neutral-800 shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
                    {item.icon}
                </div>
                <h3 className="text-4xl font-bold mb-6 text-neutral-900 dark:text-neutral-50">
                    {item.title}
                </h3>
                <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {item.description}
                </p>
            </div>

            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-1000 blur-3xl"
                style={{
                    background: `radial-gradient(circle at 50% 50%, rgba(${item.color.r}, ${item.color.g}, ${item.color.b}, 0.6) 0%, transparent 60%)`,
                }}
            />

            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
                <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                        boxShadow: `0 0 80px 30px rgba(${item.color.r}, ${item.color.g}, ${item.color.b}, 0.4)`,
                    }}
                />
            </div>
        </motion.div>
    );
};

export default function IdeasInMotion() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const currentColor = useRef({ r: 168, g: 85, b: 247 });

    useEffect(() => {
        if (!containerRef.current) return;

        const canvas = document.createElement("canvas");
        canvas.className = "absolute inset-0 pointer-events-none z-0";
        containerRef.current.appendChild(canvas);

        const ctx = canvas.getContext("2d")!;
        let animationFrame: number;

        const resize = () => {
            const rect = containerRef.current!.getBoundingClientRect();
            canvas.width = rect.width * devicePixelRatio;
            canvas.height = rect.height * devicePixelRatio;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            ctx.scale(devicePixelRatio, devicePixelRatio);
        };

        resize();
        window.addEventListener("resize", resize);

        const particles = Array.from({ length: 50 }, () => ({
            x: Math.random() * (containerRef.current?.offsetWidth || 1000),
            y: Math.random() * (containerRef.current?.offsetHeight || 800),
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1,
        }));

        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const targetColor = hoveredIndex !== null
                ? creativeItems[hoveredIndex].color
                : { r: 180, g: 180, b: 190 };

            currentColor.current.r = lerp(currentColor.current.r, targetColor.r, 0.08);
            currentColor.current.g = lerp(currentColor.current.g, targetColor.g, 0.08);
            currentColor.current.b = lerp(currentColor.current.b, targetColor.b, 0.08);

            const rgb = `${Math.round(currentColor.current.r)}, ${Math.round(currentColor.current.g)}, ${Math.round(currentColor.current.b)}`;

            const width = containerRef.current!.offsetWidth;
            const height = containerRef.current!.offsetHeight;

            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${rgb}, ${hoveredIndex !== null ? 0.9 : 0.4})`;
                ctx.shadowBlur = hoveredIndex !== null ? 30 : 10;
                ctx.shadowColor = `rgba(${rgb}, 0.8)`;
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

                    if (dist < 200) {
                        ctx.beginPath();
                        const opacity = (1 - dist / 200) * (hoveredIndex !== null ? 0.6 : 0.2);
                        ctx.strokeStyle = `rgba(${rgb}, ${opacity})`;
                        ctx.lineWidth = opacity * 3;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrame = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("resize", resize);
            if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
        };
    }, [hoveredIndex]);

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-black py-24">
            <div ref={containerRef} className="relative max-w-7xl mx-auto px-8">
                <div className="text-center mb-20 relative z-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="text-7xl font-black tracking-tight leading-none"
                    >
                        Ideas in{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600 [-webkit-text-fill-color:transparent]">
                            Motion
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="text-2xl text-neutral-500 dark:text-neutral-400 mt-8 max-w-4xl mx-auto font-light italic"
                    >
                        Explore the intersection of human thought and algorithmic precision.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-20">
                    {creativeItems.map((item, i) => (
                        <Card
                            key={i}
                            item={item}
                            index={i}
                            setHoveredIndex={setHoveredIndex}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}