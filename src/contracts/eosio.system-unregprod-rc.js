const template =`

# Action - `{{ unregprod }}`

This Contract is legally binding and can be used in the event of a dispute. Disputes shall be settled through the standard arbitration process established by EOS.IO.

### Description

The `{{ unregprod }}` action...

### Input and Input Type

The `{{ unregprod }}` action requires the following `input` and `input type`:

| Action | Input | Input Type |
|:--|:--|:--|
| `{{ unregprod }}` | `{{ producerVar }}` | `{{ account_name }}` |

`
export default template
