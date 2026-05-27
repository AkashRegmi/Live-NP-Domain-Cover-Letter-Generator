import { Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-3 rounded-2xl">
            <Globe className="text-white" size={26} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white">
              NP Domain Cover Letter Generator
            </h1>

            <p className="text-slate-400 text-sm">
              Generate NP Domain Request Cover Letters Easily
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
