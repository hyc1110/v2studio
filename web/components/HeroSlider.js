'use client'

// 匯入 slick 套件樣式
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Slider from "react-slick"   // 載入 slick 的元件
import Image from "next/image"     // Next.js 的圖片處理元件


// 三組輪播資料，每組放一張圖片，之後可增加
const sliderData = [
  [
    { id: 1, image: "/image/clothes0.jpg", alt: "Slider 1" },
    { id: 2, image: "/image/clothes1.jpg", alt: "Slider 2" },
    { id: 3, image: "/image/clothes2.jpg", alt: "Slider 3" },
  ],
  [
    { id: 4, image: "/image/pants1.jpg", alt: "Slider 4" },
    { id: 5, image: "/image/pants2.jpg", alt: "Slider 5" },
    { id: 6, image: "/image/pants3.jpg", alt: "Slider 6" },
  ],
  [
    { id: 7, image: "/image/acc1.jpg", alt: "Slider 7" },
    { id: 8, image: "/image/acc2.jpg", alt: "Slider 8" },
  ]
]

// slick 設定
const settings = {
  dots: true,            // 顯示底部圓點
  infinite: true,        // 循環播放
  speed: 500,            // 切換速度
  slidesToShow: 1,       // 一次顯示一張
  slidesToScroll: 1,     // 一次滑動一張
  autoplay: true,        // 自動播放
  autoplaySpeed: 3000,   // 播放間隔時間
  arrows: false,         // 不顯示左右箭頭
}

export default function HeroSlider() {
  return (
    <div className="slider-container">
      {sliderData.map((group, index) => (
        <div key={index} className="slider-wrapper">
          <Slider {...settings}>
            {group.map((slide) => (
              <div key={slide.id} className="slide-item">
                <div className="image-wrapper">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  )
}
