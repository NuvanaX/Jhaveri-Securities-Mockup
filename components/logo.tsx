import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("relative flex items-center", className)}>
      <Image
        src="/jhaveri-logo.png"
        alt="Jhaveri Securities"
        width={140}
        height={35}
        className="w-auto h-[30px] md:h-[35px] object-contain"
        priority
      />
    </div>
  );
} 