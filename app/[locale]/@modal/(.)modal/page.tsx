import { Modal } from "@/components/Modal";
import { ModalContent } from "@/components/ModalContent";

export default async function Page() {
  return (
    <Modal isParallelRouteModal>
      <ModalContent />
    </Modal>
  );
}
