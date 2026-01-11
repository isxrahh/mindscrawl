import React from 'react'
import Image from "next/image"
import {FaDiscord, FaGithub, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import {BRAND, COMPANY_FOOTER, FOOTER_ICONS, PRODUCTS, RESOURCES} from "@/constants/constant";
import {Icon} from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-16 px-6 bg-background border-t">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-4">
                            <Image
                                src="/assets/logo.png"
                                width={350}
                                height={150}
                                alt="MindScrawl Logo"
                            />
                        </div>
                        <p className="text-muted-foreground max-w-md leading-relaxed">
                            Your personal second brain. Beautifully designed for thinking, creating, and organizing
                            everything in one place —
                            with privacy, AI, and infinite customization at its core.
                        </p>
                        <div className="flex gap-6 mt-8">
                            {FOOTER_ICONS.map((item, i) => (
                                <div key={i}>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <item.icon size={28}/>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Product</h4>
                        {PRODUCTS.map((item, i) => (
                            <ul key={i} className="space-y-4 pb-4 text-muted-foreground">
                                <li>
                                    <a href="#" className="hover:text-foreground transition">{item.label}</a>
                                </li>
                            </ul>
                        ))}
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Resources</h4>
                        {RESOURCES.map((item, i) => (
                            <ul key={i} className="space-y-4 pb-4 text-muted-foreground">
                                <li>
                                    <a href="#" className="hover:text-foreground transition">{item.label}</a>
                                </li>
                            </ul>
                        ))}
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Company</h4>
                        {COMPANY_FOOTER.map((item, i) => (
                            <ul key={i} className="space-y-4 pb-4 text-muted-foreground">
                                <li>
                                    <a href="#" className="hover:text-foreground transition">{item.label}</a>
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>

                <div
                    className="pt-16 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground">
                    <p>© 2026 MindScrawl. All rights reserved.</p>
                    <div className="flex gap-8 text-sm">
                        {BRAND.map((item, i) => (
                            <a key={i} href="#" className="hover:text-foreground transition">{item.label}</a>

                        ))}
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default Footer
