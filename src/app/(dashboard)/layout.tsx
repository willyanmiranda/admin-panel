import DesktopNav from "@/components/layout/header/desktopNav";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header/header";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <TooltipProvider>
        <main className="flex min-h-screen w-full flex-col bg-muted/40">
          <DesktopNav/>
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <Header/>
            <main className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4 bg-muted/40">
              {children}
            </main>
          </div>
        </main>
      </TooltipProvider>
    );
}