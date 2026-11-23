"use client";
import { useState, useEffect } from "react";

type Thought = {
    id: number;
    text: string;
    time: string;
};

export default function DailyThought() {
    
    const [input, setInput] = useState("");
    const [thoughts, setThoughts] = useState<Thought[]>([]);

    // Load saved thoughts once, when the component first appears in the browser
    useEffect(() => {
        const saved = localStorage.getItem("dailyThoughts");
        if (saved) {
            setThoughts(JSON.parse(saved));
        }
    }, []) // Dependency array, runs once when the page loads

    const handleSave = () => {
        if (input.trim() === "") return;

        const timestamp = new Date().toLocaleString("en-us", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit"
        });

        const newThought = {id: Date.now(), text: input, time: timestamp}
        const updated = [newThought, ...thoughts];
        setThoughts(updated); // Store the new thought in front of the previous thoughts
        localStorage.setItem("dailyThoughts", JSON.stringify(updated));
        setInput("");
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
                className="mt-3 bg-white text-brand px-4 py-2 rounded-md font-semibold hover:bg-black transition-colors cursor-pointer"
            >
                Save Thought
            </button>

            <div className="mt-5 space-y-3 text-left">
                {
                    thoughts.length === 0 ? (
                        <p className="italic text-center">No thoughts here...</p>
                    ) : (
                        thoughts.slice(0, 5).map((thought) => (
                            <div key={thought.id} className="bg-white/20 p-3 rounded-lg shadow-sm">
                                <p className="text-lg">{thought.text}</p>
                                <p className="text-sm opacity-80 mt-1">{thought.time}</p>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
}