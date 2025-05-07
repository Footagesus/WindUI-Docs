import Link from 'next/link';
import { ArrowRight, SlidersVertical, CodeXml, Heart, Github } from 'lucide-react';

export default function HomePage() {
    return (
        <main className="flex flex-1 flex-col text-left relative w-full overflow-x-hidden p-0 m-0 top-0 min-h-full">
            <div className="min-h-screen py-8 w-full relative flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/6 left-1/6 w-[30%] aspect-square rounded-full bg-green-400 blur-3xl"></div>
                    <div className="absolute bottom-3/5 right-1/7 w-[40%] aspect-square rounded-full bg-blue-400 blur-3xl"></div>
                </div>

                <div className="z-20 text-left max-w-3xl px-6 my-10 flex flex-col justify-start ">
                    <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Create beautiful UI with <span className="font-bold bg-gradient-to-r from-[#00FF87] to-[#60EFFF] bg-clip-text text-transparent brightness-90 dark:brightness-100 inline-block">WindUI</span>
                    </h1>
                    <p className="mb-8 text-xl opacity-60 max-w-2xl mx-auto">
                        {`A modern, lightweight UI Library
                          Simple design, and Open Source code.`}
                    </p>
                    <div className="flex flex-row gap-2 justify-start">
                        <Link href="/docs/" className="
                            relative flex flex-row items-center gap-2
                            dark:bg-zinc-600 bg-zinc-950 
                            border dark:border-white/10
                            h-12 px-4
                            text-white rounded-xl
                            active:brightness-110 font-medium
                        ">
                            <ArrowRight className="text-zinc-300" /> Get Started
                        </Link>
                        <Link href="/components" className="
                            relative flex flex-row items-center gap-2
                            dark:bg-transparent bg-white
                            border dark:border-white/20 border-black/15
                            dark:shadow-none shadow-sm
                            h-12 px-4 
                            dark:text-white text-black rounded-xl
                            dark:active:bg-white/5 active:brightness-95 font-medium
                        ">
                            <Github className="text-zinc-300" /> Github
                        </Link>
                    </div>
                </div>

                <div className="w-full px-6 relative bottom-0 w-full max-w-3xl translate-y-1/4">
                    <div className=" p-5 dark:bg-white/3 bg-black/10 rounded-[20px]">
                        <img
                            className="w-full object-cover opacity-90 drop-shadow-2xl drop-shadow-black/50"
                            src="https://raw.githubusercontent.com/Footagesus/WindUI/main/docs/ui.png"
                            alt="WindUI Components Preview"
                        />
                    </div>
                </div>
            </div>

            <div className="dark:bg-white/3 bg-black/10 py-16 px-6 relative text-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-5 rounded-2xl bg-white/3 hover:shadow-md transition-all flex flex-col gap-3 border-2 border-transparent relative shadow-lg shadow-emerald-600/20">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 -z-10"></div>
                        <div className="absolute inset-[2px] rounded-[14px] bg-neutral-950/95 -z-10"></div>

                        <div className="">
                            <SlidersVertical />
                        </div>
                        <h3 className="text-lg font-semibold">Customizable</h3>
                        <p className="opacity-40">Easily customize components to match your brand and design system.</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/3 hover:shadow-md transition-all flex flex-col gap-3 border-2 border-transparent relative shadow-lg shadow-purple-600/20">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 -z-10"></div>
                        <div className="absolute inset-[2px] rounded-[14px] bg-neutral-950/95 -z-10"></div>

                        <div className="">
                            <CodeXml />
                        </div>
                        <h3 className="text-lg font-semibold">Developer Friendly</h3>
                        <p className="opacity-40">Built with modern web standards and developer experience in mind.</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/3 hover:shadow-md transition-all flex flex-col gap-3 border-2 border-transparent relative shadow-lg shadow-orange-600/20">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 to-rose-500 -z-10"></div>
                        <div className="absolute inset-[2px] rounded-[14px] bg-neutral-950/95 -z-10"></div>

                        <div className="">
                            <Heart />
                        </div>
                        <h3 className="text-lg font-semibold">Open Source</h3>
                        <p className="opacity-40">Free to use in personal and commercial projects with active community support.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}