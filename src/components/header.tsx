import { HeaderTitleTarget } from "./header-title";
import { HeaderToolbarTarget } from './header-toolbar'

export function Header() {
  return (
    <header className="flex items-center bg-white px-4 h-16 shadow justify-between sticky top-0">
      <HeaderTitleTarget className="text-lg font-semibold" />
      <HeaderToolbarTarget />
    </header>
  );
}
