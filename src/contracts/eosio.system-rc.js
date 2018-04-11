const template =`

# Smart Contract - `{{ eosio.system }}`

This is an overview of the actions for the `{{ eosio.system }}` smart contract. This Contract is legally binding and can be used in the event of a dispute. Disputes shall be settled through the standard arbitration process established by EOS.IO.

### Description

The `{{ eosio.system }}` contract...

### Actions, Inputs and Input Types

The table below contains the `actions`, `inputs` and `input types` for the `{{ eosio.system }}` contract.

| Action | Input | Input Type |
|:--|:--|:--|
| `{{ transfer }}` | `{{ from }}`<br/>`{{ to }}`<br/>`{{ quantity }}`<br/>`{{ memo }}` | `{{ account_name }}`<br/>`{{ account_name }}`<br/>`{{ asset }}`<br/>`{{ string }}` |
| `{{ issue }}` | `{{ to }}`<br/>`{{ quantity }}` | `{{ account_name }}`<br/>`{{ asset }}` |
| `{{ delegatebw }}` | `{{ from }}`<br/>`{{ receiver }}`<br/>`{{ stake_net }}`<br/>`{{ stake_cpu }}`<br/>`{{ stake_storage }}` | `{{ account_name }}`<br/>`{{ account_name }}`<br/>`{{ asset }}`<br/>`{{ asset }}`<br/>`{{ asset }}` |
| `{{ undelegatebw }}` | `{{ from }}`<br/>`{{ receiver }}`<br/>`{{ unstake_net }}`<br/>`{{ unstake_cpu }}`<br/>`{{ unstake_bytes }}` | `{{ account_name }}`<br/>`{{ account_name }}`<br/>`{{ asset }}`<br/>`{{ asset }}`<br/>`{{ uint64 }}` |
| `{{ refund }}` | `{{ owner }}` | `{{ account_name }}` |
| `{{ regproducer }}` | `{{ producer }}`<br/>`{{ producer_key }}`<br/>`{{ prefs }}` | `{{ account_name }}`<br/>`{{ bytes }}`<br/>`{{ eosio_parameters }}` |
| `{{ unregprod }}` | `{{ producer }}` | `{{ account_name }}` |
| `{{ regproxy }}` | `{{ proxy }}` | `{{ account_name }}` |
| `{{ unregproxy }}` | `{{ proxy }}` | `{{ account_name }}` |
| `{{ voteproducer }}` | `{{ voter }}`<br/>`{{ proxy }}`<br/>`{{ producers }}` | `{{ account_name }}`<br/>`{{ account_name }}`<br/>`{{ account_name[] }}` |
| `{{ claimrewards }}` | `{{ owner }}` | `{{ account_name }}` |
| `{{ nonce }}` | `{{ value }}` | `{{ string }}` |

`
export default template
