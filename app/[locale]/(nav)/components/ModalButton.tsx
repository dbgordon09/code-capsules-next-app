"use client";

import { Modal } from "@/components/Modal";
import { ModalContent } from "@/components/ModalContent";
import { show } from "@ebay/nice-modal-react";

export const ModalButton = ({ children }: React.PropsWithChildren) => {
  return (
    <button
      className="btn"
      onClick={() =>
        show(() => (
          <Modal>
            <ModalContent />
          </Modal>
        ))
      }
    >
      {children}
    </button>
  );
};
