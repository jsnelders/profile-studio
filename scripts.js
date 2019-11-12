/**
 * Create a Helpers object to keep functions out of the global namespace space.
 */
var helpers = {

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