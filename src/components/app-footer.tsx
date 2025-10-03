import { cn } from "../lib/utils";
import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import type { ComponentProps } from "react";

export function AppFooter() {
  return (
    <div className="w-full h-10 px-4 flex items-center justify-end">
      <div className="flex items-center gap-2">
        <FooterLink href="https://example.com">
          <span>Donate</span>
          <ArrowUpRightIcon size={14} />
        </FooterLink>
        <FooterLink href="https://example.com">
          <span>Rate</span>
          <StarIcon size={14} />
        </FooterLink>
      </div>
    </div>
  );
}

type FooterLinkProps = ComponentProps<"a"> & {
  href: string;
};

function FooterLink({ href, children, ...props }: FooterLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "h-6 px-2 flex items-center gap-1 text-xs font-medium text-neutral-500 rounded-lg transition-colors border border-transparent",
        "hover:bg-neutral-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-200 focus-visible:ring-offset-0 focus-visible:border focus-visible:border-purple-400"
      )}
      {...props}
    >
      {children}
    </a>
  );
}
