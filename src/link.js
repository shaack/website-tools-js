/**
 * Author: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/webtools-js
 * License: MIT
 */

if (!window.wt) {
    window.wt = {}
}
Object.assign(window.wt, {
    Link: {
        /**
         * Opens all external links in a new tab
         */
        openExternalLinksBlank: function () {
            var links = document.links
            for (var i = 0, linksLength = links.length; i < linksLength; i++) {
                var target = links[i].target
                if (links[i].hostname !== window.location.hostname && target !== "_self") {
                    links[i].target = '_blank'
                }
            }
        },
        activateLinkables: function () {
            var linkables = document.getElementsByClassName("linkable")
            for (var i = 0; i < linkables.length; i++) {
                var linkable = linkables[i]
                linkable.style.cursor = "pointer"
                linkable.addEventListener("click", function () {
                    location.href = this.getAttribute("data-href")
                })
            }
        }
    }
})
