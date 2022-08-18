const {
        authLoginValidation,
        authRegisterValidation,
        listQuotesValidation,
        createQuotesValidation,
        updateQuotesValidation,
        deleteQuotesValidation
      } = require('./Validation');
const { ApiService } = require('../service');
const OutParser = require('../lib/OutParser')
class ApiController {
  async getTest(req, res) {
    const response = await ApiService.getUsers();
    res.send(response)
  }

  async authLogin(req, res) {
    let validation = authLoginValidation(req.body);
    if (validation.status == false) return res.send(OutParser.validationHandler("You get Validation Thanks.", validation.validation));
    let response = await ApiService.authRegisterService(req.body);
    return res.send(response);
  }

  async authRegister(req, res) {
    let validation = authRegisterValidation(req.body);
    if (validation.status == false) return res.send(OutParser.validationHandler("You get Validation Thanks.", validation.validation));
    let response = await ApiService.authRegisterService(req.body);
    return res.send(response)
  }

  async listQuote(req, res) {
    let validation = listQuotesValidation(req.query);
    if (validation.status == false) return res.send(OutParser.validationHandler("You get Validation Thanks.", validation.validation));
    let response = await ApiService.listQuoteService(req.query);
    return res.send(response)
  }

  async createQuotes(req, res) {
    let validation = createQuotesValidation(req.body);
    if (validation.status == false) return res.send(OutParser.validationHandler("You get Validation Thanks.", validation.validation));
    let response = await ApiService.createQuotesService(req.body);
    return res.send(response)
  }
  async updateQuotes(req, res) {
    let validation = updateQuotesValidation(req.body);
    if (validation.status == false) return res.send(OutParser.validationHandler("You get Validation Thanks.", validation.validation));
    let response = await ApiService.updateQuotesService(req.body);
    return res.send(response)
  }

  async deleteQuotes(req, res) {
    let validation = deleteQuotesValidation(req.body);
    if (validation.status == false) return res.send(OutParser.validationHandler("You get Validation Thanks.", validation.validation));
    let response = await ApiService.deleteQuotesService(req.body);
    return res.send(response)
  }
}

module.exports = ApiController;