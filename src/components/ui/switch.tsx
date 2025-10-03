import { Switch as SwitchPrimitives } from "@base-ui-components/react/switch";
import { cn } from "../../lib/utils";

type SwitchProps = React.ComponentProps<typeof SwitchPrimitives.Root> & {
  className?: string;
};

export function Switch({ className, ...props }: SwitchProps) {
  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-5 w-[2.125rem] shrink-0 cursor-pointer items-center rounded-full border-0 border-transparent transition-colors data-[checked]:bg-green-500 data-[checked]:active:bg-green-600 data-[unchecked]:bg-neutral-300 data-[unchecked]:active:bg-neutral-400 p-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-200 focus-visible:ring-offset-1",
        className
      )}
      {...props}
    >
      <SwitchPrimitives.Thumb className="pointer-events-none block size-4 rounded-full bg-white ring-0 transition-transform data-[checked]:translate-x-3.5 data-[unchecked]:translate-x-0" />
    </SwitchPrimitives.Root>
  );
}

Switch.displayName = SwitchPrimitives.Root.displayName;
