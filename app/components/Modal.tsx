"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

type ModalProps = React.PropsWithChildren<{
  isParallelRouteModal?: boolean;
}>;

export const Modal = ({
  children,
  isParallelRouteModal = false,
}: ModalProps) => {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    if (!isParallelRouteModal) return;
    router.back();
  }

  return (
    <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
      <div className="modal-box">
        {children}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button />
      </form>
    </dialog>
  );
};
