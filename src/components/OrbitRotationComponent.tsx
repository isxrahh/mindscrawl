"use client"

import {
    FaApple,
    FaAws,
    FaDocker,
    FaGithub,
    FaGoogle,
    FaInstagram,
    FaLinkedin,
    FaNodeJs,
    FaReact,
    FaTwitter,
} from "react-icons/fa"
import {
    SiFacebook,
    SiNextdotjs,
    SiRedux,
    SiTypescript,
    SiVercel,
} from "react-icons/si"

import { OrbitLogo } from "@/components/OGLogo"
import {OrbitRotation} from "@/components/ui/orbit-rotation";

/**
 * Displays a centered OrbitRotation demo with technology icons orbiting a central brand logo.
 *
 * The component renders a full-width container with a fixed height of 500px that centers an OrbitRotation configured with three orbits, an orbit gap of 7, a medium size, a set of technology icons, and the MindScrawl center logo.
 *
 * @returns A React element containing the OrbitRotation demo layout.
 */
export function OrbitRotationDemo() {
    const techIcons = [
        { Icon: FaReact, name: "React" },
        { Icon: FaAws, name: "AWS" },
        { Icon: FaDocker, name: "Docker" },
        { Icon: FaNodeJs, name: "Node.js" },
        { Icon: SiNextdotjs, name: "Next.js" },
        { Icon: SiVercel, name: "Vercel" },
        { Icon: SiRedux, name: "Redux" },
        { Icon: SiTypescript, name: "TypeScript" },
        { Icon: FaGithub, name: "GitHub" },
        { Icon: FaTwitter, name: "Twitter" },
        { Icon: FaLinkedin, name: "LinkedIn" },
        { Icon: FaInstagram, name: "Instagram" },
        { Icon: FaGoogle, name: "Google" },
        { Icon: FaApple, name: "Apple" },
        { Icon: SiFacebook, name: "Facebook" },
    ]

    const centerIcon = {
        Icon: ({ className }: { className?: string }) => <OrbitLogo className={className} />,
        name: "MindScrawl",
    };

    return (
        <div className="h-[500px] w-full overflow-hidden rounded-lg">
            <div className="flex h-full items-center justify-center">
                <OrbitRotation
                    icons={techIcons}
                    orbitCount={3}
                    orbitGap={7}
                    centerIcon={centerIcon}
                    size="md"
                />
            </div>
        </div>
    )
}