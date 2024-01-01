"use client" // クライアント側のコードであることを明示する

import { useState } from 'react';
import LoggedInView from './components/LoggedInView';     // LoggedInView コンポーネントを用意する
import LoggedOutView from './components/LoggedOutView';   // LoggedOutView コンポーネントを用意する

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p>以下はページ内部に配置したコンポーネントを切り替えます</p>
        {isLoggedIn ? <LoggedInView /> : <LoggedOutView />}
        <button onClick={() => setIsLoggedIn(!isLoggedIn)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </button>
      </div>
    </main>
  )
}
