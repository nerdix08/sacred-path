import { ReactNode } from "react";
import { TopNav } from "./TopNav";
import { BottomNav } from "./BottomNav";

interface AppLayoutProps {
  children: ReactNode;
  title?: string;
  showStreak?: boolean;
  showTopNav?: boolean;
  showBottomNav?: boolean;
}

export function AppLayout({ 
  children, 
  title,
  showStreak = true,
  showTopNav = true,
  showBottomNav = true 
}: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {showTopNav && <TopNav title={title} showStreak={showStreak} />}
      
      <main className={`
        ${showTopNav ? 'pt-14' : ''} 
        ${showBottomNav ? 'pb-20' : ''}
      `}>
        {children}
      </main>
      
      {showBottomNav && <BottomNav />}
    </div>
  );
}
