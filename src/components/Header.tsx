import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  const [location] = useLocation();
  const isActive = location === href;

  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-white hover:text-[#cc2e83] transition ${
        isActive ? "text-[#cc2e83]" : ""
      }`}
    >
      {children}
    </a>
  );
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-black border-b border-[#cc2e83] shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="#" className="flex items-center space-x-2">
          <Logo width={80} height={40} className="w-[80px] h-auto" />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <Button 
            asChild 
            className="bg-[#cc2e83] hover:bg-[#a8246d] text-white border-0"
          >
            <a href="#booking">Book Appointment</a>
          </Button>
        </div>

        <button
          className="md:hidden text-[#cc2e83] focus:outline-none"
          id="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        } bg-black border-t border-[#cc2e83] absolute w-full left-0 z-50`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <NavLink href="#about" onClick={closeMobileMenu}>
            About
          </NavLink>
          <NavLink href="#how-it-works" onClick={closeMobileMenu}>
            How It Works
          </NavLink>
          <NavLink href="#pricing" onClick={closeMobileMenu}>
            Pricing
          </NavLink>
          <NavLink href="#faq" onClick={closeMobileMenu}>
            FAQ
          </NavLink>
          <NavLink href="#contact" onClick={closeMobileMenu}>
            Contact
          </NavLink>
          <Button
            asChild
            className="bg-[#cc2e83] hover:bg-[#a8246d] text-white border-0 mt-2"
          >
            <a href="#booking" onClick={closeMobileMenu}>
              Book Appointment
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
