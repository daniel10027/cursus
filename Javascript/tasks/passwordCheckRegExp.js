  function passwordCheckRegExp(inputString) {
          return inputString.length>=5
          && /[a-z]/.test(inputString)
          && /[A-Z]/.test(inputString)
          && /[0-9]/.test(inputString)
  }
