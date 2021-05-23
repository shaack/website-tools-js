# webtools-js

Just some `JavaScript` tools for websites to not bloat the code with
larger frameworks.

### Functionality

- Read and write Cookies
- Observe variables to call a callback on change
- Make http requests
- Delegate events
- Use a `documentReady` event handler
- Automatically open external links in a new tab

### Benefits

- Vanilla, uncompiled JavaScript in ES 5.1 Syntax
- No dependencies

## Cookie

### Cookie.set: function (name, value, days)
Set a Cookie. If "days" is not set, a session cookie is written

### Cookie.get: function (name)
Read a Cookie

### Cookie.remove: function (name)
Remove a Cookie

## Observed

Observe variables

```js
var observedVar = new Observed(
    function(newValue, oldValue) { 
        // callback on change 
    })
```

Set values with
```js
observedVar(value)
```

Get values with
```js
var value = observedVar()
```

## Utils

### Utils.openExternalLinksInNewTab()
Opens all external links in a new tab

## Examples
```js
// write a cookie
Cookie.set("testcookie", "123")
// read a cookie
console.log("Cookie", Cookie.get("testcookie"))
// observe the value of the variable `observedVar`
var observedVar = new Observed(function (newValue, oldValue) {
    console.log("newValue", newValue)
    console.log("oldValue", oldValue)
})
// write the value of the variable `observedVar`
observedVar("New Value")
// read the value of the variable `observedVar`
console.log("observedVar()", observedVar())
// open all links in a new tab
Utils.openExternalLinksInNewTab()
```