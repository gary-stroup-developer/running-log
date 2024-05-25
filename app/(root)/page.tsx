import { Button } from "@/components/ui/button";
import golang  from "../../public/golang gopher.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Gary Stroup</div>
      <p>This is just something to try</p>
      <Image className="rounded-full" src={golang} alt="test" width={175} height={175} />
      <Button size={"lg"} className="bg-red-500">Signup</Button>
    </main>
  );
}
