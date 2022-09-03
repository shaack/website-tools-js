/**
 * Author: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/webtools-js
 * License: MIT
 */

if (!window.wt) {
    window.wt = {}
}
Object.assign(window.wt, {
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
            request.send()
        }
    }
})
