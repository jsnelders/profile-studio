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
		{ path: '/section/meta', component: sectionMetaComponent },
		{ path: '/section/references', component: sectionReferencesComponent },
		{ path: '/section/projects', component: sectionProjectsComponent },

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
		status: "loading",

		sections: {},
		/**
		 * Details of the  current page/route.
		 */
		activePage: {
			id: "",
			title: "",
			fontAwesomeIconCss: ""
		},

		countryCodes: [],

		currentVersion: "",

		versions: []
	},    

	created()
	{
		this.sections = models.newDefaultSections();
		// this.versons = [];
		this.versions = storage.getLocalStorage("versions");
		this.currentVersion = "";

		// console.log("this.sections=", this.sections);

		//-- Register all components
		pageComponents.registerComponents();

		//-- Get the component for the initial route path
		var initialRoute = this.$route.path;
		var component = pageComponents.getComponentByPath(initialRoute);
		this.setActivePageByComponent(component);
	},


	destroyed() 
	{
	},


	mounted() 
	{
		this.loadCountryCodes();
		this.loadFromStorage();
		this.currentVersion = this.$root.sections.meta.version
		// Quick Fix
		storage.setVersionedLocalStorage(this.currentVersion, "sections", this.$root.sections);
		// console.log([this.$root.sections.meta.version,this.$root.sections]);
		//if (!this.availableVersions.hasKey(this.$root.sections.meta.version))
		//	this.availableVersions.push(this.$root.sections.meta.version);
		// console.log([this.versions[0],storage.getVersionedLocalStorage(this.versions[0])]);

		// this.availableVersions = this.$root.availableVersions;

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
		
		onVersionChange: function() {
			storage.setVersionedLocalStorage(this.$root.sections.meta.version,"sections",this.$root.sections);
			this.$root.sections = storage.getVersionedLocalStorage(this.currentVersion,"sections");
			storage.setLocalStorage(this.$root.sections);// Perhaps optimisation to come
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
		/*
		 *
		 */
		loadFromStorage: function()
		{
			var savedData = storage.getLocalStorage("sections");
			this.populateSections(savedData);
		},

		loadVersionFromStorage: function(version)
		{
			var savedData = storage.getLocalStorageVersion(version,"sections");
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

		loadCountryCodes: function()
		{
			// console.log("loadCountryCodes(): data", countryCodes);

			this.countryCodes.push({
				"code": "",
				"name": "--Select a country--"
			});
			
			for (var property in countryCodes)
			{
				this.countryCodes.push({
					"code": property,
					"name": countryCodes[property]
				});
			}
		},

		getCountryName: function(countryCode)
		{
			for (var i = 0; i < this.countryCodes.length; i++)
			{
				var country = this.countryCodes[i];

				if (country.code == countryCode)
				{
					return country.name;
				}
			}

			return "";
		},

		displayLocation: function()
		{
			return this.sections.basics.location.city + ", " + this.getCountryName(this.sections.basics.location.countryCode);
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
			if (!this.$root.sections.skills[index]) {
				return 100;
			}
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
		projectEndDate: function(index)
		{
			var endDate = this.$root.sections.projects[index].endDate;

			if (endDate == "") return "Current";

			return endDate;
		},
		dateMonthYear: function(dateString)
		{
			var dt = new Date(dateString);

			return dt.getFullYear() + ", " + this.getMonthName(dt.getMonth() + 1);
		},
		getMonthName: function(monthNumber)
		{
			if (monthNumber == 1) return "January";
			if (monthNumber == 2) return "February";
			if (monthNumber == 3) return "March";
			if (monthNumber == 4) return "April";
			if (monthNumber == 5) return "May";
			if (monthNumber == 6) return "June";
			if (monthNumber == 7) return "July";
			if (monthNumber == 8) return "August";
			if (monthNumber == 9) return "September";
			if (monthNumber == 10) return "October";
			if (monthNumber == 11) return "November";
			if (monthNumber == 12) return "December";

			return "";
		},
		/**
		 * Clear save data and reset the sections structure.
		 */
		resetResume: function()
		{
			var response = confirm("Are you sure you want to clear your saved resume?");

			if (response == true)
			{
				this.sections = models.newDefaultSections();
				alert("Your resume has been cleared.");
			}

			return false;
		},

		saveResume: function()
		{
			var response = confirm("Resume saved");

			storage.setLocalStorage("sections", this.$root.sections);
			storage.setVersionedLocalStorage(this.$root.currentVersion,"sections", this.$root.sections);

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
		},
		/**
		 * Collapse or un-collapse a content element by setting its collapse state to opposite of current state.
		 * @param {string} id ID of the content element to collapse/un-collapse.
		 */
		invertCollapse: function(id) 
		{
			var x = document.getElementById(id);
			if (x.className.indexOf("w3-show") == -1) 
			{
			  x.className += " w3-show";
			} 
			else 
			{
			  x.className = x.className.replace(" w3-show", "");
			}
		},
		/**
		 * Move the position of an element in an array.
		 * 
		 * @param array arr The array to move an element in.
		 * @param int old_index Current position of the element.
		 * @param int new_index New position of the element.
		 * 
		 * @return array Updated array.
		 */
		moveArrayPosition: function(arr, old_index, new_index)
		{

			if (new_index == old_index)
			{
				// No change
				return ;
			}

			if (new_index > old_index)
			{
				// Moving forward in array
				if (old_index == arr - 1) return;	// Cannot move beyond the end of the array
			}
			if (new_index < old_index)
			{
				// Moving back in array
				if (old_index == 0) return;	// Cannot move beyond the start of the array
			}


			if (new_index >= arr.length) 
			{
				var k = new_index - arr.length + 1;
				while (k--)
				{
					arr.push(undefined);
				}
			}

			

			arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);

			return arr; // for testing
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
            var component = pageComponents.getComponentByPath(to.fullPath);
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
		// 			storage.setLocalStorage("sections", val.sections);
		// 		}
		// 	},
		// 	deep: true
		// }
    }
});