import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '엘에스발레스튜디오 공덕역점 - YouTube 채널 운영 서비스',
  description: '발레 스튜디오를 위한 YouTube 채널 기획, 촬영, 편집, 운영까지 올인원 서비스. 첫달 150만원 특별 프로모션.',
  keywords: '발레스튜디오, YouTube, 채널운영, 공덕역, 발레, 마케팅',
  openGraph: {
    title: '엘에스발레스튜디오 공덕역점 - YouTube 채널 운영',
    description: '월 250만원으로 YouTube 채널을 완벽하게 운영해드립니다.',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}