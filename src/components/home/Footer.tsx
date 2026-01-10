import React from 'react'
import Image from "next/image"
import {FaDiscord, FaGithub, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="py-16 px-6 bg-background border-t">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
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
                        <p className="text-muted-foreground max-w-md leading-relaxed">
                            Your personal second brain. Beautifully designed for thinking, creating, and organizing
                            everything in one place —
                            with privacy, AI, and infinite customization at its core.
                        </p>
                        <div className="flex gap-6 mt-8">
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <FaTwitter className="w-6 h-6"/>
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <FaGithub className="w-6 h-6"/>
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <FaDiscord className="w-6 h-6"/>
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <FaYoutube className="w-6 h-6"/>
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <FaInstagram className="w-6 h-6"/>
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Product</h4>
                        <ul className="space-y-4 text-muted-foreground">
                            <li><a href="#" className="hover:text-foreground transition">Features</a></li>
                            <li><a href="#" className="hover:text-foreground transition">Templates</a></li>
                            <li><a href="#" className="hover:text-foreground transition">AI Tools</a></li>
                            <li><a href="#" className="hover:text-foreground transition">Pricing</a></li>
                            <li><a href="#" className="hover:text-foreground transition">Roadmap</a></li>
                            <li><a href="#" className="hover:text-foreground transition">Changelog</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Resources</h4>
                        <ul className="space-y-4 text-muted-foreground">
                            <li><a href="#" className="hover:text-foreground transition">Documentation</a></li>
                            <li><a href="#" className="hover:text-foreground transition">Guides & Tutorials</a></li>
                            <li><a href="#" className="hover:text-foreground transition">Community Forum</a></li>
                            <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
                            <li><a href="#" className="hover:text-foreground transition">API Reference</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-4 text-muted-foreground">
                            <li><a href="#" className="hover:text-foreground transition">About Us</a></li>
                            <li><a href="#" className="hover:text-foreground transition">Careers</a></li>
                            <li><a href="#" className="hover:text-foreground transition">Press Kit</a></li>
                            <li><a href="#" className="hover:text-foreground transition">Contact</a></li>
                            <li><a href="#" className="hover:text-foreground transition">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-foreground transition">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div
                    className="pt-16 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground">
                    <p>© 2026 MindScrawl. All rights reserved.</p>
                    <div className="flex gap-8 text-sm">
                        <a href="#" className="hover:text-foreground transition">Status</a>
                        <a href="#" className="hover:text-foreground transition">Security</a>
                        <a href="#" className="hover:text-foreground transition">Brand Guidelines</a>
                        <a href="#" className="hover:text-foreground transition">Accessibility</a>
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default Footer
