export const getProductCode = (code) => {
  return (
    code.replace(/\.[^/.]+$/, "").split("_")[1] ||
    code.replace(/\.[^/.]+$/, "").split("_")[0] ||
    ""
  );
};
