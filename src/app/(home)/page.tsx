
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
    return (
        <main className="flex flex-1 flex-col justify-left items-center px-6">
            <div className="flex flex-col flex-1 justify-start gap-3 w-full max-w-4xl items-start my-52">
                <h1 className="text-[32px] sm:text-5xl font-bold">
                    Create beautiful scripts<br/>with <span className="font-bold bg-gradient-to-r from-[#00FF87] to-[#60EFFF] bg-clip-text text-transparent brightness-90 dark:brightness-100 inline-block text-shadow-xl text-shadow-[#00FF87]/30">WindUI</span>
                </h1>
                <p className="text-lg sm:text-xl font-normal opacity-60">
                    {`A modern UI Library.
                      Simple design, and Open Source code.`}
                </p>
                <div className="flex flex-row items-center justify-start gap-2 mt-8">
                    <Link href="/docs"> <Button className="!rounded-full h-10 superborder px-4">Documentation</Button> </Link>
                    <Link href="https://github.com/Footagesus/WindUI"> <Button className="!rounded-full h-10 superborder dark:bg-white/5 px-4" variant="ghost"><Github/>Github</Button> </Link>
                </div>
            </div>
        </main>
    );
}
