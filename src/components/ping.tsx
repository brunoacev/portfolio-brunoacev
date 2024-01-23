type Ping = {
  color: string;
};

function Ping({ color }: Ping) {
  return (
    <div className="flex items-center gap-2 relative">
      <div className={`rounded-full w-fit h-fit ${color}`}>
        <div
          className={`p-[5px] ${color} rounded-full w-fit h-fit animate-ping`}
        />
      </div>
    </div>
  );
}

export { Ping };
