import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Lucas Rayan Guerra",
  description: "Portfólio de Lucas Rayan Guerra",
  author: "Lucas Rayan Guerra",
  icon: "./favicon.ico",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
