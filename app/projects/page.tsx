import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-8 mx-12 text-center items-center justify-center h-screen">
      <h1 className="font-medium text-6xl">
        Soon&trade;
      </h1>
      <Link
        href="/"
        className="text-blue underline text-lg focus:outline-none focus:ring-1 focus:ring-blue"
      >
        Return Home
      </Link>
    </div>
  );
}
