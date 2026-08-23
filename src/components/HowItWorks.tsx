import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#cc2e83] mb-4">How It Works</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our process is simple and designed to make early cancer detection accessible to everyone.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#cc2e83]/30 transform -translate-x-1/2"></div>
          
          {/* Steps */}
          <div className="space-y-16 relative">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                <h3 className="text-xl font-semibold text-white mb-2 text-center md:text-right">Book Your Appointment</h3>
                <p className="text-gray-400 text-center md:text-right">
                  Select a convenient 45-minute time slot during our 2-week trial in New Canaan, CT.
                </p>
              </div>
              <div className="min-w-[48px] w-12 h-12 bg-[#cc2e83] rounded-full flex items-center justify-center z-10 mb-4 md:mb-0 order-1 md:order-2 mx-auto md:mx-4 flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div className="md:w-1/2 md:pl-8 order-3 hidden md:block"></div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="md:w-1/2 md:pr-8 md:text-right order-1 hidden md:block"></div>
              <div className="min-w-[48px] w-12 h-12 bg-[#cc2e83] rounded-full flex items-center justify-center z-10 mb-4 md:mb-0 order-1 md:order-2 mx-auto md:mx-4 flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div className="md:w-1/2 md:pl-8 order-2 md:order-3">
                <h3 className="text-xl font-semibold text-white mb-2 text-center md:text-left">Complete Pre-Screening</h3>
                <p className="text-gray-400 text-center md:text-left">
                  Fill out a simple medical questionnaire to help us prepare for your visit.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                <h3 className="text-xl font-semibold text-white mb-2 text-center md:text-right">Visit Our Mobile Unit</h3>
                <p className="text-gray-400 text-center md:text-right">
                  Arrive at our mobile MRI unit in New Canaan, CT at your scheduled time for your screening.
                </p>
              </div>
              <div className="min-w-[48px] w-12 h-12 bg-[#cc2e83] rounded-full flex items-center justify-center z-10 mb-4 md:mb-0 order-1 md:order-2 mx-auto md:mx-4 flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div className="md:w-1/2 md:pl-8 order-3 hidden md:block"></div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="md:w-1/2 md:pr-8 md:text-right order-1 hidden md:block"></div>
              <div className="min-w-[48px] w-12 h-12 bg-[#cc2e83] rounded-full flex items-center justify-center z-10 mb-4 md:mb-0 order-1 md:order-2 mx-auto md:mx-4 flex-shrink-0">
                <span className="text-white font-bold">4</span>
              </div>
              <div className="md:w-1/2 md:pl-8 order-2 md:order-3">
                <h3 className="text-xl font-semibold text-white mb-2 text-center md:text-left">Receive Your Results</h3>
                <p className="text-gray-400 text-center md:text-left">
                  Get your screening results in a timely manner, with referrals to specialists if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            asChild 
            className="bg-[#cc2e83] hover:bg-[#a8246d] text-white border-0"
          >
            <a href="#booking">Book Now</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
