const requestWithMultipartOptions = ["createProduct", "createCategory"];

export default async function masterApi(
  requestFor,
  requestMethod,
  requestBody = {},
  anyId
) {
  try {
    const url = createUrl(requestFor, anyId);
    const header = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE3MjZiMzAyZTIwZTEwN2UxMDE4M2MiLCJpYXQiOjE2Nzk1MDY4MDl9.OKdqdE_m0AfnG6_Djp0ninohuTLOcqzuZyeFFkiFSa0",
    };
    const options = {
      method: requestMethod,
      headers: header,
      body: JSON.stringify(requestBody),
    };
    const optionsForMultipart = {
      method: requestMethod,
      body: requestBody,
    };
    const optionsForAPICall = requestWithMultipartOptions.includes(requestFor)
      ? optionsForMultipart
      : options;
    const response =
      (await requestMethod) === "GET"
        ? fetch(url)
        : fetch(url, optionsForAPICall);
    const resolvedPromise = (await response).json();
    return resolvedPromise;
  } catch (error) {
    return error.message;
  }
}

function createUrl(requestFor, anyId) {
  let newUrl = "http://localhost:5000/api";
  switch (requestFor) {
    case "getAllUsers":
      newUrl = newUrl + `/getAll/${anyId}`;
      break;
    case "deleteUser":
      newUrl = newUrl + `/delete/${anyId}`;
      break;
    case "createProduct":
      newUrl = newUrl + `/product/create`;
      break;
    case "deleteProduct":
      newUrl = newUrl + `/product/delete`;
      break;
    case "updateProduct":
      newUrl = newUrl + `/product/update`;
      break;
    case "createCategory":
      newUrl = newUrl + `/category/create`;
      break;
    case "deleteCategory":
      newUrl = newUrl + `/category/delete`;
      break;
    case "loginUser":
      newUrl = newUrl + `/login`;
      break
    case  "registerUser":
      newUrl = newUrl + `/register`;
      break
    case "getAllProducts":
      newUrl = newUrl + `/product/all/products`;
      break
    case "getProduct":
      newUrl = newUrl + `/product/${anyId}`;
      break;
    case "newAddress":
      newUrl = newUrl + `/address/new`;
      break;
    case "allAddress":
      newUrl = newUrl + `/address/all/${anyId}`
      break;
    case "updateAddress":
      newUrl = newUrl + `/address/edit`;
      break;
    case "deleteAddress":
      newUrl = newUrl + '/address/delete';
      break;
    case "payment":
      newUrl = newUrl + `/checkout/create-payment-intent`;
      break
    default:
      break;
  }
  return newUrl;
}
