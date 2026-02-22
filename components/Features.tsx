"use client";

import { motion } from "framer-motion";
import { FileText, CheckCircle2, Video, Award } from "lucide-react";

const features = [
    {
        title: "Curriculum Aligned",
        description: "All resources are strictly aligned with the Kenyan CBC curriculum designs.",
        icon: Award,
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "Printable Worksheets",
        description: "Download high-quality PDF worksheets for offline practice and revision.",
        icon: FileText,
        color: "bg-emerald-50 text-emerald-600",
    },
    {
        title: "Marking Schemes",
        description: "Instant access to detailed marking schemes for self-assessment.",
        icon: CheckCircle2,
        color: "bg-amber-50 text-amber-600",
    },
    {
        title: "Video Solutions",
        description: "Step-by-step video walkthroughs for complex problems.",
        icon: Video,
        color: "bg-indigo-50 text-indigo-600",
    },
];

export function Features() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                            Why Choose MindMastery?
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            We provide a complete ecosystem for student success, focusing on clarity, practice, and feedback.
                        </p>

                        <div className="grid gap-6 sm:grid-cols-2">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex flex-col">
                                    <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-4 ${feature.color}`}>
                                        <feature.icon size={24} />
                                    </div>
                                    <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-200 p-2">
                        {/* Mockup of a worksheet or video player */}
                        <div className="h-full w-full bg-slate-100 rounded-xl relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                <div className="text-center">
                                    <Video size={48} className="mx-auto mb-2 opacity-50" />
                                    <span className="text-sm font-medium">Video Interface Preview</span>
                                </div>
                            </div>
                            {/* Overlay Elements */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-lg shadow-lg flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <CheckCircle2 size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">Concept Mastered</div>
                                    <div className="text-xs text-green-600 font-medium">Algebraic Equations</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
