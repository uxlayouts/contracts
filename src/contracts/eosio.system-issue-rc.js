const template =`

# Action - `{{ issue }}`

This Contract is legally binding and can be used in the event of a dispute. Disputes shall be settled through the standard arbitration process established by EOS.IO.

### Description

The `{{ issue }}` action...

### Inputs and Input Types

The `{{ issue }}` action requires the following `inputs` and `input types`:

| Action | Input | Input Type |
|:--|:--|:--|
| `{{ issue }}` | `{{ toVar }}`<br/>`{{ quantityVar }}` | `{{ account_name }}`<br/>`{{ asset }}` |

`
export default template
