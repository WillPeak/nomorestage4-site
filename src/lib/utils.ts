import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export function formatTime(timeString: string): string {
  return timeString;
}

export function formatPhoneNumber(phoneNumber: string): string {
  const cleaned = phoneNumber.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phoneNumber;
}

export function generateTimeSlots(
  startHour: number,
  endHour: number,
  appointmentDuration: number,
  bufferDuration: number
): string[] {
  const slots: string[] = [];
  const totalMinutesPerSlot = appointmentDuration + bufferDuration;
  let currentHour = startHour;
  let currentMinute = 0;

  while (currentHour < endHour) {
    const formattedHour = currentHour % 12 === 0 ? 12 : currentHour % 12;
    const period = currentHour < 12 ? 'AM' : 'PM';
    const formattedMinute = currentMinute === 0 ? '00' : currentMinute.toString();
    
    slots.push(`${formattedHour}:${formattedMinute} ${period}`);
    
    // Advance time
    currentMinute += totalMinutesPerSlot;
    
    // Handle minute overflow
    if (currentMinute >= 60) {
      currentHour += Math.floor(currentMinute / 60);
      currentMinute = currentMinute % 60;
    }
  }

  return slots;
}

export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

export function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}
