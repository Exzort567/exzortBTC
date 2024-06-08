import Image from "next/image";
import { FloatingNavDemo } from "./navbar";

export default function Home() {
  return (
    <div className="w-full md:items-center bg-black/[0.86] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <FloatingNavDemo/>
    </div>
  );
}
