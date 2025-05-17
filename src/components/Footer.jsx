import { Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary w-full text-base-100 pt-10 pb-4 px-4 md:px-16">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-8">
      {/* Left Info */}
      <div className="flex-1 flex flex-col gap-5">
        {/* Phone Row */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="font-semibold">Phone number:</span>
          <span>+91 9773926887, 8801791767</span>
          <span className="text-xs opacity-80 ml-2">| 24x7 Available</span>
        </div>
        {/* Email Row */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="font-semibold">Email:</span>
          <span>info@adelsocial.com</span>
        </div>
        {/* Address Row */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="font-semibold">Address:</span>
          <span>ATS Noida, 132</span>
        </div>
        {/* Social Icons */}
        <div className="flex gap-3 mt-2">
          <a href="#" className="rounded-full bg-base-100/20 hover:bg-accent transition-colors p-2" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="#" className="rounded-full bg-base-100/20 hover:bg-accent transition-colors p-2" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className="rounded-full bg-base-100/20 hover:bg-accent transition-colors p-2" aria-label="Twitter">
            <Twitter size={20} />
          </a>
        </div>
      </div>
      {/* Right Company Name */}
      <div className="flex-1 flex flex-col items-end md:items-end w-full md:pl-10 mt-8 md:mt-0">
        <div className="text-2xl md:text-3xl font-bold border-b-2 border-base-100/40 pb-2 mb-2 w-fit tracking-wide uppercase">
          TECH-TRIUMPH
        </div>
      </div>
    </div>
    {/* Bottom Copyright */}
    <div className="text-center text-xs mt-8 opacity-80">
      2025 ©Triumph. All Rights Reserved | Designed & Developed by <span className="font-semibold"></span>
    </div>
  </footer>
);

export default Footer;