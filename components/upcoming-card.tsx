"use client"

import { Clock } from "lucide-react"

interface UpcomingItem {
  id: number
  title: string
  course: string
  dueDate: string
  color: string
}

const upcomingItems: UpcomingItem[] = [
  { id: 1, title: "Problem Set 3", course: "CSE-101-02", dueDate: "Tomorrow, 11:59 PM", color: "bg-sky-400" },
  { id: 2, title: "Reading Response", course: "ECON-10A-02", dueDate: "Jan 20, 5:00 PM", color: "bg-rose-400" },
  { id: 3, title: "Lab Report", course: "STAT-5-03", dueDate: "Jan 21, 11:59 PM", color: "bg-amber-400" },
  { id: 4, title: "Discussion Post", course: "ECON-100A-02", dueDate: "Jan 22, 9:00 AM", color: "bg-blue-500" },
]

export function UpcomingCard() {
  return (
    <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-white/40 h-full">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-[#2d4a5e]" />
        <h2 className="font-semibold text-[#2d4a5e] text-lg">Upcoming</h2>
      </div>
      
      <div className="space-y-3">
        {upcomingItems.map((item) => (
          <div 
            key={item.id}
            className="flex items-start gap-3 p-3 bg-white/50 rounded-xl hover:bg-white/70 transition-colors cursor-pointer"
          >
            <div className={`w-2 h-2 rounded-full mt-2 ${item.color}`} />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-[#2d4a5e] text-sm truncate">{item.title}</p>
              <p className="text-xs text-[#6b7c8a]">{item.course}</p>
              <p className="text-xs text-[#b85c38] mt-1">{item.dueDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
