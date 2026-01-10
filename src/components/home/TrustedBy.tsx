import React from 'react'
import {COMPANY} from "@/constants/constant";
import Image from "next/image";

const TrustedBy = () => {
    return (
        <section className="py-20 px-6 bg-muted/10">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-6xl font-bold text-gray-900 mb-8 dark:text-gray-200">Partnership & Collaboration</h1>
                <p className="text-2xl text-muted-foreground mb-12">Trusted by teams at</p>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 opacity-60">
                    {COMPANY.map((company, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center h-28 w-full bg-muted rounded-xl p-4"
                        >
                            <Image
                                src={company.image}
                                alt={company.name}
                                width={140} // Increased base size
                                height={140}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    ))}
                </div>
                <p className="text-2xl text-muted-foreground mt-12">And many more</p>
            </div>
        </section>

    )
}
export default TrustedBy
