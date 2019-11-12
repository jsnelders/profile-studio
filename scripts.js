/**
 * Create a Helpers object to keep functions out of the global namespace space.
 */
var helpers = {
    /********************************************************************************
     * 					Open and close the sidebar on smaller screens
     ********************************************************************************/

    /**
     * Get the Sidebar element.
     */
    mySidebar: document.getElementById("mySidebar"),

    /**
     * Get the DIV with overlay effect.
     */
    overlayBg: document.getElementById("myOverlay"),


    /**
     * Toggle between showing and hiding the sidebar, and add overlay effect.
     */
    w3_open: function() 
    {
        if (this.mySidebar.style.display === 'block') 
        {
            this.mySidebar.style.display = 'none';
            this.overlayBg.style.display = "none";
        } 
        else 
        {
            this.mySidebar.style.display = 'block';
            this.overlayBg.style.display = "block";
        }
    },


    /**
     * Close the sidebar with the close button.
     */
    w3_close: function() 
    {
        this.mySidebar.style.display = "none";
        this.overlayBg.style.display = "none";
    },





    /********************************************************************************
     * 					Show and hide the full-page loading overlay.
     ********************************************************************************/
    showFullPageOverlay: function() 
    {
        document.getElementById("full-page-overlay").style.display = "block";
    },

    hideFullPageOverlay: function() 
    {
        document.getElementById("full-page-overlay").style.display = "none";
    },



    /**
     * Find and mark the main navigation item for the selected "current" page/route
     */
    selectMenuItemForCurrentUrl: function()
    {
        // Get domain root URL of the current page.
        var domainUrl = window.location.origin;

        // Get components of the URL for the current page.
        var pageBasePathName = window.location.pathname;
        var pageHash = window.location.hash;
        var pagePathName = window.location.pathname;
        var pageBaseUrl = domainUrl + pageBasePathName + pageHash;

        // Get all main navigation links
        var elements = document.querySelectorAll(".w3-bar-item");

        for (let i = 0; i < elements.length; i++) 
        {
            var element = elements[i];
            //console.log("element[" + i + "]=", element);

            // Get HREF from the element
            var linkHref = element.getAttribute("href");

            // Build a full URL the element's href (hash) so we can compare to the current URL.
            var linkFullHref = domainUrl + pagePathName + linkHref;

            // Remove the "current page" indicator from the element.
            element.classList.remove("w3-blue");

            // Ensure trailing slashes are added for comparison equivalence
            var urlLast = linkFullHref[linkFullHref.length - 1];
            if (urlLast != "/")
            {
                linkFullHref = linkFullHref + "/";
            }
            urlLast = pageBaseUrl[pageBaseUrl.length - 1];
            if (urlLast != "/")
            {
                pageBaseUrl = pageBaseUrl + "/";
            }

            // Check if element is for the current page.
            if (linkFullHref == pageBaseUrl)
            {
                // Add the "current page" indicator to the element.
                element.classList.add("w3-blue");
            }
        }
    },





    setLocalStorage: function(key, value)
    {
        var jsonValue = JSON.stringify(value);
        localStorage.setItem(key, jsonValue);
    },



    getLocalStorage: function(key)
    {
        jsonValue = localStorage.getItem(key);
        

        var value = null;
        
        if (jsonValue)
        {
            value = JSON.parse(jsonValue);
        }
        
        return value;
    },



    clearLocalStorage: function(key)
    {
        localStorage.removeItem(key);
    }
}