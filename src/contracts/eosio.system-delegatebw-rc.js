const template =`

# Action - `{{ delegatebw }}`

This Contract is legally binding and can be used in the event of a dispute. Disputes shall be settled through the standard arbitration process established by EOS.IO.

### Description

The `{{ delegatebw }}` action...

### Inputs and Input Types

The `{{ delegatebw }}` action requires the following `inputs` and `input types`:

| Action | Input | Input Type |
|:--|:--|:--|
| `{{ delegatebw }}` | `{{ fromVar }}`<br/>`{{ receiverVar }}`<br/>`{{ stake_netVar }}`<br/>`{{ stake_cpuVar }}`<br/>`{{ stake_storageVar }}` | `{{ account_name }}`<br/>`{{ account_name }}`<br/>`{{ asset }}`<br/>`{{ asset }}`<br/>`{{ asset }}` |

`
export default template
