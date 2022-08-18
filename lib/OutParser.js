exports.successHandler = (messages = null, data = null, key = null) => {
  return {
    status: true,
    code: 200,
    messages: messages,
    data: data,
    key: key,
  }
}

exports.validationHandler = (messages = null, data = null, key = null) => {
  return {
    status: false,
    code: 201,
    messages: messages,
    data: data,
    key: key,
  }
}

exports.errorHandler = (messages = null, data = null, key = null) => {
  return {
    status: false,
    code: 202,
    messages: messages,
    data: data,
    key: key,
  }
}

exports.unAuthorizedHandler = (messages = null, data = null, key = null) => {
  return {
    status: false,
    code: 205,
    messages: messages,
    data: data,
    key: key,
  }
}