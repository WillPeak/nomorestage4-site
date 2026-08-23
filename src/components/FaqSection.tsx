import { useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const faqItems: FaqItem[] = [
    {
      question: "What types of cancer can be detected with this screening?",
      answer: "Our MRI screening can help detect early signs of cancer in these vital organs: Brain, Kidney, Adrenal Glands, Thyroid, Bladder, Gallbladder, Pancreas, Spleen, Liver, and Prostate. The technology is particularly effective at identifying abnormalities in soft tissues before they might be detected by other screening methods."
    },
    {
      question: "Is the MRI screening painful or invasive?",
      answer: "No, MRI screenings are completely non-invasive and painless. The procedure involves lying still inside the MRI machine while it creates detailed images of your body's interior. You may hear loud knocking sounds during the scan, but earplugs or headphones will be provided for your comfort."
    },
    {
      question: "How long does the screening take?",
      answer: "The actual MRI screening takes approximately 45 minutes. We schedule appointments with 15-minute buffers between them to ensure a smooth experience for all participants. In total, you should plan to be at our mobile unit for about an hour."
    },
    {
      question: "Who will interpret my results and when will I receive them?",
      answer: "Your screening results will be interpreted by qualified radiologists and medical professionals. You'll typically receive your results within 7-10 business days via secure email or postal mail, depending on your preference. If any concerning findings are identified, you'll be contacted promptly for follow-up."
    },
    {
      question: "Is there any preparation required before the screening?",
      answer: "Minimal preparation is required. You should avoid wearing clothing with metal components (zippers, buttons, etc.) and leave jewelry at home. If possible, wear comfortable, loose-fitting clothes. We'll provide a gown if necessary. You'll also need to inform us of any metal implants, pacemakers, or other medical devices before your appointment."
    },
    {
      question: "What if the screening finds something concerning?",
      answer: "If your screening reveals any areas of concern, our medical team will contact you promptly to discuss the findings and recommend appropriate next steps. This may include referrals to specialists in your area for further evaluation and treatment. Remember that early detection is key to successful treatment outcomes."
    },
    {
      question: "Can I use health insurance to cover the cost?",
      answer: "As a preventative screening service, our MRI scans may not be covered by all insurance plans. However, we provide detailed receipts that you can submit to your insurance provider for possible reimbursement. We recommend contacting your insurance company directly to inquire about coverage for preventative cancer screening services."
    }
  ];

  return (
    <section id="faq" className="py-16 px-4 bg-black">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#cc2e83] mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our mobile MRI screening service.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-700 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="p-5 bg-gray-900 hover:bg-gray-800 text-left font-medium text-white data-[state=open]:text-[#cc2e83]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5 pt-2 text-gray-300 bg-gray-900">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Don't see your question answered here?</p>
          <a href="#contact" className="text-[#cc2e83] hover:text-[#a8246d] font-medium">Contact us directly</a>
        </div>
      </div>
    </section>
  );
}
