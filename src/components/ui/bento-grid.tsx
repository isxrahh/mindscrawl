// components/ui/bento-grid.tsx

import {cn} from "@/lib/utils";
import React from "react";

export const BentoGrid = ({className, children,}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn("grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-6 relative", className)}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({className, title, description, header, icon,}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "group/bento row-span-1 flex flex-col justify-between rounded-xl border bg-white dark:bg-black p-4 transition hover:shadow-xl",
                className
            )}
        >
            {header}
            <div className="mt-4">
                {icon}
                <h3 className="mt-2 font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </div>
    );
};
