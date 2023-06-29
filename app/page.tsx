import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-neutral-50 gap-8">
      AI CHATBOT
      <div className="py-2 px-3 w-full border rounded-md w-full flex-grow"></div>
      <input type="text" placeholder="enter your message..." className="py-2 px-3 w-full border rounded-md bg-black" />
    </main>
  )
}
