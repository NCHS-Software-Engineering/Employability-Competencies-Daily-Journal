"use client";
import { useEffect, useState } from "react";

type Thought = {
    id: number;
    text: string;
    time: string;
}

// A page.tsx is a component as well. Its folder name (thoughts) becomes its URL (/thoughts)
export default function ThoughtsPage() {
    const [thoughts, setThoughts] = useState<Thought[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem("dailyThoughts");
        if (saved) {
            setThoughts(JSON.parse(saved));
        }
    }, [])

    return (
        <main className="flex flex-col items-center p-6">
            <div className="max-w-2xl w-full bg-white text-black p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-brand">
                    All My Thoughts
                </h2>
                <div className="space-y-3 text-left">
                    {thoughts.length === 0 ? (
                        <p className="italic text-center">No thoughts yet.</p>
                    ) : (
                        thoughts.map((thought) => (
                            <div key={thought.id} className="bg-white/20 p-3 rounded-lg shadow-sm">
                                <p className="text-lg">{thought.text}</p>
                                <p className="text-sm opacity-80 mt-1">{thought.time}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </main>
    );
}