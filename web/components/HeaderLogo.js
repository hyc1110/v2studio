"use client"
import Image from "next/image"

export default function HeaderLogo() {
  return (
    <header className="flex items-center px-4 py-3 shadow-md">
      {/* 加了 flex-row：圖片和字會左右排 */}
      <div className="flex flex-row items-center gap-2">
        <Image src="/image/logo.png" alt="Logo" width={120} height={40} priority />
        <span className="text-xl font-bold tracking-wide">V2 STUDIO</span>
      </div>
    </header>
  )
}