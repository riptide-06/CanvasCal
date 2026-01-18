import { Upload } from "lucide-react"
import { Calendar } from "@/components/calendar"
import { AIAssistant } from "@/components/ai-assistant"
import { UpcomingCard } from "@/components/upcoming-card"
import { BananaSlugBackground } from "@/components/banana-slug-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFECD1] relative">
      <BananaSlugBackground />
      
      {/* Header */}
      <header className="px-6 py-5 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#f4c542] rounded-lg flex items-center justify-center">
              <span className="font-bold text-[#2d4a5e] text-sm">UCSC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#2d4a5e]">CanvasCal</h1>
              <p className="text-sm text-[#6b7c8a]">School Calendar Hub</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-[#2d4a5e] text-white px-4 py-2.5 rounded-xl hover:bg-[#1e3a4e] transition-colors">
            <Upload className="w-4 h-4" />
            <span className="text-sm font-medium">Upload Syllabus</span>
          </button>
        </div>
      </header>
      
      {/* Main Content - 3 Panel Layout */}
      <main className="px-6 pb-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-4 max-w-5xl mx-auto">
          {/* Left Column - Calendar on top, Upcoming below */}
          <div className="flex flex-col gap-4">
            {/* Calendar */}
            <div className="min-h-[320px]">
              <Calendar />
            </div>
            
            {/* Upcoming */}
            <div className="min-h-[200px]">
              <UpcomingCard />
            </div>
          </div>
          
          {/* Right Column - AI Agent (full height) */}
          <div className="h-full min-h-[540px]">
            <AIAssistant />
          </div>
        </div>
      </main>
    </div>
  )
}
