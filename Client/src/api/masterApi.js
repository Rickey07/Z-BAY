import getCookieValue from "../helpers/Common/getCookieValue";

const requestWithMultipartOptions = ["createProduct", "createCategory"];

export default async function masterApi(
  requestFor,
  requestMethod,
  requestBody = {},
  anyId
) {
  try {
    // Create URL For Request
    const url = createUrl(requestFor, anyId);
    // Get Auth Token
    const auth_token = getCookieValue("_auth");
    const header = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth_token}`,
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
    // Check API call Type (GET Or OTHERS)
    const optionsForAPICall = requestWithMultipartOptions.includes(requestFor)
      ? optionsForMultipart
      : options;
    const response =
      (await requestMethod) === "GET"
        ? fetch(url,{headers:header})
        : fetch(url, optionsForAPICall);
    const resolvedPromise = (await response).json();
    return resolvedPromise;
  } catch (error) {
    return error.message;
  }
}

function createUrl(requestFor, anyId) {
  // Add Cases Here
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
      break;
    case "registerUser":
      newUrl = newUrl + `/register`;
      break;
    case "userDetails":
      newUrl = newUrl + `/user/${anyId}`;
      break;
    case "getAllProducts":
      newUrl = newUrl + `/product/all/products`;
      break;
    case "getProduct":
      newUrl = newUrl + `/product/${anyId}`;
      break;
    case "newAddress":
      newUrl = newUrl + `/address/new`;
      break;
    case "allAddress":
      newUrl = newUrl + `/address/all/${anyId}`;
      break;
    case "updateAddress":
      newUrl = newUrl + `/address/edit`;
      break;
    case "deleteAddress":
      newUrl = newUrl + "/address/delete";
      break;
    case "payment":
      newUrl = newUrl + `/checkout/create-payment-intent`;
      break;
    case "newOrder":
      newUrl = newUrl + `/orders/new`;
      break;
    case "updateUser":
      newUrl = newUrl + `/update/${anyId}`;
      break;
    case "allOrders":
      newUrl = newUrl + `/orders/all-orders`;
      break
    case "analytics":
      newUrl = newUrl + '/analytics';
      break;
    default:
      break;
  }
  return newUrl;
}
