import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { FolderDown, FolderUp, Plus } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";

type TPopupModalProps = {
  onConfirm?: () => void;
  loading?: boolean;
  renderModal: (onClose: () => void) => React.ReactNode;
};

export default function ImportModal({ renderModal }: TPopupModalProps) {
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isAddNewModalOpen, setIsAddNewModalOpen] = useState(false);

  const closeImportModal = () => setIsImportModalOpen(false);
  const closeExportModal = () => setIsExportModalOpen(false);
  const closeAddNewModal = () => setIsAddNewModalOpen(false);

  return (
    <>
      <Button
        className="text-xs md:text-sm"
        onClick={() => setIsImportModalOpen(true)}
      >
        <FolderDown className="mr-2 h-4 w-4" /> Import
      </Button>
      {/* <Button
        className="text-xs md:text-sm"
        onClick={() => setIsExportModalOpen(true)}
      >
        <FolderUp className="mr-2 h-4 w-4" /> Export
      </Button> */}
      {/* <Button
        className="text-xs md:text-sm"
        onClick={() => setIsAddNewModalOpen(true)}
      >
        <Plus className="mr-2 h-4 w-4" /> Add New
      </Button> */}

      <Modal
        isOpen={isImportModalOpen}
        onClose={closeImportModal}
        className={"!bg-background !px-1"}
      >
        <ScrollArea className="h-[80dvh] px-6">
          {renderModal(closeImportModal)}
        </ScrollArea>
      </Modal>

      {/* <Modal
        isOpen={isExportModalOpen}
        onClose={closeExportModal}
        className={'!bg-background !px-1'}
      >
        <ScrollArea className="h-[80dvh] px-6">
          {renderModal(closeExportModal)}
        </ScrollArea>
      </Modal> */}

      {/* <Modal
        isOpen={isAddNewModalOpen}
        onClose={closeAddNewModal}
        className={"!bg-background !px-1"}
      >
        <ScrollArea className="h-[80dvh] px-6">
          {renderModal(closeAddNewModal)}
        </ScrollArea>
      </Modal> */}
    </>
  );
}
