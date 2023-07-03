"use client";
import { useState } from 'react';


export default function Home() {
  const [prompt, setPrompt] = useState("")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-neutral-50 gap-8">
      AI CHATBOT
      <div className="py-2 px-3 w-full border rounded-md w-full flex-grow"></div>
      <input type="text" placeholder="enter your message..." className="py-2 px-3 w-full border rounded-md bg-black" value={prompt} onChange={(e) => { setPrompt(e.target.value) }} />
    </main>
  )
}
