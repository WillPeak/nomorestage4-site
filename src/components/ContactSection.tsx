import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone } from "lucide-react";
import { ContactForm, contactFormSchema } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactForm) {
    setIsSubmitting(true);
    console.log("Contact form (client-only):", data);
    await new Promise((r) => setTimeout(r, 300));
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you shortly.",
    });
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <section id="contact" className="py-16 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#cc2e83] mb-4">Contact Us</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have questions or need more information? Get in touch with our team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-[#cc2e83] mb-4">Get in Touch</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Your Name</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-gray-800 border-gray-700 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} className="bg-gray-800 border-gray-700 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Subject</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-gray-800 border-gray-700 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea rows={5} {...field} className="bg-gray-800 border-gray-700 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#cc2e83] hover:bg-[#a8246d] text-white border-0"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-[#cc2e83] mb-4">Location Information</h3>
            
            <div className="mb-6">
              <p className="text-gray-300 mb-2">
                Our mobile MRI unit will be stationed at:
              </p>
              <p className="font-medium text-white">
                New Canaan Community Center Parking Lot<br />
                123 Main Street<br />
                New Canaan, CT 06840
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium text-[#cc2e83] mb-2">Operation Hours</h4>
              <p className="text-gray-300">
                During our 2-week trial: 8:00 AM - 7:00 PM daily
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium text-[#cc2e83] mb-2">Contact Details</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Mail className="text-[#cc2e83] mt-1 mr-3 h-5 w-5" />
                  <span className="text-gray-300">info@nomorestage4.org</span>
                </li>
                <li className="flex items-start">
                  <Phone className="text-[#cc2e83] mt-1 mr-3 h-5 w-5" />
                  <span className="text-gray-300">(555) 123-4567</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
              <h4 className="font-medium text-[#cc2e83] mb-2">Service Area</h4>
              <p className="text-gray-300 mb-4">
                Our New Canaan trial is open to residents from all surrounding areas, including:
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                <li className="text-gray-300">Stamford</li>
                <li className="text-gray-300">Norwalk</li>
                <li className="text-gray-300">Darien</li>
                <li className="text-gray-300">Wilton</li>
                <li className="text-gray-300">Westport</li>
                <li className="text-gray-300">Greenwich</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
