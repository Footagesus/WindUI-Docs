import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Link from 'next/link';
import Tag from '@/components/tag'

import {Github} from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
    nav: {
        title: (
            <>
                { /* <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Logo"
                >
                    <circle cx={12} cy={12} r={12} fill="currentColor" />
                </svg> */ }
                <p className="font-semibold text-xl">WindUI</p>
                <div className="flex flex-row items-center gap-1.5 hidden">
                    <Link href="https://github.com/Footagesus/WindUI/releases/tag/1.6.53"> <Tag className="bg-[hsl(147,100%,59%)] text-[hsl(147,100%,5%)] !px-2.5 !py-1.5">v1.6.53</Tag> </Link>
                    <Tag className="bg-[hsl(47,100%,59%)] text-[hsl(47,100%,5%)] !px-2.5 !py-1.5">Beta</Tag>
                
                </div>
            </>
        ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
        {
            text: 'Documentation',
            url: '/docs',
        },
        {
            type: 'icon',
            label: 'Github Project', // `aria-label`
            icon: <Github />,
            text: 'Github Repository',
            url: 'https://github.com/Footagesus/WindUI',
        },
    ],
};
