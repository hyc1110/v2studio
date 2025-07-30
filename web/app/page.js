import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import SideMenu from '@/components/SideMenu'
import { Instagram } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 主體內容：橫向排版 */}
      <div className="flex flex-1">
        {/* 桌機版左側功能列 */}
        <div className="hidden lg:block w-56">
          <SideMenu />
        </div>

        <div className="flex-1 flex flex-col">
          {/* 上方 LOGO + 店名 */}
          <Header />

          {/* 輪播區 */}
          <HeroSlider />
          {/* IG icon：置中顯示，點擊跳轉 IG */}
      <div className="flex justify-center py-4">
        <a
          href="https://www.instagram.com/v2studio_taiwan/" // 換成實際連結
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-pink-500 transition"
        >
          <Instagram className="w-8 h-8" />
        </a>
      </div>
      {/* 下方政策連結區塊 */}
<footer className="mt-10 border-t pt-4 pb-6 text-center text-sm text-gray-500">
  <a href="/refund" className="hover:underline">退款政策</a>
  <span className="mx-2">．</span>
  <a href="/privacy" className="hover:underline">隱私政策</a>
</footer>
        </div>
      </div>

      
    </div>
  )
}
