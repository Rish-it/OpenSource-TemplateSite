import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size: string;
  withText?: boolean;
}

export default function Logo({ size, withText }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex flex-row justify-start items-end ",
        withText && "gap-3"
      )}
    >
      <div className={cn("relative", size)}>
        <Image
          src="/temp.png"
          alt="Logo TempTime  "
          fill
          priority
        />
      </div>
      {withText && <p className="text-lg font-semibold">TempTime</p>}
    </Link>
  );
}
