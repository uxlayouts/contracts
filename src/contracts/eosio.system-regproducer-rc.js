const template =`

# Action - `{{ regproducer }}`

This Contract is legally binding and can be used in the event of a dispute. Disputes shall be settled through the standard arbitration process established by EOS.IO.

### Description

The `{{ regproducer }}` action...

### Inputs and Input Types

The `{{ regproducer }}` action requires the following `inputs` and `input types`:

| Action | Input | Input Type |
|:--|:--|:--|
| `{{ regproducer }}` | `{{ producerVar }}`<br/>`{{ producer_keyVar }}`<br/>`{{ prefsVar }}` | `{{ account_name }}`<br/>`{{ bytes }}`<br/>`{{ eosio_parameters }}` |

`
export default template
