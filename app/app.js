//------------------------------------------------------------------------------------------
/*
 * 								The root application.
 */
//------------------------------------------------------------------------------------------

/**
 * Define all the routes in the application/
 */
var router = new VueRouter({
	routes: [
		{ path: '/', component: homeComponent },
		
		{ path: '/section/basics', component: sectionBasicsComponent },
		{ path: '/section/work', component: sectionWorkComponent },
		{ path: '/section/volunteer', component: sectionVolunteerComponent },
		{ path: '/section/education', component: sectionEducationComponent },
		{ path: '/section/awards', component: sectionAwardsComponent },
		{ path: '/section/publications', component: sectionPublicationsComponent },
		{ path: '/section/skills', component: sectionSkillsComponent },
		{ path: '/section/languages', component: sectionLanguagesComponent },
		{ path: '/section/interests', component: sectionInterestsComponent },
		{ path: '/section/references', component: sectionReferencesComponent },

		{ path: '/preview', component: previewResumeComponent },
		{ path: '/import', component: importComponent },
		{ path: '/export', component: exportComponent },

		{ path: '/about', component: aboutComponent }
	]
});



var app = new Vue({
	el: '#app',

	router: router,





	watch: {
		/**
		 * Detect when a route changes.
		 * 
		 * @param object to Details of the previous route (navigating away from).
		 * @param object from Details of the new active route (navigating to).
		 */
		$route: function (to, from)
		{
			//console.log("Route change: ", from, " --> ", to);

			// Set the "current" main navigation item based on the current route.
            helpers.selectMenuItemForCurrentUrl();
			
			// Set the current page details based on the component mapped to the active route.
            var component = components.getComponentByPath(to.fullPath);
            this.setActivePageByComponent(component);
		}
    },
    




    components: 
    {

	},





    data: 
    {
		// componentId: "",
		// pageTitle: "",
		// fontAwesomeIcon: "",

		// display: "",
		// sidebarHeight: "",
		// username: "",
		// searchString: "",


		/**
		 * The complete JSON document
		 */
		jsonDocument: "",
		
		/**
		 * Details of the  current page/route.
		 */
		activePage: {
			id: "",
			title: "",
			fontAwesomeIconCss: ""
		}
    },    





    created()
    {
        //-- Register all components
        components.registerComponents();

        //-- Get the component for the initial route path
        var initialRoute = this.$route.path;
        var component = components.getComponentByPath(initialRoute);
        this.setActivePageByComponent(component);
    },



	

    destroyed() 
    {
	},





    mounted() 
    {
		// Set the "current" main navigation item based on the current route.
		helpers.selectMenuItemForCurrentUrl();

		// Once the app is fully displayed, hide the overlay.
		helpers.hideFullPageOverlay();
	},





	methods: {
		/**
		 * Set details of the currently selected "page" (route) from a registered component.
		 * 
		 * @param object component Object containing the details of a registered component.
		 */
		setActivePageByComponent: function(component)
		{
			this.activePage.id = component.id;
			this.activePage.title = component.title;
			this.activePage.fontAwesomeIconCss = component.fontAwesomeIcon;
        },
		
		

		/**
		 * Reset and clear the details of the active page.
		 */
		clearActivePage: function()
		{
			this.activePage.id = "";
			this.activePage.title = "";
			this.activePage.fontAwesomeIconCss = "";
		},



		// /**
		//  * When a component is activated (loaded) it will pass data back to this app (ID, title, icons, etc).
		//  * 
		//  * @param object eventValue 
		//  */
		// componentActivated: function(eventValue)
		// {
		// 	//alert("Hello was clicked" + "\n" + "Who=" + eventValue.whoWasIt + "\n" + "What=" + eventValue.whatWasIt);
		// 	console.log("componentActivated(): eventValue.component=", eventValue.component);
		// }
	}
});