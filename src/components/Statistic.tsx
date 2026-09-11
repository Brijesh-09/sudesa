import { useCountUp } from '@/hooks/useScroll';

interface StatisticProps {
  value: number;
  suffix?: string;
  label: string;
  large?: boolean;
}

export default function Statistic({
  value,
  suffix = '',
  label,
  large = false,
}: StatisticProps) {
  const { value: displayValue, ref } = useCountUp(value);

  return (
    <div className="reveal">
      <span
        ref={ref}
        className={`block font-serif leading-none text-cream-100 ${
          large ? 'text-7xl lg:text-9xl' : 'text-5xl lg:text-6xl'
        }`}
      >
        {displayValue}
        <span className="text-gold-500">{suffix}</span>
      </span>
      <p className="mt-4 label-meta-muted">{label}</p>
    </div>
  );
}
