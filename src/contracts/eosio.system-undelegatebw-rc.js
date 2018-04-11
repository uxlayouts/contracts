const template =`

# Action - `{{ undelegatebw }}`

This Contract is legally binding and can be used in the event of a dispute. Disputes shall be settled through the standard arbitration process established by EOS.IO.

### Description

The `{{ undelegatebw }}` action...

### Inputs and Input Types

The `{{ undelegatebw }}` action requires the following `inputs` and `input types`:

| Action | Input | Input Type |
|:--|:--|:--|
| `{{ undelegatebw }}` | `{{ fromVar }}`<br/>`{{ receiverVar }}`<br/>`{{ unstake_netVar }}`<br/>`{{ unstake_cpuVar }}`<br/>`{{ unstake_bytesVar }}` | `{{ account_name }}`<br/>`{{ account_name }}`<br/>`{{ asset }}`<br/>`{{ asset }}`<br/>`{{ uint64 }}` |

`
export default template
