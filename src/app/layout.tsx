import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const vazirmatn = localFont({
  src: "../../public/Vazirmatn/Vazirmatn-VariableFont_wght.ttf",
  weight: "400", // Default weight for the variable font
  style: "normal",
});

export const metadata: Metadata = {
  title: "نکست مارکت | نسل جدید آگهی های بدون واسطه",
  // description: "",
  // icons: {
  //   icon: "/favicon.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={vazirmatn.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <div>
            <Toaster dir="rtl" className={vazirmatn.className} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
