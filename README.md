# webtools-js

Just some `JavaScript` tools for websites to not bloat the code with
larger frameworks.

### Functionality

- Read and write **Cookies**
- **Observe** variables to call a callback on change
- Make **http requests**
- **Delegate** events
- Use a `documentReady` event handler
- Automatically **open external links in a new tab**

### Benefits

- Vanilla, uncompiled JavaScript in ES 5.1 Syntax
- No dependencies

## Cookies

### wt.Cookies.set(name, value, days)
Set a Cookie. If "days" is not set, a session cookie is written

```js
// write a session cookie
wt.Cookies.set("testcookie", "123")
```

### wt.Cookies.get(name)
Read a Cookie

### wt.Cookies.remove(name)
Remove a Cookie

## Observed

Observe variables

```js
var observedVar = new wt.Observed(
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

## HttpRequest

### wt.HttpRequest.get(url, onSuccess, onError) 

```js
wt.HttpRequest.get("test-request.txt", function (response) {
    // success
    console.log(response)
}, function (errorMessage) {
    // failure
    console.error(errorMessage)
})
```

## Utils

### wt.Utils.openExternalLinksBlank()

Opens all external links in a new tab, except when they have `target="_self"`. 

## Examples
```js
// Cookies

// write a cookie
wt.Cookies.set("testcookie", "123")
// read a cookie
console.log("Cookie", wt.Cookies.get("testcookie"))

// Observed variable

// observe the value of the variable `observedVar`
var observedVar = new wt.Observed(function (newValue, oldValue) {
    console.log("newValue", newValue)
    console.log("oldValue", oldValue)
})
// write the value of the variable `observedVar`
observedVar("New Value")
// read the value of the variable `observedVar`
console.log("observedVar()", observedVar())

// HttpRequest

wt.HttpRequest.get("test-request.txt", function (response) {
    // success
    console.log(response)
}, function (errorMessage) {
    // failure
    console.error(errorMessage)
})

// Utils

// open all external links in a new tab, except when they have `target="_self"`
wt.Utils.openExternalLinksBlank()
```
