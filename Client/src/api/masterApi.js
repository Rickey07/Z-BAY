export default async function masterApi(
  requestFor,
  requestMethod,
  requestBody = {},
  anyId
) {
  try {
    const url = createUrl(requestFor, anyId);
    const header = {
      "Content-Type":"application/json",
      "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE3MjZiMzAyZTIwZTEwN2UxMDE4M2MiLCJpYXQiOjE2Nzk1MDY4MDl9.OKdqdE_m0AfnG6_Djp0ninohuTLOcqzuZyeFFkiFSa0"
    }
    const options = {
      method: requestMethod,
      headers: header,
      body: JSON.stringify(requestBody),
    };
    const response =
      (await requestMethod) === "GET" ? fetch(url) : fetch(url, options);
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
    default:
      break;
  }
  return newUrl;
}
