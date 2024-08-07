import Image from "next/image";
import Link from "next/link";

export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <header
        role="banner"
        className="h-14 bg-zinc-950 flex justify-center text-white"
      >
        <nav className="h-full flex items-center w-11/12 gap-4">
          <Link href="/">
            <Image src="\plusonexlogo.svg" alt="Logo" height={48} width={48} />
          </Link>
          <div className="flex">
            This is a&nbsp;
            <pre>
              <code>&lt;header&gt;</code>
            </pre>
            🗣
          </div>
          ️
        </nav>
      </header>
      <main className="grow p-4">{children}</main>
      <footer className="min-h-32 bg-zinc-950 text-white flex justify-center p-6">
        <nav className="w-10/12">
          <div className="flex">
            This is a&nbsp;
            <pre>
              <code>&lt;footer&gt;</code>
            </pre>
            🦶
          </div>
        </nav>
      </footer>
    </>
  );
}
