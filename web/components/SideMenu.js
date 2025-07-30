'use client'

export default function SideMenu({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-transparent bg-opacity-40">
      <div className="fixed left-0 top-0 h-full w-[80%] max-w-xs bg-white p-4 overflow-y-auto">
        <div className="flex justify-end mb-4">
          <button onClick={onClose}>✖</button>
        </div>
        <ul className="space-y-4 text-base">
          <li><a href="/">首頁 Home</a></li>
          <li><a href="/login">登入/註冊</a></li>
          <li>
            商品分類
            <ul className="ml-4 mt-2 space-y-2 text-sm">
              <li>品牌 A → 上衣 / 褲子 / 配件</li>
              <li>品牌 B → 上衣 / 配件</li>
            </ul>
          </li>
          <li><a href="/contact">聯絡我們</a></li>
        </ul>
      </div>
    </div>
  )
}
