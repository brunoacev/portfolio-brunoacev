import { cn } from "@/lib/utils";

type Ping = {
  color: string;
};

function Ping({ color }: Ping) {
  return (
    <div className="flex items-center gap-2 relative">
      <div className={cn(`rounded-full w-fit h-fit`, color)}>
        <div
          className={cn(
            `p-[5px]  rounded-full w-fit h-fit animate-ping`,
            color
          )}
        />
      </div>
    </div>
  );
}

export { Ping };
