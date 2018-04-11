const template =`

# Action - `{{ nonce }}`

This Contract is legally binding and can be used in the event of a dispute. Disputes shall be settled through the standard arbitration process established by EOS.IO.

### Description

The `{{ nonce }}` action...

### Input and Input Type

The `{{ nonce }}` action requires the following `input` and `input type`:

| Action | Input | Input Type |
|:--|:--|:--|
| `{{ nonce }}` | `{{ valueVar }}` | `{{ string }}` |

`
export default template
