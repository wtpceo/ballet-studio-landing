'use client'
import { useState } from 'react'
import { 
  Youtube, 
  TrendingUp, 
  DollarSign, 
  Camera, 
  Edit3, 
  BarChart3, 
  CheckCircle2,
  Users,
  Heart,
  Music,
  Award,
  Zap,
  Star,
  Phone,
  ChevronRight,
  ArrowRight,
  Sparkles
} from 'lucide-react'

export default function BalletStudioLanding() {
  const [hoveredIdea, setHoveredIdea] = useState<number | null>(null)

  const channelIdeas = [
    {
      title: "발레 스토리텔링",
      concept: "발레리나의 일상",
      series: [
        "발레리나의 하루 - 공덕점 선생님들의 24시간",
        "발레 부상 극복기 - 재활부터 무대 복귀까지",
        "발레 신발의 비밀 - 토슈즈 관리법과 선택 가이드"
      ],
      icon: <Heart className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      views: "예상 조회수 10K+"
    },
    {
      title: "발레 교육 콘텐츠",
      concept: "초보자를 위한 발레",
      series: [
        "5분 발레 스트레칭 - 매일 아침 루틴",
        "발레 기초 동작 마스터 - 주 1회 시리즈",
        "키즈 발레 홈트레이닝 - 부모님과 함께하는 발레"
      ],
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500",
      views: "예상 조회수 25K+"
    },
    {
      title: "발레 피트니스",
      concept: "발레핏 다이어트",
      series: [
        "발레핏 7일 챌린지 - 체형 교정 프로그램",
        "발레리나 몸매 만들기 - 부위별 운동법",
        "발레 요가 융합 - 유연성과 근력 동시에"
      ],
      icon: <Zap className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      views: "예상 조회수 50K+"
    },
    {
      title: "발레 문화 콘텐츠",
      concept: "발레 감상 가이드",
      series: [
        "유명 발레 작품 5분 해설 - 백조의 호수부터 지젤까지",
        "발레 공연 관람 에티켓과 팁",
        "세계 유명 발레단 소개 - 역사와 특징"
      ],
      icon: <Music className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      views: "예상 조회수 15K+"
    },
    {
      title: "발레 브이로그",
      concept: "리얼 발레 스튜디오",
      series: [
        "발레 스튜디오 일주일 - 수업 준비부터 마무리까지",
        "발레 의상실 투어 - 튜튜부터 레오타드까지",
        "발레 발표회 D-day - 무대 뒤 이야기"
      ],
      icon: <Camera className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      views: "예상 조회수 30K+"
    },
    {
      title: "발레 챌린지",
      concept: "함께하는 발레",
      series: [
        "#30일발레챌린지 - 매일 한 동작씩",
        "#발레포즈챌린지 - SNS 인증 이벤트",
        "#우리아이발레스타 - 키즈 발레 대회"
      ],
      icon: <Award className="w-6 h-6" />,
      color: "from-yellow-500 to-amber-500",
      views: "예상 조회수 100K+"
    }
  ]

  const services = [
    { icon: <Youtube className="w-10 h-10" />, title: "채널 기획", desc: "컨셉 설정부터 시리즈 기획까지", color: "text-red-500" },
    { icon: <Camera className="w-10 h-10" />, title: "전문 촬영", desc: "월 2회, 3-4개 영상 제작", color: "text-blue-500" },
    { icon: <Edit3 className="w-10 h-10" />, title: "편집/후반", desc: "프로급 편집과 자막, 효과", color: "text-green-500" },
    { icon: <BarChart3 className="w-10 h-10" />, title: "채널 운영", desc: "업로드, 댓글 관리, 분석", color: "text-purple-500" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 더 강렬하고 명확한 디자인 */}
      <section className="relative bg-gradient-to-br from-purple-700 via-purple-600 to-pink-600 text-white">
        {/* Pattern overlay for depth */}
        <div className="absolute inset-0 bg-black/10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="relative py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto text-center">
            {/* 작은 뱃지 - 덜 강조 */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 mb-8 text-xs">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="font-medium opacity-90">YouTube 채널 운영 전문</span>
            </div>
            
            {/* 메인 타이틀 - 크고 명확하게 */}
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="block">엘에스발레스튜디오</span>
              <span className="block text-4xl md:text-5xl mt-3 text-yellow-300 drop-shadow-lg">
                공덕역점
              </span>
            </h1>
            
            {/* 서브타이틀 - 더 선명하게 */}
            <p className="text-2xl md:text-3xl mb-4 font-semibold">
              YouTube 채널 운영 서비스
            </p>
            <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              기획, 촬영, 편집, 운영까지 모든 것을 대신 해드립니다
            </p>

            {/* CTA 영역 - 크고 명확하게 */}
            <div className="space-y-6">
              {/* 가격 강조 */}
              <div className="inline-block bg-black/20 backdrop-blur rounded-2xl px-8 py-6 mb-6">
                <div className="text-sm uppercase tracking-wider opacity-80 mb-2">첫달 특별 프로모션</div>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-2xl line-through opacity-50">250만원</span>
                  <ArrowRight className="w-5 h-5" />
                  <span className="text-5xl font-black text-yellow-300">150만원</span>
                </div>
              </div>
              
              {/* 메인 CTA 버튼 - 매우 눈에 띄게 */}
              <div>
                <a 
                  href="tel:010-8352-2234"
                  className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-10 py-5 rounded-full font-black text-xl transition-all transform hover:scale-110 shadow-2xl hover:shadow-yellow-400/50"
                >
                  <Phone className="w-7 h-7" />
                  <span>무료 상담 신청하기</span>
                </a>
                <p className="mt-3 text-sm opacity-80">
                  📞 010-8352-2234
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Value Props - 강한 대비 */}
      <section className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-black text-yellow-400">월 2회</div>
              <div className="text-sm opacity-80">전문 촬영팀 방문</div>
            </div>
            <div>
              <div className="text-3xl font-black text-yellow-400">3-4개</div>
              <div className="text-sm opacity-80">월간 영상 제작</div>
            </div>
            <div>
              <div className="text-3xl font-black text-yellow-400">100%</div>
              <div className="text-sm opacity-80">채널 운영 대행</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview - 명확한 구분 */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
              서비스 구성
            </h2>
            <p className="text-xl text-gray-600">
              4단계 완벽 솔루션
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-purple-500 hover:shadow-xl transition-all group"
              >
                <div className={`${service.color} mb-4 transition-transform group-hover:scale-110`}>
                  {service.icon}
                </div>
                <h3 className="font-black text-xl mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Ideas - 카드 디자인 개선 */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
              맞춤형 채널 콘텐츠
            </h2>
            <p className="text-xl text-gray-600">
              6가지 검증된 콘텐츠로 시작하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channelIdeas.map((idea, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIdea(index)}
                onMouseLeave={() => setHoveredIdea(null)}
                className={`bg-white border-2 rounded-2xl p-6 transition-all cursor-pointer
                  ${hoveredIdea === index ? 'border-purple-500 shadow-2xl transform -translate-y-2' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${idea.color} mb-4`}>
                  <div className="text-white">{idea.icon}</div>
                </div>
                
                <h3 className="text-xl font-black mb-1 text-gray-900">{idea.title}</h3>
                <p className="text-purple-600 font-bold text-sm mb-4">{idea.concept}</p>
                
                <div className="space-y-2 mb-4">
                  {idea.series.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-600 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-full">
                    {idea.views}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - 중앙 카드 강조 */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
              투명한 가격
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* 정가 - 흐리게 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center opacity-60">
              <h3 className="text-lg font-bold mb-4 text-gray-600">정가</h3>
              <div className="text-4xl font-black text-gray-400 line-through">360만원</div>
              <p className="text-sm text-gray-500 mt-2">월 단위</p>
            </div>
            
            {/* 프로모션 - 매우 강조 */}
            <div className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-red-500 text-white text-sm font-black px-4 py-1 rounded-full">
                  LIMITED OFFER
                </span>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-10 text-center text-white shadow-2xl transform scale-110">
                <h3 className="text-2xl font-black mb-6">특별 프로모션</h3>
                <div className="text-5xl font-black mb-2">250만원</div>
                <p className="text-sm opacity-90 mb-6">월 단위</p>
                <div className="bg-yellow-400 text-gray-900 rounded-xl py-3 px-4">
                  <p className="text-sm font-bold">첫달 특가</p>
                  <p className="text-3xl font-black">150만원</p>
                </div>
              </div>
            </div>
            
            {/* 포함 서비스 - 간단하게 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
              <h3 className="text-lg font-bold mb-4 text-gray-800">포함 서비스</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">월 2회 촬영</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">3-4개 영상</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">채널 운영</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">성과 리포트</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process - 숫자 강조 */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
            간단한 시작
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "무료 상담", desc: "목표 설정", color: "from-purple-500 to-pink-500" },
              { step: "2", title: "기획 수립", desc: "콘텐츠 전략", color: "from-pink-500 to-red-500" },
              { step: "3", title: "촬영 시작", desc: "월 2회 방문", color: "from-red-500 to-orange-500" },
              { step: "4", title: "성과 분석", desc: "매월 리포트", color: "from-orange-500 to-yellow-500" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center text-3xl font-black shadow-lg`}>
                  {item.step}
                </div>
                <h3 className="font-black text-xl mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - 아이콘과 함께 명확하게 */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
            기대 효과
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                icon: <TrendingUp className="w-8 h-8" />, 
                title: "브랜드 인지도 ↑", 
                desc: "공덕역 대표 발레 스튜디오로 포지셔닝",
                stat: "300% 상승",
                color: "text-blue-500"
              },
              { 
                icon: <Users className="w-8 h-8" />, 
                title: "신규 수강생 ↑", 
                desc: "온라인을 통한 지속적인 유입",
                stat: "월 20명+",
                color: "text-green-500"
              },
              { 
                icon: <Heart className="w-8 h-8" />, 
                title: "기존 수강생 만족도 ↑", 
                desc: "특별한 콘텐츠로 소속감 제공",
                stat: "95% 만족",
                color: "text-red-500"
              },
              { 
                icon: <DollarSign className="w-8 h-8" />, 
                title: "추가 수익 ↑", 
                desc: "YouTube 수익화 및 온라인 클래스",
                stat: "월 100만+",
                color: "text-yellow-500"
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className={`${item.color} flex-shrink-0`}>{item.icon}</div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-black text-xl text-gray-900">{item.title}</h3>
                    <span className="text-sm font-black text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                      {item.stat}
                    </span>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - 매우 강렬하게 */}
      <section className="relative py-24 px-4 md:px-6 bg-gradient-to-br from-purple-700 via-purple-600 to-pink-600 text-white overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.133 7-7s-3.134-7-7-7-7 3.133-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.133 7-7s-3.134-7-7-7-7 3.133-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            지금이 기회입니다
          </h2>
          <p className="text-2xl mb-12 opacity-90">
            엘에스발레스튜디오 공덕역점만을 위한<br/>
            특별 프로모션
          </p>
          
          {/* 핵심 정보 박스 */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-10 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-4xl font-black text-yellow-300">150</div>
                <div className="text-sm opacity-80">만원 (첫달)</div>
              </div>
              <div className="text-center border-x border-white/20">
                <div className="text-4xl font-black">2</div>
                <div className="text-sm opacity-80">회 촬영/월</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black">4</div>
                <div className="text-sm opacity-80">개 영상/월</div>
              </div>
            </div>
          </div>
          
          {/* 최종 CTA */}
          <a
            href="tel:010-8352-2234"
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-12 py-6 rounded-full font-black text-2xl transition-all transform hover:scale-110 shadow-2xl hover:shadow-yellow-400/50"
          >
            <Phone className="w-8 h-8" />
            <span>지금 전화하기</span>
          </a>
          
          <p className="mt-6 text-lg opacity-80">
            📞 010-8352-2234
          </p>
          <p className="text-sm mt-2 opacity-60">
            평일 09:00 - 18:00
          </p>
        </div>
      </section>

      {/* Footer - 간단하게 */}
      <footer className="bg-gray-900 text-gray-500 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p>© 2024 YouTube Channel Management Service</p>
          <p className="mt-1">엘에스발레스튜디오 공덕역점 전용</p>
        </div>
      </footer>
    </div>
  )
}