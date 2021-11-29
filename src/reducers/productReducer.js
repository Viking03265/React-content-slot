import { appConstants } from "../constants";

export const initialState = {
  products: [],
  errors: [],
  contentSlots: []
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case appConstants.GET_CONTENT_SLOTS_SUCCESS:
      return {
        ...state,
        contentSlots: action.payload
      };

    case appConstants.UPLOAD_PRODUCT_SUCCESS:
      return action.payload.reduce(
        (
          state,
          {
            productCode,
            productName,
            productCategory,
            imageFile,
            imageFileName,
            imageUrl
          }
        ) => {
          const shouldUpdate = state.products.some(
            (product) => product.productCode === productCode
          );

          if (shouldUpdate) {
            return {
              ...state,
              products: state.products.map((product) =>
                product.productCode === productCode
                  ? {
                      ...product,
                      productImages: product.productImages.concat({
                        imageFile,
                        imageFileName,
                        imageUrl
                      })
                    }
                  : product
              )
            };
          }

          return {
            ...state,
            products: state.products.concat({
              productCode,
              productName,
              productCategory,
              productExisting: true,
              slot: [],
              productImages: [
                {
                  imageFile,
                  imageFileName,
                  imageUrl
                }
              ]
            })
          };
        },
        state
      );

    case appConstants.VALIDATE_SUCCESS:
      return {
        ...state,
        errors: [
          ...state.errors,
          ...action.payload.data.filter((data, idx) => {
            return action.payload.images.some(
              (image) => data.id === image.imageFileName
            );
          })
        ]
      };

    case appConstants.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.map((product) => ({
          ...product,
          productImages: product.productImages.map((p) => {
            const isErrorMatches = state.errors.some(
              (data) => data.id === p.imageFileName
            );

            return {
              ...p,
              hasError: isErrorMatches ? true : false,
              msg: isErrorMatches
                ? state.errors.find((data) => data.id === p.imageFileName)
                : []
            };
          })
        }))
      };

    default:
      return state;
  }
};

export default appReducer;
