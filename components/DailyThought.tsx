export default function DailyThought() {
    return (
        <div className="bg-brand text-white p-6 rounded-xl shadow-md text-center max-w-md w-full ml-2 mt-2">
            <h2 className="text-xl font-bold mb-3">Daily Thoughts</h2>
            <textarea
                placeholder="Type your thoughts for the day..."
                className="w-full p-2 rounded-md bg-white text-black resize-none"
            />
        </div>
    );
}