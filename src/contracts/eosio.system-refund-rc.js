const template =`

# Action - `{{ refund }}`

This Contract is legally binding and can be used in the event of a dispute. Disputes shall be settled through the standard arbitration process established by EOS.IO.

### Description

The `{{ refund }}` action...

### Input and Input Type

The `{{ refund }}` action requires the following `input` and `input type`:

| Action | Input | Input Type |
|:--|:--|:--|
| `{{ refund }}` | `{{ ownerVar }}` | `{{ account_name }}` |

`
export default template
