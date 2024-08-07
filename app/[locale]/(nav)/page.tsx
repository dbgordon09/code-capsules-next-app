import Link from "next/link";
import { ModalButton } from "./components/ModalButton";

export default async function Page() {
  return (
    <section className="flex flex-col gap-2">
      <article className="flex">
        This is an&nbsp;
        <pre>
          <code>&lt;article&gt;</code>
        </pre>
        📝
      </article>
      <div className="flex gap-2">
        <ModalButton>
          Open&nbsp;
          <pre>
            <code>&lt;dialog&gt;</code>
          </pre>
        </ModalButton>
        <Link href="/en/modal">
          <button className="btn">
            Open parallel route&nbsp;
            <pre>
              <code>&lt;dialog&gt;</code>
            </pre>
          </button>
        </Link>
      </div>
    </section>
  );
}
