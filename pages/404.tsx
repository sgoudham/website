import { pacifico } from "@/pages/index";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className={`flex flex-col items-center ${pacifico.variable} justify-center h-screen`}>
      <div className="font-pacifico text-center leading-relaxed md:leading-normal">
        <h1 className="text-3xl text-base mb-10">
          404 | Page Not Found
        </h1>
        <h2 className="text-2xl text-crust underline">
          <Link href="/">Go Back Home</Link>
        </h2>
      </div>
    </div>
  )
}