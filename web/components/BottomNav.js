'use client'

import { useState } from 'react'
import {
  Menu,
  Home,
  User,
  ShoppingCart,
  Search,
} from 'lucide-react'
import SideMenu from './SideMenu'

export default function BottomNav() {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const cart = []
  const cartItemCount = cart.length

  const items = [
    { key: 'menu', icon: <Menu className="w-6 h-6" /> },
    { key: 'home', icon: <Home className="w-6 h-6" /> },
    { key: 'user', icon: <User className="w-6 h-6" /> },
    {
      key: 'cart',
      icon: <ShoppingCart className="w-6 h-6" />,
      badge: cartItemCount > 0 ? cartItemCount : null,
    },
    { key: 'search', icon: <Search className="w-6 h-6" /> },
  ]

  const handleClick = (key) => {
    setActive(key)
    if (key === 'menu') setMenuOpen(true)
  }

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 shadow-md z-50">
        {items.map(({ key, icon, badge }) => (
          <button
            key={key}
            onClick={() => handleClick(key)}
            className={`relative flex flex-col items-center text-sm ${
              active === key ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            {icon}
            {badge && (
              <span className="absolute -top-1 right-0 text-[10px] bg-red-500 text-white rounded-full px-1.5">
                {badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {menuOpen && <SideMenu onClose={() => setMenuOpen(false)} />}
    </>
  )
}
