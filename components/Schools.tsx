"use client";

import { Button } from "@/components/ui/button";
import { School, ArrowRight } from "lucide-react";

export function Schools() {
    return (
        <section className="py-24 bg-blue-900 text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white blur-3xl" />
                <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-white blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center">
                <div className="inline-flex items-center rounded-full border border-blue-400 bg-blue-800/50 px-3 py-1 text-sm font-medium text-blue-100 mb-8">
                    <School className="mr-2 h-4 w-4" />
                    For Schools & Tuition Centres
                </div>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                    Empower Your Classroom
                </h2>

                <p className="mx-auto max-w-2xl text-lg text-blue-100 mb-10 leading-relaxed">
                    Get bulk access for your students, track performance, and access teacher-only resources.
                    Perfect for schools and tuition centres looking to upgrade their revision materials.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                    <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 w-full sm:w-auto">
                        Request School Access
                    </Button>
                    <Button size="lg" variant="outline" className="border-blue-400 text-white hover:bg-blue-800 hover:text-white w-full sm:w-auto mt-2 sm:mt-0">
                        Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
