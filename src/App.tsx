import React from "react";
import cn from "clsx";
import "./App.css";

function App() {
  return (
    <div className="flex">
      <div className="flex h-screen flex-col border-e bg-slate-600 text-white">
        <div className="px-4 h-16 flex items-center">
          <span className="flex h-10 w-32 items-center justify-center rounded-lg bg-gray-100 text-xl text-gray-600">
            🌤️ <span className="text-sm ml-1">Logo</span>
          </span>
        </div>

        <div className="px-4 py-6">
          <ul className="space-y-1">
            {[{ label: "Dashboard", active: true }, { label: "Users" }].map((d) => (
              <li key={d.label}>
                <a
                  href="#"
                  className={cn("block rounded-lg px-4 py-2 text-sm font-medium hover:bg-slate-800", {
                    "bg-slate-800": d.active,
                  })}
                >
                  {d.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grow flex flex-col">
        <header className="bg-white px-4 shadow items-center h-16 flex grow-0">
          <div className="flex">
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
        </header>
        <main className="p-4 grow">
          <div>Custom variable {process.env.REACT_APP_VARIABLE}</div>
        </main>
      </div>
    </div>
  );
}

export default App;
