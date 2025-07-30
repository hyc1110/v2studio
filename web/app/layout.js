import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata = {
  title: "V2 STUDIO",
  description: "V2 STUDIO 官方服飾網站",
}
// ✅ 這段才是正確設定 viewport 的位置！
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};
export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header /> {/* ✅ 固定在上方 */}
        <div className="pt-[60px]">{children}</div> {/* ✅ 預留導覽列高度 */}
      </body>
    </html>
  )
}
