'use client'

import { Menu, ShoppingCart, Search } from 'lucide-react'
import { useState } from 'react'
import SideMenu from './SideMenu'
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white border-b shadow-sm z-50">
        <div className="flex items-center justify-between px-4 py-3">
          {/* 左邊：三條線 */}
          <button onClick={() => setMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        {/* 中間：LOGO 圖片 + 店名 */}
        <div className="flex items-center space-x-2">
            <Image
            src="/image/logo.png" // 換成你的 logo 圖片路徑
            alt="logo"
             width={60}
            height={60}
            />
         <span className="text-lg font-semibold">V2 STUDIO</span>
        </div>
        
        

          {/* 右邊：搜尋與購物車 icon */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5" />
            <ShoppingCart className="w-5 h-5" />
          </div>
        </div>
      </header>

      {/* 選單彈出 */}
      {menuOpen && <SideMenu onClose={() => setMenuOpen(false)} />}
    </>
  )
}
