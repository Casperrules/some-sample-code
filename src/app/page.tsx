import RandomNode from "@/components/random-node";
import Image from "next/image";
import Login from "./login/page";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Login />
    </div>
  );
}
