import { 
  Microscope, 
  Truck, 
  DollarSign, 
  Heart 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-neutral-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#cc2e83] mb-4">Our Mission</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We're committed to democratizing early-stage cancer detection by making 
            advanced MRI technology accessible to everyone, regardless of location or economic status.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-black p-8 rounded-xl shadow-lg border border-[#cc2e83]/20">
            <div className="w-12 h-12 bg-[#cc2e83]/10 rounded-full flex items-center justify-center mb-4">
              <Microscope className="text-[#cc2e83] h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Early Detection</h3>
            <p className="text-gray-400">
              The key to cancer survival is early detection. Our mobile MRI technology makes screenings available to communities that might otherwise go without.
            </p>
          </div>
          
          <div className="bg-black p-8 rounded-xl shadow-lg border border-[#cc2e83]/20">
            <div className="w-12 h-12 bg-[#cc2e83]/10 rounded-full flex items-center justify-center mb-4">
              <Truck className="text-[#cc2e83] h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Mobile Technology</h3>
            <p className="text-gray-400">
              We bring the technology to you. Our mobile MRI units travel to communities across America, making screenings convenient and accessible.
            </p>
          </div>
          
          <div className="bg-black p-8 rounded-xl shadow-lg border border-[#cc2e83]/20">
            <div className="w-12 h-12 bg-[#cc2e83]/10 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="text-[#cc2e83] h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Affordable Care</h3>
            <p className="text-gray-400">
              At less than $500 per screening, we're making early detection affordable, with plans to reduce costs further through proprietary technology.
            </p>
          </div>
        </div>
        
        <div className="bg-[#191919] p-8 rounded-xl border border-[#cc2e83]/30">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold text-[#cc2e83] mb-4">Join Our Mission</h3>
              <p className="text-gray-300">
                By participating in our screening program, you're not just taking care of your health—you're helping us refine our technology and bring it to more communities.
              </p>
            </div>
            <div className="md:w-1/3 md:text-right">
              <Button 
                asChild 
                className="bg-[#cc2e83] hover:bg-[#a8246d] text-white border-0"
              >
                <a href="#booking">Get Involved</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
