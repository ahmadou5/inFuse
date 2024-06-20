import { Home2 } from "@/components/Home";
import { Menu } from "@/components/Home/menu";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black items-center justify-between ">
      <Home2 />
      <Menu />
    </main>
  );
}
