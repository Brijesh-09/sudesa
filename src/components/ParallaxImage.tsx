import { useParallax } from '@/hooks/useScroll';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  imgClassName?: string;
}

/**
 * Image with subtle scroll-driven parallax movement.
 * The image is slightly oversized so the parallax shift
 * doesn't reveal empty edges.
 */
export default function ParallaxImage({
  src,
  alt,
  className = '',
  speed = 0.12,
  imgClassName = '',
}: ParallaxImageProps) {
  const { ref, offset } = useParallax<HTMLDivElement>(speed);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`absolute inset-0 h-[115%] w-full object-cover ${imgClassName}`}
        style={{ transform: `translateY(${offset}px)` }}
      />
    </div>
  );
}
