import { Button } from "@/components/ui/button";
import { CTAButtonProps } from "@/types/types";
import Link from "next/link";

function CTAButton({
  label,
  link,
  size = "lg",
  variant = "primary",
  action,
}: CTAButtonProps) {
  const buttonClass =
    variant === "primary"
      ? "bg-orange-500 hover:bg-orange-600 cursor-pointer"
      : "bg-white text-orange-600 border-white hover:bg-white/20 cursor-pointer";

  if (link) {
    return (
      <Link href={link}>
        <Button size={size} className={buttonClass}>
          {label}
        </Button>
      </Link>
    );
  }

  return (
    <Button size={size} className={buttonClass} onClick={action}>
      {label}
    </Button>
  );
}

export default CTAButton;
