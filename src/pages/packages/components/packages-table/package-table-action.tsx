import PopupModal from "@/components/shared/popup-modal";
import TableSearchInput from "@/components/shared/table-search-input";
import OrderCreateForm from "../package-forms/package-create-form";
import ImportOrdersForm from "../package-forms/import-form";
import ImportModal from "@/components/shared/import-modal";
import ExportOrdersForm from "../package-forms/export-form";
import ExportModal from "@/components/shared/export-modal";

export default function StudentTableActions() {
  return (
    <div className="flex items-center justify-between py-5">
      <div className="flex flex-1 gap-4">
        <TableSearchInput placeholder="Search People Here" />
      </div>
      <div className="flex gap-3">
        <ExportModal
          renderModal={(onClose) => <ExportOrdersForm modalClose={onClose} />}
        />
        <ImportModal
          renderModal={(onClose) => <ImportOrdersForm modalClose={onClose} />}
        />
        <PopupModal
          renderModal={(onClose) => <OrderCreateForm modalClose={onClose} />}
        />
      </div>
    </div>
  );
}
