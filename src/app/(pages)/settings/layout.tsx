import { Metadata } from "next";
import { Geist } from 'next/font/google'
 
const geist = Geist({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Settings",
};

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
