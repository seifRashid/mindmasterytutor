"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle, PlayCircle, BookOpen } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 pb-16 pt-20 md:pb-24 lg:pb-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <div className="space-y-4">
                            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                                Aligned with CBC Curriculum
                            </div>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-900">
                                CBC Revision Made Simple for <span className="text-primary">Grades 6–9</span>
                            </h1>
                            <p className="max-w-[600px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Unlock top-tier worksheets, marking schemes, and step-by-step video solutions designed specifically for the Kenyan Junior Secondary curriculum.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button size="lg" className="gap-2">
                                Start Learning Free
                            </Button>
                            <Button size="lg" variant="outline">
                                For Schools
                            </Button>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-slate-500">
                            <div className="flex items-center gap-1">
                                <CheckCircle className="h-4 w-4 text-secondary" />
                                <span>Mathematics</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <CheckCircle className="h-4 w-4 text-secondary" />
                                <span>Integrated Science</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <CheckCircle className="h-4 w-4 text-secondary" />
                                <span>Video Solutions</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Content / Dashboard Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative mx-auto w-full max-w-[500px] lg:max-w-none"
                    >
                        {/* Abstract Background Shapes */}
                        <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
                        <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />

                        {/* Dashboard Card */}
                        <div className="relative rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
                            {/* Header Mockup */}
                            <div className="border-b bg-slate-50 px-4 py-3 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="h-3 w-3 rounded-full bg-red-400" />
                                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                                    <div className="h-3 w-3 rounded-full bg-green-400" />
                                </div>
                                <div className="ml-4 h-2 w-32 rounded-full bg-slate-200" />
                            </div>

                            {/* Body Mockup */}
                            <div className="p-6 grid gap-6">
                                {/* Stats Row */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                                        <div className="text-sm text-blue-600 font-medium">Progress</div>
                                        <div className="text-2xl font-bold text-blue-900">85%</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                                        <div className="text-sm text-emerald-600 font-medium">Topics Mastered</div>
                                        <div className="text-2xl font-bold text-emerald-900">12</div>
                                    </div>
                                </div>

                                {/* Resource List */}
                                <div className="space-y-3">
                                    <div className="flex items-center p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                                        <div className="h-10 w-10 rounded bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                                            <BookOpen size={20} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm">Algebraic Expressions</div>
                                            <div className="text-xs text-slate-500">Grade 8 Mathematics</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                                        <div className="h-10 w-10 rounded bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
                                            <PlayCircle size={20} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm">Photosynthesis Process</div>
                                            <div className="text-xs text-slate-500">Grade 7 Integrated Science</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
