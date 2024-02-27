import { HeaderTitleTarget } from "./header-title";

export function Header() {
  return (
    <header className="flex items-center bg-white px-4 h-16 shadow">
      <HeaderTitleTarget as="h1" className="text-lg font-semibold" />
    </header>
  );
}
