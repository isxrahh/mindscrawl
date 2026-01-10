import React from 'react'

const AiButton = () => {
    return (
        <button
            className="relative inline-flex items-center justify-center px-10 py-2 rounded-full text-md tracking-wider group overflow-hidden">
            <span
                className="absolute inset-0 rounded-full animate-ping opacity-30 bg-gradient-to-r from-purple-400 to-cyan-400"/>

            <span className="absolute inset-[2px] rounded-full bg-background/80 backdrop-blur-xl"/>

            <span
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 p-[1.5px]">
                  <span className="w-full h-full rounded-full bg-background/90 backdrop-blur-xl block"/>
            </span>

            <span
                className="relative z-10 bg-gradient-to-r from-cyan-100 via-purple-100 to-pink-100 bg-clip-text drop-shadow-2xl">
                Nexus AI
            </span>

        </button>

    )
}
export default AiButton
