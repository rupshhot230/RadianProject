import { useState } from "react";
import { ArrowRight } from "lucide-react";

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const YoutubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <footer className="bg-[#0a0a0a] text-[#f5f5f5] pt-24 pb-8">
      <div className="mx-auto max-w-9xl px-5 sm:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-32">

          {/* Left: Explore text & Button */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-tight mb-8">
              Explore <br />
              beyond limits.
            </h2>
            <button className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#f5f5f5]/30 hover:border-[#f5f5f5] transition-colors text-sm font-medium">
              Pre-order now
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Middle: Menu & Socials */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#f5f5f5]/40 mb-6">Menu</h4>
              <ul className="space-y-4">
                {["Home", "EXR", "Technical specs", "Our story", "Support / FAQ", "Download press kit"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[#f5f5f5]/80 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#f5f5f5]/40 mb-6">Socials</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center gap-3 text-sm text-[#f5f5f5]/80 hover:text-white transition-colors">
                    <InstagramIcon className="h-4 w-4" /> Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 text-sm text-[#f5f5f5]/80 hover:text-white transition-colors">
                    <FacebookIcon className="h-4 w-4" /> Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 text-sm text-[#f5f5f5]/80 hover:text-white transition-colors">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.65-2.22 2.15-5.34 3.22-8.5 2.82-3.14-.4-5.98-2.3-7.55-5.07-1.57-2.77-1.78-6.17-.46-9.06 1.3-2.89 3.8-5.1 6.82-5.93 2.05-.56 4.26-.51 6.27.15v4.03c-1.33-.5-2.8-.57-4.17-.18-1.37.38-2.55 1.25-3.35 2.45-.8 1.2-1.07 2.71-.78 4.13.29 1.42 1.17 2.65 2.42 3.37 1.25.72 2.78.9 4.19.46 1.4-.44 2.56-1.45 3.2-2.76.64-1.31.81-2.84.45-4.22-.01-4.82-.01-9.64-.01-14.46z" /></svg>
                    TikTok
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 text-sm text-[#f5f5f5]/80 hover:text-white transition-colors">
                    <YoutubeIcon className="h-4 w-4" /> YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Video Card */}
          <div className="lg:col-span-3">
            <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer mb-3">
              <img
                src="https://cdn.prod.website-files.com/69c0f1e667a0fb75bfd742b5/69cd2465cf61f9c747574bb1_Enduro%2002.webp"
                alt="Video thumbnail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>
            <div className="flex items-center justify-between text-sm text-[#f5f5f5]/60">
              <span className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                Play release video
              </span>
              <span>2:56</span>
            </div>
          </div>
        </div>

        {/* Bottom Newsletter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="flex-1 max-w-[500px]">
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-6">
              Stay up to date with our newsletter
            </h3>
            <form onSubmit={submit} className="flex gap-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="flex-1 rounded-full border-none bg-[#f5f5f5]/5 px-6 py-3.5 text-sm text-[#f5f5f5] placeholder:text-[#f5f5f5]/40 focus:ring-1 focus:ring-[#f5f5f5] focus:outline-none transition-colors"
              />
              <button type="submit" className="rounded-full bg-[#f5f5f5] text-[#0a0a0a] px-8 py-3.5 text-sm font-semibold hover:bg-[#f5f5f5]/90 transition-colors shrink-0">
                {sent ? "Subscribed" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 border-t border-[#f5f5f5]/20 pt-8 text-xs text-[#f5f5f5]/50 font-medium">
          <div>
            © {new Date().getFullYear()} | VOLTARC
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#" className="hover:text-white transition-colors">Terms & conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-white transition-colors">Privacy settings</a>
            <span className="hover:text-white transition-colors cursor-pointer">Co-funded by EU</span>
            <span className="hover:text-white transition-colors cursor-pointer">Website by UNCOMMON</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
