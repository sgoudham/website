import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-8 mx-12 text-center items-center justify-center h-screen">
      <h1 className="font-medium text-4xl">
        This page doesn&apos;t exist yet.
      </h1>
      <h2>
        <Link href="/" className="text-blue underline text-lg">
          Return Home
        </Link>
      </h2>
    </div>
  );
}
