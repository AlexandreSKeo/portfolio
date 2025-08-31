import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-16 mesh-gradient">
      <header className="w-full">
        <div className="flex gap-8 justify-center">
          <Link href="https://github.com/alexandreskeo">Github</Link>
          <Link href="https://www.linkedin.com/in/alexandreskeo/">
            LinkedIn
          </Link>
          <Link href="https://x.com/alexandreskeo">X</Link>
          <Link href="mailto:alexandrekeo@icloud.com">Contact</Link>
        </div>
      </header>
      <main className="flex flex-col items-center w-full">
        <div className="w-11/12 max-w-xl p-20 gap-4 flex flex-col text-center text-white backdrop-blur-sm border border-[var(--border-subtle)] rounded-md shadow-xl">
          <h1 className="text-3xl font-bold">Welcome</h1>
          <p className="text-lg">
            I&apos;m a software developer with a passion for building projects.
          </p>
        </div>
      </main>
      <footer className="w-full flex flex-row justify-between text-sm">
        <p>Alexandre Keo</p>
        <p>Junior Software Developer, Montreal, Canada</p>
      </footer>
    </div>
  );
}
