import './globals.css';

export const metadata = {
  title: '我的技術部落格',
  description: '記錄我的技術學習與心得',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-center text-2xl font-bold">我的技術部落格</h1>
        </header>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
