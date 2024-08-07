"use client";

import { Provider as NiceModalProvider } from "@ebay/nice-modal-react";

export default function ModalProvider({ children }: React.PropsWithChildren) {
  return <NiceModalProvider>{children}</NiceModalProvider>;
}
