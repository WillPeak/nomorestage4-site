import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format, addDays, parse, isValid } from "date-fns";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { getCalendarDays, getTimeSlots } from "@/lib/booking";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  hadMriBefore: z.enum(["yes", "no"]),
  medicalInfo: z.string().optional(),
  appointmentDate: z.string().min(1, "Appointment date is required"),
  appointmentTime: z.string().min(1, "Appointment time is required"),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function BookingSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      hadMriBefore: "no",
      medicalInfo: "",
      appointmentDate: "",
      appointmentTime: "",
      termsAccepted: false,
    },
  });

  useEffect(() => {
    if (selectedDate) form.setValue("appointmentDate", selectedDate);
    if (selectedTime) form.setValue("appointmentTime", selectedTime);
  }, [selectedDate, selectedTime, form]);

  const availableTimeSlots: { time: string; isBooked: boolean }[] = [];
  const calendarDays = getCalendarDays(currentMonth);
  const timeSlots = getTimeSlots(8, 19, 45, 15);

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    console.log("Booking request (client-only):", { ...data, hadMriBefore: data.hadMriBefore === "yes" });
    setTimeout(() => {
      setBookingSuccess(true);
      toast({ title: "Appointment Booked!", description: "Your appointment has been successfully scheduled." });
      setIsSubmitting(false);
    }, 400);
  };

  const prevMonth = () => {
    const d = new Date(currentMonth);
    d.setMonth(d.getMonth() - 1);
    setCurrentMonth(d);
  };
  const nextMonth = () => {
    const d = new Date(currentMonth);
    d.setMonth(d.getMonth() + 1);
    setCurrentMonth(d);
  };
  const handleDaySelect = (day: number) => {
    const selected = new Date(currentMonth);
    selected.setDate(day);
    setSelectedDate(format(selected, "yyyy-MM-dd"));
  };
  const handleTimeSelect = (time: string) => setSelectedTime(time);
  const nextStep = () => {
    if (currentStep === 1 && !selectedDate) {
      toast({ title: "Please select a date", description: "You need to select a date before proceeding.", variant: "destructive" });
      return;
    }
    if (currentStep === 2 && !selectedTime) {
      toast({ title: "Please select a time", description: "You need to select a time slot before proceeding.", variant: "destructive" });
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const prevStep = () => setCurrentStep(currentStep - 1);
  const formatDateForDisplay = (dateString: string | null) => {
    if (!dateString) return "";
    const date = parse(dateString, "yyyy-MM-dd", new Date());
    return isValid(date) ? format(date, "MMMM d, yyyy") : "";
  };

  const renderStepContent = () => {
    if (currentStep === 1) {
      return (
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Select a Date</h3>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <button className="text-[#cc2e83] hover:text-white" onClick={prevMonth} type="button"><ChevronLeft className="h-5 w-5" /></button>
              <h4 className="text-lg font-medium text-white">{format(currentMonth, "MMMM yyyy")}</h4>
              <button className="text-[#cc2e83] hover:text-white" onClick={nextMonth} type="button"><ChevronRight className="h-5 w-5" /></button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (<div key={d} className="text-gray-400 text-sm font-medium">{d}</div>))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => {
                if (day === 0) return <div key={`empty-${index}`} className="p-2"></div>;
                const date = new Date(currentMonth);
                date.setDate(day);
                const dateString = format(date, "yyyy-MM-dd");
                const isSelected = dateString === selectedDate;
                const isToday = dateString === format(new Date(), "yyyy-MM-dd");
                return (
                  <button key={dateString} type="button" onClick={() => handleDaySelect(day)}
                    className={`p-2 rounded-md text-center ${isSelected ? "bg-[#cc2e83] text-white" : "text-gray-300 hover:bg-gray-800"} ${isToday ? "font-bold" : ""}`}>
                    <span className="block text-sm">{day}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <Button variant="ghost" disabled>Back</Button>
            <Button onClick={nextStep} disabled={!selectedDate} className="bg-[#cc2e83] hover:bg-[#a8246d] text-white border-0">Next: Choose Time</Button>
          </div>
        </div>
      );
    }
    if (currentStep === 2) {
      return (
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Select a Time</h3>
          <p className="text-gray-300 mb-4">Available time slots for <span className="font-medium text-[#cc2e83]">{formatDateForDisplay(selectedDate)}</span>:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            {timeSlots.map((slot) => {
              const isAvailable = !availableTimeSlots.find((b) => b.time === slot)?.isBooked;
              const isSelected = slot === selectedTime;
              return (
                <button key={slot} type="button" disabled={!isAvailable} onClick={() => isAvailable && handleTimeSelect(slot)}
                  className={`p-3 border rounded-md text-center text-sm ${isSelected ? "bg-[#cc2e83] border-[#cc2e83] text-white" : isAvailable ? "border-gray-700 text-gray-300 hover:bg-gray-800" : "bg-gray-800 text-gray-500 cursor-not-allowed"}`}>
                  {slot}
                </button>
              );
            })}
          </div>
          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={prevStep} className="text-gray-300 border-gray-700 hover:bg-gray-800 hover:text-white">Back to Date</Button>
            <Button onClick={nextStep} disabled={!selectedTime} className="bg-[#cc2e83] hover:bg-[#a8246d] text-white border-0">Next: Your Information</Button>
          </div>
        </div>
      );
    }
    if (currentStep === 3) {
      return (
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Your Information</h3>
          <Form {...form}>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField control={form.control} name="firstName" render={({ field }) => (<FormItem><FormLabel className="text-gray-300">First Name</FormLabel><FormControl><Input {...field} className="bg-gray-800 border-gray-700 text-white" /></FormControl><FormMessage /></FormItem>)} />
                <FormField control={form.control} name="lastName" render={({ field }) => (<FormItem><FormLabel className="text-gray-300">Last Name</FormLabel><FormControl><Input {...field} className="bg-gray-800 border-gray-700 text-white" /></FormControl><FormMessage /></FormItem>)} />
              </div>
              <FormField control={form.control} name="email" render={({ field }) => (<FormItem><FormLabel className="text-gray-300">Email Address</FormLabel><FormControl><Input type="email" {...field} className="bg-gray-800 border-gray-700 text-white" /></FormControl><FormMessage /></FormItem>)} />
              <FormField control={form.control} name="phone" render={({ field }) => (<FormItem><FormLabel className="text-gray-300">Phone Number</FormLabel><FormControl><Input type="tel" {...field} className="bg-gray-800 border-gray-700 text-white" /></FormControl><FormMessage /></FormItem>)} />
              <FormField control={form.control} name="dateOfBirth" render={({ field }) => (<FormItem><FormLabel className="text-gray-300">Date of Birth</FormLabel><FormControl><Input type="date" {...field} className="bg-gray-800 border-gray-700 text-white" /></FormControl><FormMessage /></FormItem>)} />
              <FormField control={form.control} name="hadMriBefore" render={({ field }) => (
                <FormItem className="space-y-3"><FormLabel className="text-gray-300">Have you had an MRI before?</FormLabel>
                  <FormControl><RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4">
                    <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="mri-yes" className="text-[#cc2e83] border-gray-600" /><Label htmlFor="mri-yes" className="text-gray-300">Yes</Label></div>
                    <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="mri-no" className="text-[#cc2e83] border-gray-600" /><Label htmlFor="mri-no" className="text-gray-300">No</Label></div>
                  </RadioGroup></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="medicalInfo" render={({ field }) => (<FormItem><FormLabel className="text-gray-300">Any relevant medical information (optional)</FormLabel><FormControl><Textarea rows={3} {...field} className="bg-gray-800 border-gray-700 text-white" /></FormControl><FormMessage /></FormItem>)} />
              <FormField control={form.control} name="termsAccepted" render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} className="border-gray-600 data-[state=checked]:bg-[#cc2e83] data-[state=checked]:border-[#cc2e83]" /></FormControl>
                  <div className="space-y-1 leading-none"><FormLabel className="text-gray-300">I agree to the <a href="#" className="text-[#cc2e83] hover:text-[#a8246d] hover:underline">terms and conditions</a> and acknowledge the <a href="#" className="text-[#cc2e83] hover:text-[#a8246d] hover:underline">privacy policy</a>.</FormLabel><FormMessage /></div>
                </FormItem>
              )} />
            </form>
          </Form>
          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={prevStep} className="text-gray-300 border-gray-700 hover:bg-gray-800 hover:text-white">Back to Time Selection</Button>
            <Button onClick={nextStep} className="bg-[#cc2e83] hover:bg-[#a8246d] text-white border-0" disabled={!form.formState.isValid}>Review & Confirm</Button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <h3 className="text-xl font-semibold text-[#cc2e83] mb-6">Review & Confirm</h3>
        <div className="bg-gray-800 p-4 rounded-lg mb-6 border border-gray-700">
          <h4 className="font-medium text-[#cc2e83] mb-2">Appointment Details</h4>
          <ul className="space-y-2">
            <li><span className="text-gray-400">Date:</span> <span className="font-medium text-gray-200">{formatDateForDisplay(form.getValues("appointmentDate"))}</span></li>
            <li><span className="text-gray-400">Time:</span> <span className="font-medium text-gray-200">{form.getValues("appointmentTime")}</span></li>
            <li><span className="text-gray-400">Location:</span> <span className="font-medium text-gray-200">Mobile MRI Unit, New Canaan, CT</span></li>
            <li><span className="text-gray-400">Price:</span> <span className="font-medium text-gray-200">$499</span></li>
          </ul>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg mb-6 border border-gray-700">
          <h4 className="font-medium text-[#cc2e83] mb-2">Your Information</h4>
          <ul className="space-y-2">
            <li><span className="text-gray-400">Name:</span> <span className="font-medium text-gray-200">{form.getValues("firstName")} {form.getValues("lastName")}</span></li>
            <li><span className="text-gray-400">Email:</span> <span className="font-medium text-gray-200">{form.getValues("email")}</span></li>
            <li><span className="text-gray-400">Phone:</span> <span className="font-medium text-gray-200">{form.getValues("phone")}</span></li>
          </ul>
        </div>
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={prevStep} className="text-gray-300 border-gray-700 hover:bg-gray-800 hover:text-white">Back to Information</Button>
          <Button onClick={() => onSubmit(form.getValues())} className="bg-[#cc2e83] hover:bg-[#a8246d] text-white border-0" disabled={isSubmitting}>{isSubmitting ? "Processing..." : "Confirm Booking"}</Button>
        </div>
      </div>
    );
  };

  return (
    <section id="booking" className="py-16 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#cc2e83] mb-4">Book Your Appointment</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">Select an available time slot during our 2-week trial in New Canaan, CT. Each appointment is 45 minutes with a 15-minute buffer between slots.</p>
        </div>
        <Card className="max-w-4xl mx-auto bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800">
          {!bookingSuccess && (
            <div className="bg-gray-800 border-b border-gray-700">
              <div className="flex">
                {[1,2,3,4].map((step) => (
                  <button key={step} className={`flex-1 py-4 px-4 text-center font-medium border-b-2 ${currentStep === step ? "border-[#cc2e83] text-[#cc2e83]" : "border-transparent text-gray-400"}`} disabled={currentStep < step} onClick={() => currentStep > step && setCurrentStep(step)}>
                    {step === 1 ? "Date" : step === 2 ? "Time" : step === 3 ? "Info" : "Confirm"}
                  </button>
                ))}
              </div>
            </div>
          )}
          <CardContent className="p-6">
            {bookingSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#cc2e83]"><CheckCircle className="text-[#cc2e83] h-8 w-8" /></div>
                <h3 className="text-xl font-semibold text-[#cc2e83] mb-2">Appointment Confirmed!</h3>
                <p className="text-gray-300 mb-6">Thank you for booking your screening appointment. A confirmation email has been sent to your email address.</p>
              </div>
            ) : renderStepContent()}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
