const template =`

# Action - `{{ voteproducer }}`

This Contract is legally binding and can be used in the event of a dispute. Disputes shall be settled through the standard arbitration process established by EOS.IO.

### Description

The `{{ voteproducer }}` action...

### Inputs and Input Types

The `{{ voteproducer }}` action requires the following `inputs` and `input types`:

| Action | Input | Input Type |
|:--|:--|:--|
| `{{ voteproducer }}` | `{{ voterVar }}`<br/>`{{ proxyVar }}`<br/>`{{ producersVar }}` | `{{ account_name }}`<br/>`{{ account_name }}`<br/>`{{ account_name[] }}` |

`
export default template
