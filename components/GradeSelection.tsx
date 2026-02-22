"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, User } from "lucide-react";

const grades = [
    {
        grade: "Grade 6",
        description: "Upper Primary Foundation",
        subjects: ["Mathematics", "Integrated Science"],
        color: "bg-blue-50 border-blue-100 text-blue-900",
        iconColor: "text-blue-600",
    },
    {
        grade: "Grade 7",
        description: "Junior Secondary Start",
        subjects: ["Mathematics", "Integrated Science"],
        color: "bg-emerald-50 border-emerald-100 text-emerald-900",
        iconColor: "text-emerald-600",
    },
    {
        grade: "Grade 8",
        description: "Building Core Concepts",
        subjects: ["Mathematics", "Integrated Science"],
        color: "bg-amber-50 border-amber-100 text-amber-900",
        iconColor: "text-amber-600",
    },
    {
        grade: "Grade 9",
        description: "Exam Preparation & Mastery",
        subjects: ["Mathematics", "Integrated Science"],
        color: "bg-indigo-50 border-indigo-100 text-indigo-900",
        iconColor: "text-indigo-600",
    },
];

export function GradeSelection() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Choose Your Grade Level
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Select a grade to access tailored revision materials and video lessons.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {grades.map((item, index) => (
                        <motion.div
                            key={item.grade}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className={`group relative flex flex-col justify-between rounded-2xl border p-6 transition-shadow hover:shadow-lg ${item.color}`}
                        >
                            <div>
                                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ${item.iconColor}`}>
                                    <User size={24} />
                                </div>
                                <h3 className="text-xl font-bold">{item.grade}</h3>
                                <p className="mt-2 text-sm opacity-90">{item.description}</p>

                                <div className="mt-6 space-y-2">
                                    <div className="text-xs font-semibold uppercase tracking-wider opacity-70">
                                        Subjects
                                    </div>
                                    {item.subjects.map((subject) => (
                                        <div key={subject} className="flex items-center gap-2 text-sm font-medium">
                                            <BookOpen size={14} className="opacity-70" />
                                            {subject}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8">
                                <Button className="w-full group-hover:bg-primary group-hover:text-white" variant="outline">
                                    Explore {item.grade}
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
