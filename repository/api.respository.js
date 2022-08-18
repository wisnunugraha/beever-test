const {_} = require('../config/DB')


class ApiRepository {

    getUsersCheck(params) {
      console.log(params)
      return _.select()
              .from('users')
              .where('email',params.email);
    }

    createUsers(params) {
      console.log(params)
      return _('users')
      .insert({
        "id": params.id,
        "email": params.email,
        "password": params.password,
      });
    }

    getQuotesCheck(params) {
      console.log(params)
      return _.select()
              .from('quotes')
              .where('quotes', params.quotes)
              .limit(1);
    }


    getQuotesCheckById(params) {
      console.log(params)
      return _.select()
              .from('quotes')
              .where('id', params.id)
              .limit(1);
    }

    getQuotes(params) {
      console.log(params)
      return _.select()
              .from('quotes')
              .where((query) => {
                if(params) {
                  if (params.status === true) {
                    query.where("type", true)
                  }
                  if (params.status === false) {
                    query.where("type", false)
                  }
                }
              });
    }

    createQuotes(params) {
      console.log(params)
      return _('quotes')
             .insert({
               "id": params.id,
               "quotes": params.quotes,
               "type": params.type,
             });
    }


    updateQuotes(params) {
      console.log(params)
      return _('quotes')
             .where('id',params.id)
             .update({
               "quotes": params.quotes,
               "type": params.type,
             });
    }


    deleteQuotes(params) {
      console.log(params)
      return _('quotes')
             .where('id',params.id)
             .del();
    }
}

module.exports = ApiRepository;