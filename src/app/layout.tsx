import "@/assets/sass/main.scss";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <Header/>
        <html lang="fr">
          <body>
            {children}
          </body>
        </html>
        <Footer/>
      </>
  );
}
