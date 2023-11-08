"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface ResponseData {
  response: { text: string }[];
}

export default function Home() {
  const [userQuery, setUserQuery] = useState("");
  const [responseData, setResponseData] = useState<ResponseData | null>(null);

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
            query: `${userQuery}`,
            num_results: 10,
            corpus_key: [{ customer_id: "3980796585", corpus_id: "6" }],
          },
        ],
        summary: [
          {
            summarizerPromptName: "vectara-experimental-summary-ext-2023-10-23-med",
            responseLang: "en",
            maxSummarizedResults: 5,
          },
        ],
      }),
      method: "post",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResponseData(data.responseSet[0]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-10">
      <h1>Radiology findings</h1>
      <h1>Relevant information & resources</h1>
      <Textarea
        placeholder="Write down your findings"
        onChange={(e) => {
          // console.log(e.target.value);
          setUserQuery(e.target.value);
        }}
      />
      <Button
        onClick={handleQuery}
        className="max-w-sm"
      >
        Analzye
      </Button>

      <div>PDF name</div>

      {responseData && (
        <div>
          {responseData.response.map((item: any, index: any) => (
            <p key={index}>{item.text}</p>
          ))}
        </div>
      )}
    </main>
  );
}
