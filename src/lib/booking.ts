import { format, addDays, getDaysInMonth, getDay } from "date-fns";
import { generateTimeSlots } from "./utils";

// Get the calendar days for a given month, including empty placeholders
export function getCalendarDays(date: Date): number[] {
  const year = date.getFullYear();
  const month = date.getMonth();
  
  const daysInMonth = getDaysInMonth(date);
  const firstDayOfMonth = getDay(new Date(year, month, 1));
  
  const calendarDays: number[] = [];
  
  // Add empty days to align with the right day of the week
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(0); // 0 represents an empty day
  }
  
  // Add the actual days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }
  
  return calendarDays;
}

// Get time slots based on the parameters provided
export function getTimeSlots(
  startHour: number,
  endHour: number,
  appointmentDuration: number,
  bufferDuration: number
): string[] {
  return generateTimeSlots(startHour, endHour, appointmentDuration, bufferDuration);
}

// Generate dates for the two-week trial
export function generateTrialDates(startDate: Date): string[] {
  const dates: string[] = [];
  
  for (let i = 0; i < 14; i++) {
    const date = addDays(startDate, i);
    dates.push(format(date, 'yyyy-MM-dd'));
  }
  
  return dates;
}

// Check if a date is within the trial period
export function isWithinTrialPeriod(date: Date, startDate: Date): boolean {
  const endDate = addDays(startDate, 13); // 14 days total, 0-indexed
  return date >= startDate && date <= endDate;
}
