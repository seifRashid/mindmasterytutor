"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, CheckCircle2, PlayCircle, Download, Lock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";

// Mock Data
const subjectData: Record<string, { title: string; color: string; topics: { name: string; resources: string[] }[] }> = {
    mathematics: {
        title: "Mathematics",
        color: "bg-blue-50 text-blue-900",
        topics: [
            { name: "Numbers & Operations", resources: ["Worksheet", "Marking Scheme", "Video"] },
            { name: "Algebraic Expressions", resources: ["Worksheet", "Marking Scheme", "Video"] },
            { name: "Geometry & Measurement", resources: ["Worksheet", "Marking Scheme", "Video"] },
        ]
    },
    science: {
        title: "Integrated Science",
        color: "bg-emerald-50 text-emerald-900",
        topics: [
            { name: "Living Things", resources: ["Worksheet", "Marking Scheme", "Video"] },
            { name: "Matter", resources: ["Worksheet", "Marking Scheme", "Video"] },
            { name: "Force & Energy", resources: ["Worksheet", "Marking Scheme", "Video"] },
        ]
    }
};

import { use } from "react";

export default function SubjectPage({ params }: { params: Promise<{ gradeId: string; subjectId: string }> }) {
    const { gradeId, subjectId } = use(params);
    const subject = subjectData[subjectId];
    // Simple check if subject exists, real app would check grade alignment too
    if (!subject) {
        notFound();
    }

    // Format Grade Display
    const gradeDisplay = gradeId.replace("-", " ").replace(/\b\w/g, c => c.toUpperCase());

    return (
        <main className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <section className={`py-12 ${subject.color}`}>
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center gap-2 text-sm font-medium opacity-80 mb-6">
                        <Link href="/#grades" className="hover:underline">Grades</Link>
                        <span>/</span>
                        <Link href={`/grades/${gradeId}`} className="hover:underline">{gradeDisplay}</Link>
                        <span>/</span>
                        <span>{subject.title}</span>
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight mb-2">{gradeDisplay}: {subject.title}</h1>
                    <p className="text-lg opacity-90">Select a topic to access resources.</p>
                </div>
            </section>

            {/* Topics List */}
            <section className="container mx-auto px-4 md:px-6 -mt-6">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    {subject.topics.map((topic, index) => (
                        <TopicItem key={index} topic={topic} index={index + 1} />
                    ))}
                </div>
            </section>
        </main>
    );
}

function TopicItem({ topic, index }: { topic: { name: string; resources: string[] }; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-100 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
            >
                <div className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-sm">
                        {index}
                    </div>
                    <span className="font-semibold text-lg text-slate-900">{topic.name}</span>
                </div>
                <div className="text-sm text-slate-500 font-medium px-3 py-1 bg-slate-100 rounded-full">
                    {topic.resources.length} Resources
                </div>
            </button>

            {isOpen && (
                <div className="px-6 pb-6 pl-16 grid gap-3 sm:grid-cols-3">
                    {/* Mock Resource Cards */}
                    <div className="p-4 rounded-lg border border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer group">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded">
                                <FileText size={18} />
                            </div>
                            <span className="font-semibold text-sm">Worksheet</span>
                        </div>
                        <p className="text-xs text-slate-500 mb-3">Practice questions for {topic.name}.</p>
                        <Button size="sm" variant="outline" className="w-full h-8 text-xs gap-2">
                            <Download size={14} /> Download
                        </Button>
                    </div>

                    <div className="p-4 rounded-lg border border-slate-200 bg-white hover:border-amber-300 hover:shadow-sm transition-all cursor-pointer group">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-amber-50 text-amber-600 rounded">
                                <CheckCircle2 size={18} />
                            </div>
                            <span className="font-semibold text-sm">Marking Scheme</span>
                        </div>
                        <p className="text-xs text-slate-500 mb-3">Answers and detailed workings.</p>
                        <Button size="sm" variant="outline" className="w-full h-8 text-xs gap-2 bg-slate-50">
                            <Lock size={14} className="opacity-50" /> Premium
                        </Button>
                    </div>

                    <div className="p-4 rounded-lg border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-sm transition-all cursor-pointer group">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-indigo-50 text-indigo-600 rounded">
                                <PlayCircle size={18} />
                            </div>
                            <span className="font-semibold text-sm">Video Solution</span>
                        </div>
                        <p className="text-xs text-slate-500 mb-3">Step-by-step video guide.</p>
                        <Button size="sm" variant="outline" className="w-full h-8 text-xs gap-2">
                            <PlayCircle size={14} /> Watch Now
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
