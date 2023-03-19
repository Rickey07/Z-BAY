export default async function masterApi(
  header = {},
  requestFor,
  requestMethod,
  requestBody = {},
  anyId
) {
  try {
    const url = createUrl(requestFor, anyId);
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
    default:
      break;
  }
  return newUrl;
}
