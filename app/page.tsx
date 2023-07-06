"use client";
import { useState } from 'react';


export default function Home() {
  const [prompt, setPrompt] = useState("")
  const [messages, setMessages] = useState(["Hello"])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-neutral-50 gap-8">
      AI CHATBOT
      <div className="py-2 px-3 w-full border border-slate-700 rounded-md flex-grow">{messages.map((message, i) => <p key={i}>{message}</p>)}</div>
      <form className="w-full" onSubmit={(e) => { setMessages([...messages, prompt]); e.preventDefault() }}>
        <input type="text" placeholder="enter your message..." className="py-2 px-3 w-full border border-slate-700 text-slate-200 rounded-md bg-black" value={prompt} onChange={(e) => { setPrompt(e.target.value) }} />
      </form>
    </main>
  )
}
