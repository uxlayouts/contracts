const template =`

# Action - `{{ regproxy }}`

This Contract is legally binding and can be used in the event of a dispute. Disputes shall be settled through the standard arbitration process established by EOS.IO.

### Description

The `{{ regproxy }}` action...

### Input and Input Type

The `{{ regproxy }}` action requires the following `input` and `input type`:

| Action | Input | Input Type |
|:--|:--|:--|
| `{{ regproxy }}` | `{{ proxyVar }}` | `{{ account_name }}` |

`
export default template
