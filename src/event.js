/**
 * Author: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/webtools-js
 * License: MIT
 */

if (!window.wt) {
    window.wt = {}
}
Object.assign(window.wt, {
    Event: {
        delegate: function (eventName, elementSelector, handler) {
            document.addEventListener(eventName, function (e) {
                for (var target = e.target; target && target !== this; target = target.parentNode) {
                    if (target.matches(elementSelector)) {
                        handler.call(target, e)
                        break
                    }
                }
            }, false)
        },
        documentReady: function (handler) {
            if (document.readyState !== 'loading') {
                handler()
            } else {
                document.addEventListener('DOMContentLoaded', handler)
            }
        }
    }
})
