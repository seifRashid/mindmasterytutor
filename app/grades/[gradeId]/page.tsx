import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Calculator, FlaskConical, PlayCircle, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock Data for MVP
const gradeData: Record<string, { title: string; description: string; color: string }> = {
    "grade-6": {
        title: "Grade 6",
        description: "Upper Primary Foundation. Master the basics of algebra, geometry, and living things.",
        color: "bg-blue-50 text-blue-900",
    },
    "grade-7": {
        title: "Grade 7",
        description: "Junior Secondary Start. Dive deeper into equations, matter, and energy.",
        color: "bg-emerald-50 text-emerald-900",
    },
    "grade-8": {
        title: "Grade 8",
        description: "Building Core Concepts. Advanced algebra, chemical reactions, and forces.",
        color: "bg-amber-50 text-amber-900",
    },
    "grade-9": {
        title: "Grade 9",
        description: "Exam Preparation. Comprehensive revision for final assessments.",
        color: "bg-indigo-50 text-indigo-900",
    },
};

const subjects = [
    {
        id: "mathematics",
        title: "Mathematics",
        icon: Calculator,
        description: "Numbers, Algebra, Geometry, Data",
        color: "border-blue-200 bg-blue-50 text-blue-700",
        topics: [
            "Numbers & Operations",
            "Algebraic Expressions",
            "Geometry & Measurement",
            "Data Handling & Probability"
        ]
    },
    {
        id: "science",
        title: "Integrated Science",
        icon: FlaskConical,
        description: "Biology, Chemistry, Physics, Environment",
        color: "border-emerald-200 bg-emerald-50 text-emerald-700",
        topics: [
            "Living Things & Environment",
            "Matter & Its Properties",
            "Force, Energy & Machines",
            "Earth & Space"
        ]
    }
];

export function generateStaticParams() {
    return [
        { gradeId: "grade-6" },
        { gradeId: "grade-7" },
        { gradeId: "grade-8" },
        { gradeId: "grade-9" },
    ];
}

export default async function GradePage({ params }: { params: Promise<{ gradeId: string }> }) {
    const { gradeId } = await params;
    const grade = gradeData[gradeId];

    if (!grade) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 pb-20">
            {/* Hero Section */}
            <section className={`py-16 ${grade.color}`}>
                <div className="container mx-auto px-4 md:px-6">
                    <Link href="/#grades" className="inline-flex items-center text-sm font-medium mb-6 hover:underline opacity-80">
                        <ArrowLeft className="mr-1 h-4 w-4" />
                        Back to Grades
                    </Link>
                    <h1 className="text-4xl font-bold tracking-tight mb-4">{grade.title} Revision</h1>
                    <p className="text-xl opacity-90 max-w-2xl">{grade.description}</p>
                </div>
            </section>

            {/* Subjects Grid */}
            <section className="container mx-auto px-4 md:px-6 -mt-8">
                <div className="grid gap-6 md:grid-cols-2">
                    {subjects.map((subject) => (
                        <div key={subject.id} className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
                            <div className={`p-6 border-b ${subject.color}`}>
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="p-3 bg-white rounded-lg shadow-sm">
                                        <subject.icon size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold">{subject.title}</h2>
                                        <p className="text-sm opacity-90">{subject.description}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
                                    <BookOpen className="mr-2 h-4 w-4 text-slate-500" />
                                    Key Topics
                                </h3>
                                <div className="space-y-3">
                                    {subject.topics.map((topic, i) => (
                                        <div key={i} className="group flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-colors cursor-pointer">
                                            <span className="font-medium text-slate-700 group-hover:text-blue-700">{topic}</span>
                                            <div className="flex items-center gap-2 text-slate-400 group-hover:text-blue-500">
                                                <FileText size={16} title="Worksheet" />
                                                <PlayCircle size={16} title="Video" />
                                                <CheckCircle2 size={16} title="Marking Scheme" />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 pt-6 border-t border-slate-100">
                                    <Button className="w-full" variant="outline" asChild>
                                        <Link href={`/grades/${gradeId}/${subject.id}`}>
                                            View All {subject.title} Resources
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
