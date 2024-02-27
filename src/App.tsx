import React from "react";
import "./App.css";

function App() {
  return (
    <div className="flex">
      <div className="flex h-screen flex-col border-e bg-white ">
        <div className="px-4 h-16 flex items-center">
          <span className="flex h-10 w-32 items-center justify-center rounded-lg bg-gray-100 text-xl text-gray-600">
            🌤️ <span className="text-sm ml-1">Logo</span>
          </span>
        </div>

        <div className="px-4 py-6">
          <ul className="space-y-1">
            <li>
              <a
                href="#"
                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                Dashboard
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Users
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grow flex flex-col">
        <header className="bg-white px-4 shadow items-center h-16 flex grow-0">
          <div className="flex">
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
        </header>
        <main className="p-4 bg-gray-100 grow">
          <div>Custom variable {process.env.REACT_APP_VARIABLE}</div>
        </main>
      </div>
    </div>
  );
}

export default App;
