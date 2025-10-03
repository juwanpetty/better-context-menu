import { AppFooter } from "../components/app-footer";
import type { PropsWithChildren } from "react";

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-88 rounded-xl border border-neutral-200 bg-stone-50 flex flex-col">
      <div>{children}</div>
      <AppFooter />
    </div>
  );
}
