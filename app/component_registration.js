/**
 * Register and manage all components. 
 * This is not a part of VueJS. It is a helper so we can easily access information about each component.
 */
var components = {


    /**
     * [Private]
     * Store all registered components
     */
    components: [],





    /**
     * Lookup components array and return the componente for the specified ID.
     * If ID is not found then return null.
     * 
     * @param string id: ID of the component to return.
     * 
     * @return object: The requested ID, or null if not found.
     */
    getComponent: function(id) 
    {
        for (i = 0; i < this.components.length; i++) 
        {
            var component = this.components[i];

            if (component.id.toLowerCase() == id.toLowerCase())
            {
                return component;
            }
        }

        return null;
    },





    getComponentByPath: function(path) 
    {
        for (i = 0; i < this.components.length; i++) 
        {
            var component = this.components[i];

            if (component.path.toLowerCase() == ("#" + path.trim()).toLowerCase())
            {
                return component;
            }
        }

        return null;
    },


    


    registerComponent: function(component)
    {
        this.components.push(component);
    },





    registerComponents: function()
    {
        this.registerComponent({
            id: "home",
            path: "#/",
            type: "page",
            title: "Welcome",
            description: "",
            fontAwesomeIcon: "fas fa-home"  
        });

        this.registerComponent({
            id: "basics",
            path: "#/section/basics",
            type: "page",
            title: "Basics",
            description: "",
            fontAwesomeIcon: "far fa-address-card"  
        });

        this.registerComponent({
            id: "work",
            path: "#/section/work",
            type: "page",
            title: "Work",
            description: "",
            fontAwesomeIcon: "fas fa-building"  
        });

        this.registerComponent({
            id: "volunteer",
            path: "#/section/volunteer",
            type: "page",
            title: "Volunteer",
            description: "",
            fontAwesomeIcon: "fas fa-hands-helping"
        });

        this.registerComponent({
            id: "education",
            path: "#/section/education",
            type: "page",
            title: "Education",
            description: "",
            fontAwesomeIcon: "fas fa-graduation-cap"
        });

        this.registerComponent({
            id: "awards",
            path: "#/section/awards",
            type: "page",
            title: "Awards",
            description: "",
            fontAwesomeIcon: "fas fa-award"
        });

        this.registerComponent({
            id: "publications",
            path: "#/section/publications",
            type: "page",
            title: "Publications",
            description: "",
            fontAwesomeIcon: "fas fa-book"  
        });

        this.registerComponent({
            id: "skills",
            path: "#/section/skills",
            type: "page",
            title: "Skills",
            description: "",
            fontAwesomeIcon: "fas fa-tools"  
        });

        this.registerComponent({
            id: "languages",
            path: "#/section/languages",
            type: "page",
            title: "Languages",
            description: "",
            fontAwesomeIcon: "fas fa-heart"  
        });

        this.registerComponent({
            id: "interests",
            path: "#/section/interests",
            type: "page",
            title: "Interests",
            description: "",
            fontAwesomeIcon: "fas fa-map"  
        });

        this.registerComponent({
            id: "references",
            path: "#/section/references",
            type: "page",
            title: "References",
            description: "",
            fontAwesomeIcon: "fas fa-list"  
        });
        
        this.registerComponent({
            id: "previewResume",
            path: "#/preview",
            type: "page",
            title: "Preview Your Resume",
            description: "Preview your final resume.",
            fontAwesomeIcon: "fas fa-print"  
        });

        this.registerComponent({
            id: "import",
            path: "#/import",
            type: "page",
            title: "Import",
            description: "Import an existing JSON resume to continue editing.",
            fontAwesomeIcon: "fas fa-file-upload"  
        });

        this.registerComponent({
            id: "export",
            path: "#/export",
            type: "page",
            title: "Export",
            description: "Export your resume to JSON.",
            fontAwesomeIcon: "fas fa-file-download"  
        });

        this.registerComponent({
            id: "about",
            path: "#/about",
            type: "page",
            title: "About",
            description: "About this application.",
            fontAwesomeIcon: "fas fa-info-circle"  
        });
        

    }
};
