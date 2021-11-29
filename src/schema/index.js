import { object, string } from "yup";

export const productSchema = object({
  productCode: string().required("required"),
  productName: string().required("required"),
  productCategory: object({
    id: string(),
    name: string()
  })
    .nullable()
    .required("Product category is required")
});
