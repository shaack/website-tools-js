# webtools-js

Just some small tools to not bloat the code with
larger frameworks.

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

## Further helpers

### wt.openExternalLinksInNewTab()
Opens all external links in a new tab

### wt.setGlobals()
Make `Cookie` and `Observed` global. Otherwise you have to use them with
`wt.Cookie.set(name, value)` and `new wt.Observed(callback)`.
