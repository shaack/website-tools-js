/**
 * Author: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/webtools-js
 * License: MIT
 */

if (!window.wt) {
    window.wt = {}
}
Object.assign(window.wt, {
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
    }
})
