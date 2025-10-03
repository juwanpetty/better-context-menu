import { Switch } from "../components/ui/switch";
import type { ComponentProps, PropsWithChildren } from "react";

export function SettingsContent({ children }: PropsWithChildren) {
  return (
    <section className="flex flex-col gap-5 px-4 py-5">{children}</section>
  );
}

export function SettingsGroup({ children }: PropsWithChildren) {
  return <div className="flex flex-col">{children}</div>;
}

export function SettingsGroupLabel({ children }: PropsWithChildren) {
  return (
    <h2 className="text-xs font-semibold mb-2 text-neutral-500 pl-1 select-none">
      {children}
    </h2>
  );
}

export function SettingsGroupContent({ children }: PropsWithChildren) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white py-2 px-4">
      {children}
    </div>
  );
}

export function SettingsMenu({ children }: PropsWithChildren) {
  return <div className="flex flex-col gap-1">{children}</div>;
}

export function SettingsMenuItem({ children }: PropsWithChildren) {
  return (
    <div className="h-8 flex items-center text-sm font-medium w-full justify-between select-none">
      {children}
    </div>
  );
}

type SettingsMenuToggleProps = ComponentProps<typeof Switch> & {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

export function SettingsMenuToggle({ ...props }: SettingsMenuToggleProps) {
  return <Switch {...props} />;
}
