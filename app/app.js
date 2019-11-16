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
		status: "laading",

		sections: {},



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
		this.sections = sections.getDefaultSections();

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
		this.loadFromStorage();

		// Set the "current" main navigation item based on the current route.
		this.selectMenuItemForCurrentUrl();

		this.$nextTick(function () {
			// Code that will run only after the entire view has been rendered.

			// Once the app is fully rendered, hide the overlay.
			this.hideFullPageOverlay();
		});

		this.status = "loaded";	// Now we can start watching for changes in 'sections' data.
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



		loadFromStorage: function()
		{
			var savedData = helpers.getLocalStorage("sections");

			this.populateSections(savedData);
		},



		populateSections: function(data)
		{
			if (data)
			{
				// Data previously saved.
				for (var key in data) 
				{
					if (data.hasOwnProperty(key)) 
					{
						this.sections[key] = data[key];
					}
				}
			}
		},


		displayLocation: function()
		{
			/*
			<preview-field label="Address" v-bind:value="$root.sections.basics.location.address"></preview-field>
                            <preview-field label="Postal/Zip Code" v-bind:value="$root.sections.basics.location.postalCode"></preview-field>
                            <preview-field label="City" v-bind:value="$root.sections.basics.location.city"></preview-field>
                            <preview-field label="Country Code" v-bind:value="$root.sections.basics.location.countryCode"></preview-field>
                            <preview-field label="Region" v-bind:value="$root.sections.basics.location.region"></preview-field>
			*/

			return this.sections.basics.location.city + ", " + this.sections.basics.location.countryCode;
		},


		skillLevelAsPercent: function(index)
		{
			var level = this.$root.sections.skills[index].level;

			if (level.toLowerCase() == "master" || level.toLowerCase() == "expert")
			{
				return 100;
			}
			else if (level.toLowerCase() == "proficient")
			{
				return 75;
			}
			else if (level.toLowerCase() == "basic" || level.toLowerCase() == "beginner")
			{
				return 25;
			}
			else
			{
				return 50;
			}
		},

		languageFluencyAsPercent: function(index)
		{
			var fluency = this.$root.sections.skills[index].level;

			if (fluency.toLowerCase() == "master" || fluency.toLowerCase() == "expert")
			{
				return 100;
			}
			else if (fluency.toLowerCase() == "proficient")
			{
				return 75;
			}
			else if (fluency.toLowerCase() == "basic" || fluency.toLowerCase() == "beginner")
			{
				return 25;
			}
			else
			{
				return 50;
			}
		},


		workEndDate: function(index)
		{
			var endDate = this.$root.sections.work[index].endDate;

			if (endDate == "") return "Current";

			return endDate;
		},



		/**
		 * Clear save data and reset the sections structure.
		 */
		resetResume: function()
		{
			var response = confirm("Are you sure you want to clear your saved resume?");

			if (response == true)
			{
				this.sections = sections.getDefaultSections();
				alert("Your resume has been cleared.");
			}

			return false;
		},


		saveResume: function()
		{
			var response = confirm("Resume saved");

			helpers.setLocalStorage("sections", this.$root.sections);

			alert("Resume saved");
			return false;
		},


		/**
		 * Open the sidebar on smaller screens.
		 */
		w3_open: function()
		{
			var mySidebar = document.getElementById("mySidebar");
			var overlayBg = document.getElementById("myOverlay");
	
			console.log("mySidebar=", mySidebar);
	
			if (mySidebar.style.display === 'block') 
			{
				mySidebar.style.display = 'none';
				overlayBg.style.display = "none";
			} 
			else 
			{
				mySidebar.style.display = 'block';
				overlayBg.style.display = "block";
			}
		},



		/**
		 * Open the sidebar on smaller screens.
		 */
		w3_close: function()
		{
			var mySidebar = document.getElementById("mySidebar");
			var overlayBg = document.getElementById("myOverlay");
	
			mySidebar.style.display = "none";
			overlayBg.style.display = "none";
		},



		/**
		 * Show the full-page loading overlay.
		 */
		showFullPageOverlay: function() 
		{
			document.getElementById("full-page-overlay").style.display = "block";
		},
	


		/**
		 * Hide the full-page loading overlay.
		 */
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
		}

	},





	watch: {
		/**
		 * Detect when a route changes.
		 * 
		 * @param object to Details of the previous route (navigating away from).
		 * @param object from Details of the new active route (navigating to).
		 */
		$route: function (to, from)
		{
			// Set the "current" main navigation item based on the current route.
            this.selectMenuItemForCurrentUrl();
			
			// Set the current page details based on the component mapped to the active route.
            var component = components.getComponentByPath(to.fullPath);
            this.setActivePageByComponent(component);
		},


		//TODO: Disbled
		// $data: {
		// 	handler: function(val, oldVal) 
		// 	{
				
		// 		// Save the data to localStorage
		// 		//NOTE: I'm initially not concerned about performance here.
		// 		if (val.status == "loaded")
		// 		{
		// 			helpers.setLocalStorage("sections", val.sections);
		// 		}
		// 	},
		// 	deep: true
		// }
    }
});