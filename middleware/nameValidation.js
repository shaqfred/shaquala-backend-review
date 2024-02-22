function checkName(request, response, next) {
  const name = request.body.name;

  if (typeof name === "string") {
    const nameArr = name.split(" ");

    const firstName = nameArr[0];
    // const lastName = nameArr[1].toUpperCase;

    const firstLetterName = firstName.charAt(0).toUpperCase();

    const restOfFirstName = firstName.slice(1).toLowerCase();

    const convertedFirstName = firstLetterName + restOfFirstName;

    request.body.name = `${convertedFirstName}`;

    next();
  } else {
    response.status(404).json({
      Error: "name must be a string",
    });
  }
}

module.exports = { checkName };
