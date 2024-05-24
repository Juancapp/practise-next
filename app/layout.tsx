import { monserrat } from "./ui/fonts";
import "./ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={`${monserrat.className} antialiased`}>{children}
      <footer className="py-10 flex justify-center items-center">Footer general aplicado a toda la página, obviamente. Sentido común.</footer>
    </body>
    </html>
  );
}
