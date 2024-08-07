import { type Language } from "@/i18n-config";
import ModalProvider from "@/providers/ModalProvider";
import "globals.css";

type RootProps = React.PropsWithChildren<{
  modal: React.ReactNode;
  params: { lang: Language };
}>;

export const metadata = {
  title: "+OneX | Base Next App",
  description:
    "This is an opinionated, Next application to get you started faster 🏎️",
  icons: {
    icon: "/favicon.png",
  },
};

export default function Layout({ children, modal, params }: RootProps) {
  return (
    <html lang={params.lang} className="h-full">
      <body className="h-full flex m-0 flex-col">
        <ModalProvider>{children}</ModalProvider>
        {modal}
      </body>
    </html>
  );
}
