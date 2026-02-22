import { GradeSelection } from "@/components/GradeSelection";

export default function GradesPage() {
    return (
        <main className="min-h-screen bg-slate-50 pt-12">
            <div className="container mx-auto px-4 text-center mb-8">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900">All Grades</h1>
                <p className="mt-4 text-lg text-slate-600">Select your grade level to start revising.</p>
            </div>
            <GradeSelection />
        </main>
    );
}
