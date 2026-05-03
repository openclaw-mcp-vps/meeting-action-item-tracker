import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Meeting Action Item Tracker",
  description: "Extract and track action items from meeting recordings automatically."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0a41e32e-af0e-4e67-8ab2-9ab4c95fcc93"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
