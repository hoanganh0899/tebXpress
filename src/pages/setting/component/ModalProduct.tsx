import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const productSchema = z.object({
  name: z.string().nonempty("Product name is required"),
  sku: z.string().nonempty("SKU is required"),
  detail: z.string().optional(),
  material: z.string().optional(),
  weight: z
    .number()
    .min(0, "Weight must be greater than or equal to 0")
    .optional(),
  country: z.string().nonempty("Country is required"),
  length: z
    .number()
    .min(0, "Length must be greater than or equal to 0")
    .optional(),
  width: z
    .number()
    .min(0, "Width must be greater than or equal to 0")
    .optional(),
  height: z
    .number()
    .min(0, "Height must be greater than or equal to 0")
    .optional(),
});

type ProductEdit = z.infer<typeof productSchema>;

interface ModalAddClaimProps {
  visible: boolean;
  title: string;
  handleClose: () => void;
  handleSave: (product: ProductEdit) => void;
  countries: string[];
}

const ModalAddClaim: React.FC<ModalAddClaimProps> = ({
  visible,
  title,
  handleClose,
  handleSave,
  countries,
}) => {
  const [productEdit, setProductEdit] = useState<ProductEdit>({
    name: "",
    sku: "",
    detail: "",
    material: "",
    weight: undefined,
    country: "",
    length: undefined,
    width: undefined,
    height: undefined,
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ProductEdit, string>>
  >({});

  const validateProduct = () => {
    try {
      productSchema.parse(productEdit);
      setErrors({});
      return true;
    } catch (e) {
      if (e instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ProductEdit, string>> = {};
        e.errors.forEach((error) => {
          newErrors[error.path[0] as keyof ProductEdit] = error.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProductEdit((prev) => ({
      ...prev,
      [name]:
        name === "weight" ||
        name === "length" ||
        name === "width" ||
        name === "height"
          ? parseFloat(value)
          : value,
    }));
  };

  const onSave = () => {
    if (validateProduct()) {
      handleSave(productEdit);
    }
  };

  return (
    visible && (
      <div className="modal__add-claim">
        <div className="p-modal">
          <div className="p-modal-body">
            <div className="mb-4">
              <label className="modal__add-claim-label">
                Product Name: <span>*</span>
              </label>
              <Input
                type="text"
                className={`form-control ${errors.name ? "error-color" : ""}`}
                placeholder="Enter product name"
                name="name"
                value={productEdit.name}
                onChange={handleChange}
              />
              {errors.name && <span className="err-span">{errors.name}</span>}
            </div>

            <div className="mb-4">
              <label className="modal__add-claim-label">
                SKU: <span>*</span>
              </label>
              <Input
                type="text"
                className={`form-control ${errors.sku ? "error-color" : ""}`}
                placeholder="Enter SKU"
                name="sku"
                value={productEdit.sku}
                onChange={handleChange}
              />
              {errors.sku && <span className="err-span">{errors.sku}</span>}
            </div>

            <div className="mb-4">
              <label className="modal__add-claim-label">Product Type:</label>
              <Input
                type="text"
                className="form-control"
                placeholder="Enter product type"
                name="detail"
                value={productEdit.detail}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="modal__add-claim-label">
                Product Material:
              </label>
              <Input
                type="text"
                className="form-control"
                placeholder="Enter product material"
                name="material"
                value={productEdit.material}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="modal__add-claim-label">Weight:</label>
              <Input
                type="number"
                className={`form-control ${errors.weight ? "error-color" : ""}`}
                placeholder="gram"
                name="weight"
                value={
                  productEdit.weight !== undefined
                    ? productEdit.weight.toString()
                    : ""
                }
                onChange={handleChange}
              />
              {errors.weight && (
                <span className="err-span">{errors.weight}</span>
              )}
            </div>

            <div className="mb-4">
              <label className="modal__add-claim-label">
                Country: <span>*</span>
              </label>
              <Select>
                <SelectTrigger className="w-full border p-2 rounded-md">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {countries.map((country, index) => (
                      <SelectItem key={index} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.country && (
                <span className="err-span">{errors.country}</span>
              )}
            </div>

            <div className="mb-4 grid grid-cols-3 gap-4">
              <div>
                <label className="modal__add-claim-label">Length:</label>
                <Input
                  type="number"
                  className={`form-control ${errors.length ? "error-color" : ""}`}
                  placeholder="cm"
                  name="length"
                  value={
                    productEdit.length !== undefined
                      ? productEdit.length.toString()
                      : ""
                  }
                  onChange={handleChange}
                />
                {errors.length && (
                  <span className="err-span">{errors.length}</span>
                )}
              </div>

              <div>
                <label className="modal__add-claim-label">Width:</label>
                <Input
                  type="number"
                  className={`form-control ${errors.width ? "error-color" : "red"}`}
                  placeholder="cm"
                  name="width"
                  value={
                    productEdit.width !== undefined
                      ? productEdit.width.toString()
                      : ""
                  }
                  onChange={handleChange}
                />
                {errors.width && (
                  <span className="err-span">{errors.width}</span>
                )}
              </div>

              <div>
                <label className="modal__add-claim-label">Height:</label>
                <Input
                  type="number"
                  className={`form-control ${errors.height ? "error-color" : ""}`}
                  placeholder="cm"
                  name="height"
                  value={
                    productEdit.height !== undefined
                      ? productEdit.height.toString()
                      : ""
                  }
                  onChange={handleChange}
                />
                {errors.height && (
                  <span className="err-span">{errors.height}</span>
                )}
              </div>
            </div>
          </div>
          <div className="p-modal-footer flex justify-end space-x-4">
            <Button
              onClick={handleClose}
              className="btn btn-default"
              variant="outline"
            >
              Cancel
            </Button>
            <Button onClick={onSave} className="btn btn-primary">
              Save
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default ModalAddClaim;
