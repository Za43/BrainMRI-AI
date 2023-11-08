"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Recorder from "@/components/Recorder";

interface ResponseData {
  response: { text: string }[];
}

export default function Home() {
  const [userQuery, setUserQuery] = useState("");
  const [responseData, setResponseData] = useState<ResponseData | any | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuery = () => {
    setIsLoading(true);
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

            summary: [
              {
                summarizerPromptName: "vectara-summary-ext-v1.2.0",
                responseLang: "en",
                maxSummarizedResults: 5,
              },
            ],
          },
        ],
      }),
      method: "post",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResponseData(data.responseSet[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-10">Brain MRI AI</h1>

      <Image
        src="/example.jpeg"
        alt="Brain X-ray"
        width={500}
        height={300}
        className="mb-10 rounded-lg shadow-2xl"
      />
      <Recorder />
      <Textarea
        placeholder="Please write down your findings"
        onChange={(e) => setUserQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-5"
      />

      <Button
        onClick={handleQuery}
        className="w-full py-2 px-4 bg-slate-800 text-white font-semibold rounded-lg shadow-md hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-75"
      >
        <Sparkles className="h-4 w-4 mr-3 " /> Analyze using previous case studies
      </Button>

      {isLoading ? (
        <div className="mt-5">
          <div className="animate-pulse flex space-x-2">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2  bg-slate-300 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 w-96 bg-slate-300 rounded col-span-2"></div>
                  <div className="h-2  bg-slate-300 rounded col-span-1"></div>
                </div>
                <div className="h-2  bg-slate-300 rounded"></div>
                <div className="h-2  bg-slate-300 rounded"></div>
                <div className="h-2  bg-slate-300 rounded"></div>
                <div className="h-2  bg-slate-300 rounded"></div>
                <div className="h-2  bg-slate-300 rounded"></div>
                <div className="h-2  bg-slate-300 rounded"></div>
                <div className="h-2  bg-slate-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        responseData && (
          <div className="mt-5">
            <h2 className="text-2xl font-bold mb-3">Summary:</h2>
            {responseData.summary.map((item: any, index: any) => (
              <p
                key={index}
                className="mb-1"
              >
                {item.text}
              </p>
            ))}

            <h2 className="text-2xl font-bold mt-5 mb-3">Sources:</h2>
            <ol className="list-decimal list-inside">
              {responseData.response.map((item: any, index: any) => (
                <li
                  key={index}
                  className="mb-1"
                >
                  {item.text}
                </li>
              ))}
            </ol>
          </div>
        )
      )}
    </main>
  );
}
