// src/components/ui/OrbitLogo.tsx
import React from "react";

export function OrbitLogo({ className }: { className?: string }) {
    return (
        <div className={`flex flex-col items-center justify-center ${className || ""}`}>
            {/* Glowing blue-dotted "MindScrawl" logo - EldoraUI style */}
            <svg
                width="280"
                height="50"
                viewBox="0 0 280 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-2xl"
            >
                {/* M */}
                <text x="10" y="34" fontFamily="ui-monospace, monospace" fontSize="32" fontWeight="800" fill="currentColor" className="text-foreground">
                    M
                </text>
                <circle cx="40" cy="28" r="4" fill="#60a5fa" opacity="0.9" />
                <circle cx="40" cy="28" r="8" fill="#60a5fa" opacity="0.4" />

                {/* i */}
                <text x="52" y="34" fontFamily="ui-monospace, monospace" fontSize="32" fontWeight="800" fill="currentColor" className="text-foreground">
                    i
                </text>
                <circle cx="70" cy="28" r="4" fill="#60a5fa" opacity="0.9" />
                <circle cx="70" cy="28" r="8" fill="#60a5fa" opacity="0.4" />

                {/* n */}
                <text x="82" y="34" fontFamily="ui-monospace, monospace" fontSize="32" fontWeight="800" fill="currentColor" className="text-foreground">
                    n
                </text>
                <circle cx="108" cy="28" r="4" fill="#60a5fa" opacity="0.9" />
                <circle cx="108" cy="28" r="8" fill="#60a5fa" opacity="0.4" />

                {/* d */}
                <text x="120" y="34" fontFamily="ui-monospace, monospace" fontSize="32" fontWeight="800" fill="currentColor" className="text-foreground">
                    d
                </text>
                <circle cx="148" cy="28" r="4" fill="#60a5fa" opacity="0.9" />
                <circle cx="148" cy="28" r="8" fill="#60a5fa" opacity="0.4" />

                {/* S */}
                <text x="160" y="34" fontFamily="ui-monospace, monospace" fontSize="32" fontWeight="800" fill="currentColor" className="text-foreground">
                    S
                </text>
                <circle cx="184" cy="28" r="4" fill="#60a5fa" opacity="0.9" />
                <circle cx="184" cy="28" r="8" fill="#60a5fa" opacity="0.4" />

                {/* c */}
                <text x="196" y="34" fontFamily="ui-monospace, monospace" fontSize="32" fontWeight="800" fill="currentColor" className="text-foreground">
                    c
                </text>
                <circle cx="218" cy="28" r="4" fill="#60a5fa" opacity="0.9" />
                <circle cx="218" cy="28" r="8" fill="#60a5fa" opacity="0.4" />

                {/* r */}
                <text x="230" y="34" fontFamily="ui-monospace, monospace" fontSize="32" fontWeight="800" fill="currentColor" className="text-foreground">
                    r
                </text>
                <circle cx="250" cy="28" r="4" fill="#60a5fa" opacity="0.9" />
                <circle cx="250" cy="28" r="8" fill="#60a5fa" opacity="0.4" />

                {/* a */}
                <text x="262" y="34" fontFamily="ui-monospace, monospace" fontSize="32" fontWeight="800" fill="currentColor" className="text-foreground">
                    a
                </text>
                <circle cx="288" cy="28" r="4" fill="#60a5fa" opacity="0.9" />
                <circle cx="288" cy="28" r="8" fill="#60a5fa" opacity="0.4" />

                {/* w */}
                <text x="300" y="34" fontFamily="ui-monospace, monospace" fontSize="32" fontWeight="800" fill="currentColor" className="text-foreground">
                    w
                </text>
                <circle cx="338" cy="28" r="4" fill="#60a5fa" opacity="0.9" />
                <circle cx="338" cy="28" r="8" fill="#60a5fa" opacity="0.4" />

                {/* l */}
                <text x="350" y="34" fontFamily="ui-monospace, monospace" fontSize="32" fontWeight="800" fill="currentColor" className="text-foreground">
                    l
                </text>
                <circle cx="368" cy="28" r="4" fill="#60a5fa" opacity="0.9" />
                <circle cx="368" cy="28" r="8" fill="#60a5fa" opacity="0.4" />

                {/* l */}
                <text x="380" y="34" fontFamily="ui-monospace, monospace" fontSize="32" fontWeight="800" fill="currentColor" className="text-foreground">
                    l
                </text>
            </svg>

            <span className="mt-4 text-sm font-medium text-muted-foreground tracking-wider">
        MindScrawl
      </span>
        </div>
    );
}