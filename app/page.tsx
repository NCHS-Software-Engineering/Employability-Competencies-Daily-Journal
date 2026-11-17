import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 w-full max-w-3xl flex-col
    py-5 bg-white
    dark:bg-black sm:items-start">
      <h1 className="text-3xl font-bold text-brand">
        Welcome to My Journal
      </h1>
      <h2 className="text-2xl ml-10">A Place for Competent Journal Entries</h2>
      <p>Enter your journal thoughts and choose your employability competencies below.</p>
    </main>
  );
}
