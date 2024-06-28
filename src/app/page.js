import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <main className="h-4/5 flex items-center justify-around">
    <div className="bg-white h-5/6 w-1/3 z-10 relative flex flex-col items-center justify-evenly rounded-lg px-8 text-center">
      <Image src="/home.jpg" alt="eras tour" className="rounded-md" width={500} height={300}/>
      <h3 className="text-2xl">Take the quiz now and uncover your Taylor Swift persona! Whether you're a longtime Swiftie or just curious, this quiz promises to be a dazzling journey through Taylor's musical evolution.</h3>
      <Link href="/quiz" className="text-home-font border-4 border-black border-home-font rounded-lg px-10 py-3 text-3xl hover:text-red-300 hover:border-red-300">Start Quiz</Link>
      </div>
    <Image src="/pq1.jpeg" alt="pink gradient background" fill={true}/>
  </main>
  );
}