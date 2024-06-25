import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <main className="h-4/5 flex items-center justify-around">
    <div className="bg-white h-5/6 w-1/3 z-10 relative flex flex-col items-center justify-around rounded-lg">
      {/* <Image src="/" alt="eras tour" width={500} height={500}/> */}
      <h3 className="text-3xl">Intro</h3>
      <Link href="/quiz" className="text-home-font border-4 border-home-font rounded-lg px-10 py-3 text-3xl">Start Quiz</Link>
      </div>
    <Image src="/pq1.jpeg" alt="pink gradient background" fill={true}/>
  </main>
  );
}