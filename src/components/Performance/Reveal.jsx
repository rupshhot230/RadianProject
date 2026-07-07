export function Reveal({ children, delay = 0, className = "" }) {
  // Mock reveal component, since user didn't provide it
  // You can easily replace this with framer-motion or gsap reveal
  return (
    <div className={className} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}
