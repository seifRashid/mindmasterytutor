"use client";

import { motion } from "framer-motion";
import { Calculator, FlaskConical, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SubjectOverview() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Comprehensive Coverage for Core Subjects
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        We focus on the two most critical subjects in the CBC curriculum, providing deep, high-quality resources for mastery.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Mathematics Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl border border-slate-100"
                    >
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-blue-50 transition-transform group-hover:scale-110" />

                        <div className="relative">
                            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200">
                                <Calculator size={28} />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Mathematics</h3>
                            <p className="text-slate-600 mb-6">
                                Master numbers, algebra, geometry, and data handling with our structured approach.
                            </p>

                            <ul className="space-y-3 mb-8">
                                {[
                                    "Structured topic-by-topic breakdown",
                                    "Exam-style practice questions",
                                    "Step-by-step video solutions",
                                    "Downloadable marking schemes"
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-blue-500 shrink-0" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button variant="ghost" className="group/btn text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-semibold">
                                Explore Mathematics <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* Integrated Science Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl border border-slate-100"
                    >
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-emerald-50 transition-transform group-hover:scale-110" />

                        <div className="relative">
                            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-200">
                                <FlaskConical size={28} />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Integrated Science</h3>
                            <p className="text-slate-600 mb-6">
                                Understand scientific concepts through visual learning and practical application.
                            </p>

                            <ul className="space-y-3 mb-8">
                                {[
                                    "Clear concept explanations",
                                    "Visual problem solving guides",
                                    "Practical-based questions",
                                    "Comprehensive topic coverage"
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-emerald-500 shrink-0" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button variant="ghost" className="group/btn text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-0 h-auto font-semibold">
                                Explore Science <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
