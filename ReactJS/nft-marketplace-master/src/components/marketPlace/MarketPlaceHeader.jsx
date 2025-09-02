import { SharedButton } from "../shared/SharedButton";

export function MarketPlaceHeader() {
  return (
    <div className="flex sm:justify-between sm:flex-row flex-col items-center md:gap-0 gap-5">
      <h1 className="text-lg md:text-[28px] font-bold">Marketplace</h1>
      <div className="rounded-full flex items-center px-3 bg-zinc-800 text-xs w-[270px]">
        <SharedButton variant="ghost">Active</SharedButton>
        <SharedButton className="rounded-full px-3 bg-zinc-700" variant="ghost">
          Recommended
        </SharedButton>
        <SharedButton variant="ghost">All Products</SharedButton>
      </div>
    </div>
  );
}
