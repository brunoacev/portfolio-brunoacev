import { Ping } from "../ping";

function Notation() {
  return (
    <div className="flex flex-col gap-4 px-3 py-2">
      <span className="font-semibold">Anotações:</span>
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2">
          <Ping color="bg-yellow-300" />
          <span className="text-sm font-semibold">Já concluido</span>
        </div>
        <div className="flex items-center gap-2">
          <Ping color="bg-blue-500" />
          <span className="text-sm font-semibold">Em progresso</span>
        </div>
      </div>
    </div>
  );
}

export { Notation };
