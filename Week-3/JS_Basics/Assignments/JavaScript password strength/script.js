// Your solution goes here
function isStrongPassword(password) {
  if (
    password.length < 8 ||
    password.includes("password") ||
    !/[A-Z]/.test(password)
  ) {
    return false;
  } else {
    return true;
  }
}
