// noinspection JSUnusedGlobalSymbols
var wt = {
    Cookie: {
        /**
         * Set a Cookie. If "days" is not set, a session cookie is written
         */
        set: function (name, value, days) {
            var expires = ""
            if (days) {
                var date = new Date()
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
                expires = "; expires=" + date.toUTCString()
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/"
        },
        /**
         * Read a Cookie
         */
        get: function (name) {
            var nameEQ = name + "="
            var ca = document.cookie.split(';')
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i]
                while (c.charAt(0) === ' ') c = c.substring(1, c.length)
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
            }
            return undefined
        },
        /**
         * Remove a Cookie
         */
        remove: function (name) {
            document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
        }
    },
    /**
     * Observe variables
     * `var observedVar = new Observed(function(newValue, oldValue) { runWhenValueChanged() })`
     * Set values with
     * `observedVar(value)`
     * Get values with
     * `var value = observedVar()`
     */
    Observed: function (onChange) {
        return function (newValue) {
            if (arguments.length > 0) {
                if (this.value !== newValue) {
                    var oldValue = this.value
                    this.value = newValue
                    onChange(newValue, oldValue)
                }
            } else {
                return this.value
            }
        }.bind(this)
    },
    HttpRequest: {
        get: function (url, onSuccess, onError) {
            var request = new XMLHttpRequest()
            request.open('GET', url, true)

            request.onload = function () {
                if (this.status === 200) {
                    onSuccess(this.response)
                } else {
                    onError("Error, server returned " + this.status)
                }
            }
            request.onerror = function () {
                onError("Connection error")
            }
            request.send();
        }
    },
    Events: {
        delegate: function (eventName, elementSelector, handler) {
            document.addEventListener(eventName, function (e) {
                for (var target = e.target; target && target !== this; target = target.parentNode) {
                    if (target.matches(elementSelector)) {
                        handler.call(target, e);
                        break;
                    }
                }
            }, false);
        },
        documentReady: function (handler) {
            if (document.readyState !== 'loading') {
                handler();
            } else {
                document.addEventListener('DOMContentLoaded', handler);
            }
        }
    },
    Utils: {
        /**
         * Opens all external links in a new tab
         */
        openExternalLinksInNewTab: function () {
            var links = document.links
            for (var i = 0, linksLength = links.length; i < linksLength; i++) {
                if (links[i].hostname !== window.location.hostname) {
                    links[i].target = '_blank'
                }
            }
        }
    }
}
/**
 * Make the objects global
 */
wt.setGlobals = function () {
    if (window.Cookie || window.Observed || window.HttpRequest || window.Events || window.Utils) {
        console.error("webtools, existing global")
    } else {
        window.Cookie = wt.Cookie
        window.Observed = wt.Observed
        window.HttpRequest = wt.HttpRequest
        window.Events = wt.Events
        window.Utils = wt.Utils
    }
}
