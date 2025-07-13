import { Header } from "../../components";

export default function DashboardLayout({ children }: { children: React.ReactNode;}) {
  return (
     <div className="overflow-y-scroll w-screen h-screen antialiased selection:bg-blue-600 selection:text-white">

        <div className="flex flex-col">
            <Header />
            
            <div className="p-10 w-full">
                { children }
            </div>
        
        </div>
    </div>
  );
}