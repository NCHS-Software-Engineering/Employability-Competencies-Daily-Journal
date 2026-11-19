"use client";
import { useState } from "react";

type Thought = {
    id: number;
    text: string;
};

export default function DailyThought() {
    const [input, setInput] = useState("");
    const [thoughts, setThoughts] = useState<Thought[]>([]);

    const handleSave = () => {
        if (input.trim() === "") return;

        const newThought = {id: Date.now(), text: input}
        setThoughts([newThought, ...thoughts]); // Store the new thought in front of the previous thoughts
    }

    return (
        <div className="bg-brand text-white p-6 rounded-xl shadow-md text-center max-w-md w-full ml-2 mt-2">
            <h2 className="text-xl font-bold mb-3">Daily Thoughts</h2>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your thoughts for the day..."
                className="w-full p-2 rounded-md bg-white text-black resize-none"
            />
            <button
                onClick={handleSave}
                className="mt-3 bg-white text-brand px-4 py-2
                rounded-md font-semibold hover:bg-black transition-colors cursor-pointer"
            >
                Save Thought
            </button>

            <div className="mt-5 space-y-3 text-left">
                {
                    thoughts.length === 0 ? (
                        <p className="italic text-center">No thoughts here...</p>
                    ) : (
                        thoughts.map((thought) => (
                            <div key={thought.id} className="bg-white/20 p-3 rounded-lg shadow-sm">
                                <p className="text-lg">{thought.text}</p>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
}