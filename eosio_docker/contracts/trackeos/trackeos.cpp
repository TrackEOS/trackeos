#include <eosiolib/eosio.hpp>

using namespace eosio;

class trackeos : public contract
{
public:
  trackeos(account_name self) : contract(self),
                                _handlers(self, self),
                                _products(self, self),
                                _procedures(self, self){}

  [[eosio::action]]
  void addhandler(account_name username, const std::string &first_name, const std::string &last_name)
  {
    require_auth(username);

    eosio_assert(_handlers.find(username) == _handlers.end(), "This record already exists in the addressbook");

    _handlers.emplace(username, [&](auto &rcrd) {
      rcrd.username = username;
      rcrd.first_name = first_name;
      rcrd.last_name = last_name;
    });
  }

  [[eosio::action]]
  void updateh(account_name username, const std::string &first_name) {
    require_auth(username);

    auto itr = _handlers.find(username);
    eosio_assert(itr != _handlers.end(), "Does not Exist");
    _handlers.modify(itr, username, [&](auto &rcrd) {
      rcrd.first_name = first_name;
    });
  }

  [[eosio::action]]
  void addprod(account_name initiator, std::string product, std::string producer, uint64_t id)
  {
    require_auth(initiator);
    _products.emplace(initiator, [&](auto &rcrd) {
      rcrd.key = id;
      rcrd.name = product;
      rcrd.producer = producer;
    });
  }

  [[eosio::action]]
  void process(account_name processor, uint64_t productKey, uint64_t id, std::string procedure_name) {
    require_auth(processor);
    _procedures.emplace(processor, [&](auto &rcrd) {
      rcrd.processId = id;
      rcrd.productKey = productKey;
      rcrd.processor = processor;
      rcrd.procedure_name = procedure_name;
    });
  };

private:
  struct [[eosio::table]] handler
  {
    account_name username;
    std::string first_name;
    std::string last_name;

    uint64_t primary_key() const { return username; }
  };
  typedef eosio::multi_index<N(handlers), handler> handlers_table;

  struct [[eosio::table]] product
  {
    uint64_t key;
    std::string name;
    std::string producer;

    uint64_t primary_key() const { return key; }
  };

  typedef eosio::multi_index<N(products), product> products_table;

  struct [[eosio::table]] procedure
  {
    uint64_t processId;
    uint64_t productKey;
    std::string processor;
    std::string procedure_name;

    uint64_t primary_key() const { return processId; }
  };

  typedef eosio::multi_index<N(procedures), procedure> procedure_table;

  handlers_table _handlers;

  products_table _products;

  procedure_table _procedures;
};

EOSIO_ABI(trackeos, (addhandler)(updateh)(addprod)(process))
