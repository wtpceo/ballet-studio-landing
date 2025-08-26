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
  ChevronRight
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
    { icon: <Youtube className="w-12 h-12 text-purple-600" />, title: "채널 기획", desc: "컨셉 설정부터 시리즈 기획까지" },
    { icon: <Camera className="w-12 h-12 text-purple-600" />, title: "전문 촬영", desc: "월 2회, 3-4개 영상 제작" },
    { icon: <Edit3 className="w-12 h-12 text-purple-600" />, title: "편집/후반", desc: "프로급 편집과 자막, 효과" },
    { icon: <BarChart3 className="w-12 h-12 text-purple-600" />, title: "채널 운영", desc: "업로드, 댓글 관리, 분석" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute w-full h-full bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100" />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 text-white py-16 md:py-24 px-4 md:px-6">
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
              <span className="text-sm font-semibold">YouTube 마케팅 전문</span>
              <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">엘에스발레스튜디오</span>
              <span className="block text-3xl md:text-4xl mt-2 text-yellow-300">
                공덕역점 YouTube 채널
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              기획부터 촬영, 편집, 운영까지<br/>
              <span className="text-white font-bold">올인원 YouTube 서비스</span>
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:010-8352-2234"
                className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
              >
                <Phone className="w-6 h-6" />
                무료 상담 신청하기
              </a>
              
              <div className="flex flex-col text-sm">
                <span className="text-white/90">첫달 특별 프로모션</span>
                <span className="text-2xl font-bold text-yellow-300">150만원</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            완벽한 YouTube 채널 운영 솔루션
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4 inline-block p-4 rounded-2xl bg-purple-50 group-hover:bg-purple-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Ideas */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              발레 스튜디오를 위한 맞춤 채널 기획
            </h2>
            <p className="text-gray-600 text-lg">
              6가지 검증된 콘텐츠 아이디어로 시작하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channelIdeas.map((idea, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIdea(index)}
                onMouseLeave={() => setHoveredIdea(null)}
                className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 cursor-pointer
                  ${hoveredIdea === index ? 'transform scale-105 shadow-2xl' : 'hover:shadow-xl'}`}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${idea.color} mb-4`}>
                  <div className="text-white">{idea.icon}</div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-800">{idea.title}</h3>
                <p className="text-purple-600 font-medium mb-3">{idea.concept}</p>
                
                <div className="space-y-2 mb-4">
                  {idea.series.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-3 border-t">
                  <span className="text-sm font-semibold text-purple-600">{idea.views}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              투명한 가격 정책
            </h2>
            <p className="text-gray-600 text-lg">
              발레 스튜디오 성장을 위한 합리적인 투자
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-700">정가</h3>
              <div className="text-3xl font-bold text-gray-400 line-through mb-2">360만원</div>
              <p className="text-gray-500">월 단위</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white transform scale-110 shadow-2xl">
              <div className="bg-yellow-400 text-purple-900 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                EVENT
              </div>
              <h3 className="text-2xl font-bold mb-4">특별 프로모션</h3>
              <div className="text-4xl font-bold mb-2">250만원</div>
              <p className="text-purple-100">월 단위</p>
              <div className="mt-4 pt-4 border-t border-white/30">
                <p className="text-sm text-yellow-300 font-bold">첫달 150만원</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-700">포함 서비스</h3>
              <ul className="space-y-2 text-left text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>월 2회 전문 촬영</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>3-4개 영상 제작</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>채널 운영 관리</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            간단한 시작 프로세스
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "무료 상담", desc: "채널 목표와 방향성 논의" },
              { step: "02", title: "기획 수립", desc: "맞춤형 콘텐츠 전략 수립" },
              { step: "03", title: "촬영 시작", desc: "월 2회 전문 촬영 진행" },
              { step: "04", title: "성과 분석", desc: "매월 상세 리포트 제공" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            왜 YouTube 채널이 필요한가요?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <TrendingUp className="w-8 h-8 text-purple-600" />, title: "브랜드 인지도 상승", desc: "공덕역 대표 발레 스튜디오로 포지셔닝" },
              { icon: <Users className="w-8 h-8 text-purple-600" />, title: "신규 수강생 유입", desc: "온라인을 통한 지속적인 신규 고객 확보" },
              { icon: <Heart className="w-8 h-8 text-purple-600" />, title: "기존 수강생 만족도", desc: "특별한 콘텐츠로 소속감과 자부심 제공" },
              { icon: <DollarSign className="w-8 h-8 text-purple-600" />, title: "추가 수익원 창출", desc: "YouTube 수익화 및 온라인 클래스 판매" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            지금 시작하세요!
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            엘에스발레스튜디오 공덕역점만을 위한<br/>
            특별한 YouTube 채널을 만들어드립니다
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-300">150만원</div>
                <p className="text-purple-100">첫달 특가</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">월 2회</div>
                <p className="text-purple-100">전문 촬영</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">3-4개</div>
                <p className="text-purple-100">월간 영상 제작</p>
              </div>
            </div>
          </div>
          
          <a
            href="tel:010-8352-2234"
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
          >
            <Phone className="w-6 h-6" />
            010-8352-2234
          </a>
          
          <p className="mt-4 text-purple-200">
            평일 09:00 - 18:00 | 주말 및 공휴일 휴무
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">© 2024 YouTube Channel Management Service</p>
          <p className="text-sm">엘에스발레스튜디오 공덕역점 전용 서비스</p>
        </div>
      </footer>
    </div>
  )
}