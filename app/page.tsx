'use client'
import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Youtube, 
  TrendingUp, 
  DollarSign, 
  Calendar, 
  Camera, 
  Edit3, 
  BarChart3, 
  Sparkles,
  CheckCircle2,
  Users,
  Clock,
  Target,
  Heart,
  Music,
  Award,
  Zap,
  Star,
  ArrowRight,
  Phone,
  ChevronRight
} from 'lucide-react'

export default function BalletStudioLanding() {
  const [hoveredIdea, setHoveredIdea] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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
        "30일 발레 챌린지 - 매일 10분 투자",
        "발레 포즈 따라하기 - 인스타그램 챌린지",
        "가족과 함께하는 발레 - 세대별 맞춤 프로그램"
      ],
      icon: <Award className="w-6 h-6" />,
      color: "from-yellow-500 to-amber-500",
      views: "예상 조회수 100K+"
    }
  ]

  const features = [
    { icon: <Youtube className="w-8 h-8" />, title: "채널 기획", desc: "컨셉부터 시리즈까지 완벽 기획", detail: "타겟 분석 포함" },
    { icon: <Edit3 className="w-8 h-8" />, title: "대본 작성", desc: "전문 작가의 맞춤형 대본 제작", detail: "SEO 최적화" },
    { icon: <Camera className="w-8 h-8" />, title: "전문 촬영", desc: "격주 1회, 3~4편 동시 촬영", detail: "4K 화질" },
    { icon: <Sparkles className="w-8 h-8" />, title: "편집", desc: "트렌디한 편집과 자막 작업", detail: "썸네일 제작" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "채널 운영", desc: "업로드부터 커뮤니티 관리까지", detail: "댓글 관리" },
    { icon: <BarChart3 className="w-8 h-8" />, title: "성과 분석", desc: "월별 상세 리포트 제공", detail: "개선안 제시" }
  ]

  const benefits = [
    "장비 구매 비용 0원 (1,000만원 절약)",
    "인건비 대폭 절감 (월 250~550만원 절약)",
    "전문 팀의 체계적인 운영",
    "격주 촬영으로 부담 최소화",
    "월 6~8개 고퀄리티 콘텐츠 제작",
    "지속적인 채널 성장 관리"
  ]

  const stats = [
    { number: "1000만", label: "절약 비용", suffix: "원+" },
    { number: "95", label: "고객 만족도", suffix: "%" },
    { number: "6-8", label: "월 콘텐츠", suffix: "개" },
    { number: "24", label: "응답 시간", suffix: "시간" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/10 to-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5" />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{ left: '10%', top: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{ right: '10%', bottom: '10%' }}
        />
      </div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 text-white py-16 md:py-32 px-4 md:px-6"
      >
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}
        />
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring" }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
              <span className="text-sm font-semibold">YouTube 마케팅 전문</span>
              <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
            </motion.div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                엘에스발레스튜디오
              </span>
              <span className="block text-3xl md:text-5xl mt-2 md:mt-4 text-yellow-300">
                공덕역점 YouTube 채널
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
              발레의 아름다움을 전하는 YouTube 채널,<br className="hidden md:block" />
              <span className="font-semibold text-yellow-200">기획부터 운영까지</span> 모든 것을 책임집니다
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 text-base md:text-lg mb-8">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
              >
                📹 <span className="font-semibold">전문 촬영팀</span>
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-purple-400/20 to-pink-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
              >
                ✏️ <span className="font-semibold">맞춤 기획</span>
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-400/20 to-cyan-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"
              >
                📊 <span className="font-semibold">채널 성장 보장</span>
              </motion.span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center items-center"
            >
              <motion.a
                href="tel:010-8352-2234"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-yellow-400/30 transition-all"
              >
                <Phone className="w-5 h-5" />
                무료 상담 신청하기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 -mt-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-4 md:p-6 text-center border border-gray-100"
              >
                <motion.h3
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                >
                  {stat.number}{stat.suffix}
                </motion.h3>
                <p className="text-sm md:text-base text-gray-600 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Ideas Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              CONTENT IDEAS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              발레 스튜디오 맞춤 콘텐츠
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              귀 스튜디오만의 특별한 YouTube 채널을 만들어드립니다
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {channelIdeas.map((idea, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredIdea(index)}
                onHoverEnd={() => setHoveredIdea(null)}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`h-1 bg-gradient-to-r ${idea.color}`}></div>
                <div className="p-5 md:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`p-3 rounded-xl bg-gradient-to-r ${idea.color} text-white shadow-lg`}
                      >
                        {idea.icon}
                      </motion.div>
                      <div className="ml-4">
                        <h3 className="text-lg md:text-xl font-bold">{idea.title}</h3>
                        <p className="text-sm text-gray-600">{idea.concept}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1 text-xs bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 px-3 py-1 rounded-full font-medium">
                      <TrendingUp className="w-3 h-3" />
                      {idea.views}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    {idea.series.map((series, sIndex) => (
                      <motion.div
                        key={sIndex}
                        initial={false}
                        animate={{ 
                          x: hoveredIdea === index ? 8 : 0,
                          color: hoveredIdea === index ? '#7c3aed' : '#374151'
                        }}
                        className="flex items-start text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-gray-700 group-hover:text-purple-700 transition-colors">{series}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: hoveredIdea === index ? 1 : 0, y: hoveredIdea === index ? 0 : 10 }}
                    className="mt-4 pt-4 border-t border-gray-100"
                  >
                    <button className="text-sm font-semibold text-purple-600 hover:text-purple-700 inline-flex items-center gap-1">
                      자세히 보기 <ChevronRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-purple-50 to-pink-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              ALL-IN-ONE SERVICE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              올인원 YouTube 서비스
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              기획부터 분석까지, 모든 과정을 전문가가 담당합니다
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all text-center border border-purple-100"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl shadow-lg mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{feature.desc}</p>
                <p className="text-xs md:text-sm text-purple-600 mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {feature.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-12 md:py-20 px-4 md:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
              SPECIAL OFFER
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              압도적인 가격 경쟁력
            </h2>
            <p className="text-lg md:text-xl text-gray-600">최고의 퀄리티를 최적의 가격으로</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 md:p-8 border-2 border-gray-200"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-xl">
                  <DollarSign className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold ml-4 text-gray-700">일반적인 비용</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-gray-600">장비 구매비</span>
                  <span className="font-bold text-red-600 text-lg">1,000만원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-gray-600">편집자 인건비</span>
                  <span className="font-bold text-red-600 text-lg">월 300~400만원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-gray-600">PD 인건비</span>
                  <span className="font-bold text-red-600 text-lg">월 200~400만원</span>
                </div>
                <div className="pt-4 mt-4 border-t-2 border-gray-300">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-700">월 총 비용</span>
                    <span className="text-2xl font-bold text-red-600">500~800만원+</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 text-white rounded-3xl p-6 md:p-8 overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-black/10" />
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                  backgroundSize: "200% 200%",
                }}
              />
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl"
              />
              
              <div className="relative">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 0.8 }}
                  className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 px-4 py-2 rounded-xl font-bold shadow-lg"
                >
                  🔥 한정 특가
                </motion.div>
                
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold ml-4">우리의 제안</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80">정상가</span>
                      <span className="font-bold line-through opacity-50 text-lg">월 360만원</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium">이벤트가</span>
                      <span className="font-bold text-3xl text-yellow-300">월 250만원</span>
                    </div>
                  </div>
                  
                  <motion.div
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="p-5 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-xl border-2 border-yellow-300/50"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-bold text-xl">첫달 특별가</span>
                        <p className="text-sm opacity-90 mt-1">50% 추가 할인</p>
                      </div>
                      <span className="font-bold text-4xl text-yellow-300">150만원</span>
                    </div>
                  </motion.div>
                  
                  <div className="pt-4 space-y-3">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <CheckCircle2 className="w-5 h-5 text-yellow-300 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm md:text-base">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              PROCESS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              간단한 진행 프로세스
            </h2>
            <p className="text-lg md:text-xl text-gray-600">체계적인 프로세스로 완벽한 결과를 보장합니다</p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: <Target />, title: "채널 기획", desc: "컨셉 및 시리즈 기획", step: "STEP 1" },
              { icon: <Edit3 />, title: "대본 작성", desc: "맞춤형 대본 제작 및 컨펌", step: "STEP 2" },
              { icon: <Camera />, title: "촬영", desc: "격주 1회 전문 촬영", step: "STEP 3" },
              { icon: <BarChart3 />, title: "운영 & 분석", desc: "업로드 및 성과 리포트", step: "STEP 4" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 text-center border border-purple-100"
                >
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full font-bold">
                    {step.step}
                  </span>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl mb-4 shadow-lg"
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </motion.div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-purple-300 z-10">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -left-20 w-60 h-60 bg-yellow-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -right-20 w-60 h-60 bg-pink-400/10 rounded-full blur-3xl"
        />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              지금 시작하세요!
            </h2>
            <p className="text-lg md:text-xl mb-10 opacity-95">
              발레 스튜디오의 새로운 마케팅 채널,<br />
              YouTube로 더 많은 수강생을 만나보세요
            </p>
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-8 border border-white/20"
          >
            <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4"
              >
                <DollarSign className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 text-yellow-300" />
                <p className="font-bold text-lg md:text-xl">첫달 150만원</p>
                <p className="text-sm opacity-80 mt-1">50% 할인 혜택</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4"
              >
                <Calendar className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 text-yellow-300" />
                <p className="font-bold text-lg md:text-xl">격주 1회 촬영</p>
                <p className="text-sm opacity-80 mt-1">부담없는 일정</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4"
              >
                <Clock className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 text-yellow-300" />
                <p className="font-bold text-lg md:text-xl">월 6~8개 콘텐츠</p>
                <p className="text-sm opacity-80 mt-1">꾸준한 업로드</p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="flex justify-center items-center"
          >
            <motion.a
              href="tel:010-8352-2234"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-yellow-400/30 transition-all"
            >
              <Phone className="w-5 h-5" />
              무료 상담 신청하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
          
          <p className="mt-6 text-sm opacity-80">
            * 상담 신청 시 맞춤형 채널 기획안을 무료로 제공해드립니다
          </p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">서비스</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">YouTube 채널 기획</li>
                <li className="hover:text-white transition-colors cursor-pointer">콘텐츠 제작</li>
                <li className="hover:text-white transition-colors cursor-pointer">채널 운영 관리</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">문의</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors">
                  <a href="tel:010-8352-2234">📞 010-8352-2234</a>
                </li>
                <li className="hover:text-white transition-colors">💬 카카오톡: @youtube_pro</li>
                <li className="hover:text-white transition-colors">📧 contact@youtube-pro.kr</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">회사 소개</h3>
              <p className="text-gray-400 leading-relaxed">
                YouTube 채널 운영 전문 기업으로 기획부터 운영까지 모든 과정을 전문가가 책임집니다.
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500">
              © 2024 YouTube Channel Management Service. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}