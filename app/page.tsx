"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const handleQuery = () => {
  fetch("https://api.vectara.io:443/v1/query", {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "zwt_7UYiqRAuYx3q43vUQa47TqwD-_xVPlfAHljLmg",
      "customer-id": "3980796585",
    },
    body: JSON.stringify({
      query: [
        {
          query: "TELL ME ABOUT BRAIN?",
          num_results: 10,
          corpus_key: [{ customer_id: "3980796585", corpus_id: "6" }],
        },
      ],
    }),
    method: "post",
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-10">
      <h1>Radiology findings</h1>
      <h1>Relevant information & resources</h1>

      <Button
        onClick={handleQuery}
        className="max-w-sm"
      >
        Analzye
      </Button>
      <div>PDF name</div>
    </main>
  );
}
