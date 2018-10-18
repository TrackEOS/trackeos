#include <eosiolib/eosio.hpp>

using namespace eosio;
using namespace std;

class trackeos : public contract
{
  public:
    trackeos(account_name self) : contract(self),
                                  _procedures(self, self)
    {
    }

    [[eosio::action]]
    void process(account_name processor, account_name initialHandler, uint64_t productKey, std::string productName, std::string timestamp, std::string processDescription, uint64_t id){
        require_auth(processor);
        _procedures.emplace(processor, [&](auto& rcrd)
                                      {
                                        rcrd.processId = id;
                                        rcrd.productKey = productKey;
                                        rcrd.productName = productName;
                                        rcrd.timestamp = timestamp;
                                        rcrd.processDescription = processDescription;
                                        rcrd.processor = processor;
                                        rcrd.initialHandler = initialHandler;
                                        // rcrd.transactionId = transactionId;
                                        // if(initialHandler.size() > 0){
                                        // rcrd.initialHandler = initialHandler;
                                        // }
                                        // else if(initialHandler.size() == 0){
                                        //     rcrd.initialHandler = "None";
                                        // }
                                      });
      };
   
private:
   // Procedure Table.
   // Actor X processes Item Y
     struct [[eosio::table]] procedure{
        uint64_t processId;
        uint64_t productKey;
        string productName;
        string timestamp;
        string processDescription;
        account_name processor;
        account_name initialHandler;
        // string transactionId;

        uint64_t primary_key() const { return processId; }
    };

    typedef eosio::multi_index<N(procedures), procedure> procedure_table;

    procedure_table _procedures;

};

EOSIO_ABI(trackeos, (process))
