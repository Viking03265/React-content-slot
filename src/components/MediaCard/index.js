import React from "react";
import { Autocomplete } from "@material-ui/lab";
import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  TextField
} from "@material-ui/core";

export default function MediaCard({ productImage, contentSlots }) {
  const mappedErrorMessage =
    productImage.hasError &&
    productImage.msg?.validationMessages.map(
      (data) => productImage.validationMessages
    );

  const onChangeContentSlot = () => {};

  return (
    <Card
      style={{
        border: productImage.hasError ? "1px solid red" : "unset"
      }}
    >
      <CardContent>
        <CardMedia
          component="img"
          height="140"
          image={
            productImage.imageFile
              ? URL.createObjectURL(productImage.imageFile)
              : productImage.imageUrl
          }
        />
        <p>{productImage.imageFileName}</p>
        {productImage.hasError &&
          mappedErrorMessage.map((msg, idx) => (
            <Box key={idx + msg} marginTop={idx === 0 ? 2 : 1}>
              <Typography color="secondary">{msg}</Typography>
            </Box>
          ))}
        <Autocomplete
          fullWidth
          size="small"
          options={contentSlots}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Content Slots"
              variant="outlined"
              fullWidth
            />
          )}
          getOptionLabel={(option) => option.name || ""}
          onChange={(_, value) => onChangeContentSlot()}
        />
      </CardContent>
    </Card>
  );
}
