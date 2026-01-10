import { motion } from "framer-motion";
import {AvatarGroup} from "@/components/animate-ui/components/animate/avatar-group";
import {AVATARS, COMPANY_LOGOS} from "@/constants/constant";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {GitCommitVertical, Star} from "lucide-react";

// Animation variants for the logo container
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 } // Staggers the entry of each logo
    }
};

const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 0.4 } // Settles at 40% opacity as defined before
};

/**
 * Renders a centered social proof bar with avatars, a rating, a commit icon, and company logos.
 *
 * The component displays a subtle scale-up avatar group, a five-star rating with a numeric score
 * and caption, a vertical commit icon, and a staggered, hover-scalable row of company logos.
 * Animations include avatar scale-in, rating slide-in, and staggered fade-and-rise for logos.
 *
 * @returns A JSX element containing the complete social proof UI block.
 */
export default function SocialProof() {
    return (
        <div className="flex items-center gap-8 flex-1 max-w-5xl justify-center my-12">
            {/* 1. Avatars: Subtle scale-up */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex"
            >
                <AvatarGroup>
                    {AVATARS.map((avatar, index) => (
                        <Avatar key={index} className="size-10 border-3 border-white shadow-sm">
                            <AvatarImage src={avatar.src} />
                            <AvatarFallback>{avatar.fallback}</AvatarFallback>
                        </Avatar>
                    ))}
                </AvatarGroup>
            </motion.div>

            {/* 2. Rating: Slide in from left */}
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col justify-center"
            >
                <div className="flex items-center gap-1.5">
                    <div className="flex">
                        {Array.from({ length: 5 }).map((_, s) => (
                            <Star key={s} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                    <span className="font-bold text-sm text-slate-900">4.5</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                    Loved by great customers
                </p>
            </motion.div>

            <GitCommitVertical className="w-8 h-8 text-slate-300 shrink-0 font-light" />

            {/* 3. Logos: Staggered "Fade & Rise" effect */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-6"
            >
                {COMPANY_LOGOS.map((logo, i) => {
                    const LogoIcon = logo.src;
                    return (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ scale: 1.1 }}
                            className="cursor-pointer flex items-center justify-center w-10 h-10"
                        >
                            <LogoIcon
                                size={30}
                                className="text-gray-900 hover:text-gray-600 transition-colors duration-200"
                            />
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}