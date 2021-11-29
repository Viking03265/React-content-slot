import React from "react";
import { TextField, Grid } from "@material-ui/core";

export default function ProductInputs(props) {
  const { formik, categories } = props;

  return (
    <Grid component="div" container spacing={2}>
      <Grid component="div" item xl={3} lg={3} md={3} sm={12} xs={12}>
        <TextField
          fullWidth
          label="Code"
          variant="outlined"
          size="small"
          name="productCode"
          value={formik.values.productCode}
          helperText={
            formik.touched.productCode ? formik.errors.productCode : ""
          }
          error={
            formik.touched.productCode && Boolean(formik.errors.productCode)
          }
          onChange={formik.handleChange}
        />
      </Grid>
      <Grid component="div" item xl={3} lg={3} md={3} sm={12} xs={12}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          size="small"
          name="productName"
          value={formik.values.productName}
          helperText={
            formik.touched.productName ? formik.errors.productName : ""
          }
          error={
            formik.touched.productName && Boolean(formik.errors.productName)
          }
          onChange={formik.handleChange}
        />
      </Grid>
    </Grid>
  );
}
