import MobileNav from "./mobileNav"
import DashboardBreadcrumb from "./dashboardBreadcrumb"
import { SearchInput } from "./searchInput"
import { User } from "./user"

const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <MobileNav />
        <DashboardBreadcrumb />
        <SearchInput />
        <User />
    </header>
  )
}

export default Header