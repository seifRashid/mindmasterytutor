"use client";

import { motion } from "framer-motion";
import { MousePointerClick, BookOpen, PlayCircle } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Choose Your Grade",
        description: "Select your specific grade level (Grade 6-9) to access relevant curriculum-aligned content.",
        icon: MousePointerClick,
        color: "bg-blue-100 text-blue-600",
    },
    {
        id: 2,
        title: "Pick a Topic",
        description: "Browse through our structured list of topics in Mathematics or Integrated Science.",
        icon: BookOpen,
        color: "bg-amber-100 text-amber-600",
    },
    {
        id: 3,
        title: "Practice & Master",
        description: "Download worksheets, attempt questions, and watch video solutions to verify your answers.",
        icon: PlayCircle,
        color: "bg-emerald-100 text-emerald-600",
    },
];

export function HowItWorks() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        How MindMastery Works
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        A simple 3-step process to improve your grades.
                    </p>
                </div>

                <div className="relative grid gap-8 md:grid-cols-3">
                    {/* Connecting Line (Desktop Only) */}
                    <div className="absolute top-12 left-0 w-full hidden md:block">
                        <div className="h-0.5 w-full border-t-2 border-dashed border-slate-200" />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="relative flex flex-col items-center text-center"
                        >
                            <div className={`relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl shadow-sm mb-6 ${step.color}`}>
                                <step.icon size={40} />
                                <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-sm border-4 border-white">
                                    {step.id}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-600 max-w-xs">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
