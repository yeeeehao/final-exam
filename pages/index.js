import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="center">
      <Head>
        <title>Hao Final Exam</title>
      </Head>
      <h1>Hao Final Exam</h1>
      <p>This is the initial page to jump to the final exam.</p>
      <Link href="/suppliers">Suppliers</Link>
    </div>
  );
}
