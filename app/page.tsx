import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-10">
      <h1>Radiology findings</h1>
      <h1>Relevant information & resources</h1>

      <Button className="max-w-sm">Analzye</Button>
      <div>PDF name</div>
    </main>
  );
}
