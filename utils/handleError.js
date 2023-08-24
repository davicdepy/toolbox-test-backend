const handleHttpError = (response, message = "ERROR", code = 403) => {
  response.status(code);
  response.send({ error: message });
};

module.exports = { handleHttpError };
