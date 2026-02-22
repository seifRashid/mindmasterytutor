"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
    {
        title: "Grades",
        links: [
            { name: "Grade 6", href: "/grade-6" },
            { name: "Grade 7", href: "/grade-7" },
            { name: "Grade 8", href: "/grade-8" },
            { name: "Grade 9", href: "/grade-9" },
        ],
    },
    {
        title: "Subjects",
        links: [
            { name: "Mathematics", href: "/mathematics" },
            { name: "Integrated Science", href: "/science" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About Us", href: "/about" },
            { name: "Contact", href: "/contact" },
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
        ],
    },
];

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold text-white tracking-tight">
                            MindMastery Tutor
                        </Link>
                        <p className="text-sm text-slate-400 max-w-xs">
                            Empowering maximize student potential with CBC aligned revision materials and video solutions.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="hover:text-white transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></Link>
                        </div>
                    </div>

                    {/* Links Columns */}
                    {footerLinks.map((section) => (
                        <div key={section.title} className="space-y-4">
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">{section.title}</h3>
                            <ul className="space-y-2 text-sm">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="hover:text-white transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
                    &copy; {new Date().getFullYear()} MindMastery Tutor. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
