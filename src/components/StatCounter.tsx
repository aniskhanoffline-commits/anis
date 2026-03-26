import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const StatCounter = ({ value, label, icon }: StatCounterProps) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-3">
        {icon}
      </div>
      <div className="font-display text-3xl md:text-4xl font-bold text-foreground">{value}</div>
      <div className="text-sm text-muted-foreground font-body mt-1">{label}</div>
    </div>
  );
};

export default StatCounter;
