import { Roboto } from "next/font/google";
import "./globals.css";
import Headers from "../components/layout/Header";
import AppProvider  from "@/components/menu/AppContext";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Pizzas a domicilio",
  description: "Somos la mejor pizzeria de Golondrinas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <main className="max-w-6xl mx-auto p-4">
          <AppProvider>
            <Headers />
            {children}
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
