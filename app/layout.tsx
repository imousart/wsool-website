import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'وصول | استقبل زوارك بضغطة واحدة', description: 'نظّم دعوات الزوار ونقاط الوصول والاستقبال في مكان واحد مع وصول.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="ar" dir="rtl"><body>{children}</body></html>; }
