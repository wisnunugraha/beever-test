const { ApiRepository } = require('../repository')
const OutParse = require('../lib/OutParser')
const uuid = require('../lib/UUID')
class ApiService {


  async authLoginService(params) {
    let checkUser = await ApiRepository.getUsersCheck(params);
    if (checkUser.length <= 0) return OutParse.errorHandler('Users its does not exist, pleass try new email');
    console.log('tralala',checkUser[0].password , params.password)
    if(checkUser[0].password == params.password) {
      return OutParse.successHandler('Login success !!');
    }
    else {
      return OutParse.errorHandler('Users its exist, pleass try new email');

    }

  }

  async authRegisterService(params) {
    let checkUser = await ApiRepository.getUsersCheck(params);
    if (checkUser.length >= 1) return OutParse.errorHandler('Users its exist, pleass try new email');
    Object.assign(params, {
      id: uuid.uuid()
    })
    await ApiRepository.createUsers(params);
    return OutParse.successHandler(`Users ${params.email} success create new`);
  }

  async listQuoteService(params) {
    if (params.fillter == 1) {
      Object.assign(params, {
        status: true
      })
      let quotes = await ApiRepository.getQuotes(params)
      Object.assign(params, {
        status: false
      })
      let favorites = await ApiRepository.getQuotes(params);
      return OutParse.successHandler('Success get data list quotes', [quotes, favorites]);
    }
    else {
      let data = await ApiRepository.getQuotes()
      if (data.length <= 0) return OutParse.errorHandler('Quotes its exist, pleass try new quotes')
      return OutParse.successHandler('Success get data list quotes', data);
    }

  }

  async createQuotesService(params) {
    let checkQuotes = await ApiRepository.getQuotesCheck(params);
    if (checkQuotes.length >= 1) return OutParse.errorHandler('Quotes its exist, pleass try new quotes');
    Object.assign(params, {
      id: uuid.uuid()
    })
    console.log(params)
    await ApiRepository.createQuotes(params);
    return OutParse.successHandler(`Quotes ${params.quotes} has been created`);
  }
  async updateQuotesService(params) {
    let checkQuotes = await ApiRepository.getQuotesCheck(params);
    if (checkQuotes.length >= 1) return OutParse.errorHandler('Quotes its exist, pleass try new quotes');
    await ApiRepository.updateQuotes(params);
    return OutParse.successHandler(`Quotes ${params.quotes} has been updated`);
  }

  async deleteQuotesService(params) {
    let checkQuotes = await ApiRepository.getQuotesCheckById(params);
    if (checkQuotes.length <= 0) return OutParse.errorHandler('Quotes its not exist, pleass try new quotes');
    await ApiRepository.deleteQuotes(params);
    return OutParse.successHandler(`Quotes ${checkQuotes[0].quotes} has been deleted`);
  }
}

module.exports = ApiService;