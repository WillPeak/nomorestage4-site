import { Button } from "@/components/ui/button";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="bg-black pt-4 md:pt-16 pb-8 md:pb-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Mobile version - Ultra-compact layout with NO logo */}
        <div className="md:hidden">
          <h1 className="text-3xl font-bold text-white leading-tight">
            Early Cancer Detection
          </h1>
          
          <h2 className="text-2xl font-bold text-[#cc2e83] leading-tight mt-2 mb-3">
            Should Be Accessible to Everyone
          </h2>
          
          <p className="text-base text-gray-300 mb-5">
            NoMoreStage4 brings mobile MRI technology to communities across America, starting with New Canaan, CT. Get screened for less than $500.
          </p>
          
          <div className="flex gap-3">
            <Button 
              asChild 
              className="bg-[#cc2e83] hover:bg-[#a8246d] text-white border-0 text-base font-medium px-4 py-2"
            >
              <a href="#booking">Book Screening</a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="border-[#cc2e83] text-[#cc2e83] hover:bg-[#cc2e83]/10 text-base font-medium px-4 py-2"
            >
              <a href="#how-it-works">Learn More</a>
            </Button>
          </div>
        </div>
        
        {/* Desktop layout - only visible on larger screens */}
        <div className="hidden md:flex md:flex-row md:items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4 md:mb-6">
              Early Cancer Detection
              <br />
              <span className="text-[#cc2e83]">Should Be Accessible</span>
              <br />
              to Everyone
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
              NoMoreStage4 is bringing mobile MRI technology to communities across America, starting with New Canaan, CT. Get screened for less than $500.
            </p>
            
            <div className="flex flex-row gap-3">
              <Button 
                asChild 
                className="bg-[#cc2e83] hover:bg-[#a8246d] text-white border-0" 
                size="default"
              >
                <a href="#booking">Book Your Screening</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-[#cc2e83] text-[#cc2e83] hover:bg-[#cc2e83]/10"
                size="default"
              >
                <a href="#how-it-works">Learn More</a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12 flex justify-center items-center">
            <div className="rounded-xl overflow-hidden shadow-xl bg-black p-6 border border-[#cc2e83]/30 max-w-md">
              <Logo width={300} height={300} className="w-[300px] lg:w-[350px] h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
