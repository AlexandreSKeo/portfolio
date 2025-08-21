import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header>
        <div className="flex gap-4">
          <Link href="https://github.com/alexandreskeo">Github</Link>
          <Link href="https://www.linkedin.com/in/alexandreskeo/">LinkedIn</Link>
          <Link href="https://x.com/alexandreskeo">X</Link>
          <Link href="mailto:alexandrekeo@icloud.com">Contact</Link>
        </div>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1>Welcome</h1>
        <p>I&apos;m a software developer with a passion for building projects.</p>
      </main>
    </div>
  );
}
