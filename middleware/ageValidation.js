function checkAge(request, response, next) {
  const age = request.body.age;

  if (age >= 1) {
    next();
  } else {
    response
      .status(404)
      .json("Invalid age input.Age must be a positive number");
  }
}
module.exports = { checkAge };
