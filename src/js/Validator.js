class Validator {
  validateUsername(username) {
    const regex = /^(?![\d_-])(?!.*[\d]{4})(?!.*[\d_-]$)[a-zA-Z\d_-]+$/;
    return regex.test(username);
  }
}

export default Validator;
