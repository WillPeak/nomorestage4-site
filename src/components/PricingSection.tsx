import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#cc2e83] mb-4">Affordable Screening</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We're committed to making early cancer detection accessible without breaking the bank.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800">
          <div className="bg-[#cc2e83] p-6 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">MRI Cancer Screening</h3>
            <p className="opacity-90">Comprehensive early detection scan</p>
          </div>
          <div className="p-8">
            <div className="text-center mb-8">
              <span className="text-4xl font-bold text-white">$499</span>
              <span className="text-gray-400 ml-2">per screening</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="text-[#cc2e83] h-5 w-5 mt-1 mr-3" />
                <span className="text-gray-300">45-minute comprehensive MRI scan</span>
              </li>
              <li className="flex items-start">
                <Check className="text-[#cc2e83] h-5 w-5 mt-1 mr-3" />
                <span className="text-gray-300">Screening for multiple cancer types</span>
              </li>
              <li className="flex items-start">
                <Check className="text-[#cc2e83] h-5 w-5 mt-1 mr-3" />
                <span className="text-gray-300">Professional medical evaluation</span>
              </li>
              <li className="flex items-start">
                <Check className="text-[#cc2e83] h-5 w-5 mt-1 mr-3" />
                <span className="text-gray-300">Follow-up consultation if needed</span>
              </li>
              <li className="flex items-start">
                <Check className="text-[#cc2e83] h-5 w-5 mt-1 mr-3" />
                <span className="text-gray-300">Digital copy of your results</span>
              </li>
            </ul>
            
            <div className="bg-gray-800 p-4 rounded-lg mb-8">
              <p className="text-gray-300 text-sm">
                <span className="inline-flex items-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#cc2e83]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </span>
                We're working to reduce costs further through our proprietary technology developments.
              </p>
            </div>
            
            <div className="text-center">
              <Button 
                asChild 
                className="w-full bg-[#cc2e83] hover:bg-[#a8246d] text-white border-0"
              >
                <a href="#booking">Book Your Screening</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
