const template =`

# Action - `{{ transfer }}`

This Contract is legally binding and can be used in the event of a dispute. Disputes shall be settled through the standard arbitration process established by EOS.IO.

### Description

The `{{ transfer }}` action...

### Inputs and Input Types

The `{{ transfer }}` action requires the following `inputs` and `input types`:

| Action | Input | Input Type |
|:--|:--|:--|
| `{{ transfer }}` | `{{ fromVar }}`<br/>`{{ toVar }}`<br/>`{{ quantityVar }}`<br/>`{{ memoVar }}` | `{{ account_name }}`<br/>`{{ account_name }}`<br/>`{{ asset }}`<br/>`{{ string }}` |

`
export default template
