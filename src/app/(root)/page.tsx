import Link from "next/link";

export default function Home() {
  return (
    <div className="text-4xl font-semibold flex justify-center items-center h-dvh">
      Click <Link href="/documents/123" className="text-blue-500 underline px-1">here</Link> to go to document id
    </div>
  );
}
