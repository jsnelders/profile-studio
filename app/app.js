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
    




    components: 
    {

	},





    data: 
    {
		sections: {
			basics: {
				name: "",
				label: "",
				picture: "",
				email: "",
				phone: "",
				website: "",
				summary: "",
				location: {
					address: "",
					postalCode: "",
					city: "",
					countryCode: "",
					region: "",
				},
				profiles: [
					{
						network: "",
						username: "",
						url: "",
					}
				]
			},
			work: {
				company: "",
				position: "",
				website: "",
				startDate: "",
				endDate: "",
				summary: "",
				highlights: []
			},
			volunteer: {
				organization: "",
				position: "",
				website: "",
				startDate: "",
				endDate: "",
				summary: "",
				highlights: []
			},
			education: {
				institution: "",
				area: "",
				studyType: "",
				startDate: "",
				endDate: "",
				gpa: "",
				courses: []
			},
			awards: [{
				title: "",
				date: "",
				awarder: "",
				summary: ""
			}],
			publications: [{
				name: "",
				publisher: "",
				releaseDate: "",
				website: "",
				summary: ""
			}],
			skills: [{
				name: "",
				level: "",
				keywords: []
			}],
			languages: [{
				language: "",
				fluency: ""
			}],
			interests: [{
				name: "",
				keywords: [
				]
			}],
			references: [{
				name: "",
				reference: ""
			}]
		},


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
		// var savedData = helpers.getLocalStorage("sections.basics");

		// console.log("savedData=", savedData);

		// if (savedData)
		// {
		// 	// Data previously saved.
		// 	//this.sections = savedData;

		// 	for (var key in savedData) 
		// 	{
		// 		if (savedData.hasOwnProperty(key)) 
		// 		{
		// 			console.log(key + " > " + savedData[key]);
		// 			this.sections.basics[key] = savedData[key];
		// 		}
		// 	}
		// }


		//var savedData = helpers.getLocalStorage("sections").sections;
		var savedData = helpers.getLocalStorage("sections");

		console.log("get saved data[sections]=", savedData);

		if (savedData)
		{
			// Data previously saved.
			//this.sections = savedData;

			for (var key in savedData) 
			{
				if (savedData.hasOwnProperty(key)) 
				{
					console.log(key + " > ", savedData[key]);
					this.sections[key] = savedData[key];
				}
			}
		}


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
	},





	// watch: {
	// 	/**
	// 	 * Watch all data for changes
	// 	 */
	// 	'sections.basics':  function(val) 
	// 	{
	// 		// Save the data to localStorage
	// 		//NOTE: I'm initially not concerned about performance here/
	// 		console.log("watch section", val);
	// 	}
	// }






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
		},


		$data: {
			handler: function(val, oldVal) 
			{
				console.log("val=", val.sections);
				// Save the data to localStorage
				//NOTE: I'm initially not concerned about performance here.
				helpers.setLocalStorage("sections", val.sections);
			},
			deep: true
		}
    },
});