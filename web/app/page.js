// ✅ app/page.js
import HeaderLogo from '@/components/HeaderLogo'
import HeroSlider from '@/components/HeroSlider'
import BottomNav from '@/components/BottomNav'
import SideMenu from '@/components/SideMenu'

export default function HomePage() {
  return (
    <div className="flex min-h-screen">
      {/* 桌機版左側功能列 */}
      <div className="hidden lg:block w-56">
        <SideMenu />
      </div>

      <div className="flex-1 flex flex-col">
        {/* 上方 LOGO + 店名 */}
        <HeaderLogo />

        {/* 輪播區 */}
        <HeroSlider />
      </div>

      {/* 手機底部功能列 */}
      <div className="lg:hidden">
        <BottomNav />
      </div>
    </div>
  )
}