const apiRequest = async (url = "", optionsObj = null) => {
  let errMsg = null;
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error(`Request failed with status: ${response.status}`);
  } catch (err) {
    console.error("Fetch Error:", err);
    errMsg = err.message;
  }
  return errMsg;
};

export default apiRequest;
