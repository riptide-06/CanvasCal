"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react"

const DAYS = ["S", "M", "T", "W", "T", "F", "S"]

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 17))
  const [selectedDay, setSelectedDay] = useState<number | null>(17)
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const today = 17
  const isCurrentMonth = month === 0 && year === 2026
  
  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)
  
  const monthName = currentDate.toLocaleString("default", { month: "short" })
  
  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }
  
  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }
  
  const days: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }
  
  return (
    <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-white/40 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <CalendarDays className="w-5 h-5 text-[#2d4a5e]" />
          <h2 className="font-semibold text-[#2d4a5e] text-lg">Calendar</h2>
        </div>
        <div className="flex items-center gap-1">
          <button 
            onClick={prevMonth}
            className="p-1.5 hover:bg-white/50 rounded-lg text-[#2d4a5e] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-sm font-medium text-[#2d4a5e] min-w-[80px] text-center">
            {monthName} {year}
          </span>
          <button 
            onClick={nextMonth}
            className="p-1.5 hover:bg-white/50 rounded-lg text-[#2d4a5e] transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Day headers */}
      <div className="grid grid-cols-7 mb-2">
        {DAYS.map((day, index) => (
          <div 
            key={index} 
            className="text-center py-1 text-xs font-medium text-[#6b7c8a]"
          >
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 flex-1">
        {days.map((day, index) => {
          const isSelected = day === selectedDay && isCurrentMonth
          const isToday = day === today && isCurrentMonth
          
          return (
            <div
              key={index}
              onClick={() => day && setSelectedDay(day)}
              className={`
                flex items-center justify-center aspect-square rounded-lg text-sm transition-colors
                ${day === null ? "" : "cursor-pointer"}
                ${isSelected 
                  ? "bg-[#2d4a5e] text-white font-semibold hover:bg-[#3d5a6e]" 
                  : day !== null
                    ? "text-[#2d4a5e] hover:bg-[#2d4a5e]/10"
                    : ""
                }
                ${isToday && !isSelected ? "ring-2 ring-[#2d4a5e] ring-inset" : ""}
              `}
            >
              {day}
            </div>
          )
        })}
      </div>
    </div>
  )
}
