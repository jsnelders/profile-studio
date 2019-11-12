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
		this.sections = this.getDefaultSections();

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
		//this.loadFromStorage();

		// Set the "current" main navigation item based on the current route.
		helpers.selectMenuItemForCurrentUrl();

		// Once the app is fully displayed, hide the overlay.
		helpers.hideFullPageOverlay();

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



		/**
		 * Clear save data and reset the sections structure.
		 */
		resetResume: function()
		{
			var response = confirm("Are you sure you want to clear your saved resume?");

			if (response == true)
			{
				this.sections = this.getDefaultSections();
				alert("Your resume has been cleared.");
			}

			return false;
		},


		
		getDefaultSections: function()
		{
			// return {
			// 	basics: {
			// 		name: "",
			// 		label: "",
			// 		picture: "",
			// 		email: "",
			// 		phone: "",
			// 		website: "",
			// 		summary: "",
			// 		location: {
			// 			address: "",
			// 			postalCode: "",
			// 			city: "",
			// 			countryCode: "",
			// 			region: "",
			// 		},
			// 		profiles: [
			// 			{
			// 				network: "",
			// 				username: "",
			// 				url: "",
			// 			}
			// 		]
			// 	},
			// 	work: [{
			// 		company: "",
			// 		position: "",
			// 		website: "",
			// 		startDate: "",
			// 		endDate: "",
			// 		summary: "",
			// 		highlights: [""]
			// 	}],
			// 	volunteer: [{
			// 		organization: "",
			// 		position: "",
			// 		website: "",
			// 		startDate: "",
			// 		endDate: "",
			// 		summary: "",
			// 		highlights: []
			// 	}],
			// 	education: [{
			// 		institution: "",
			// 		area: "",
			// 		studyType: "",
			// 		startDate: "",
			// 		endDate: "",
			// 		gpa: "",
			// 		courses: []
			// 	}],
			// 	awards: [{
			// 		title: "",
			// 		date: "",
			// 		awarder: "",
			// 		summary: ""
			// 	}],
			// 	publications: [{
			// 		name: "",
			// 		publisher: "",
			// 		releaseDate: "",
			// 		website: "",
			// 		summary: ""
			// 	}],
			// 	skills: [{
			// 		name: "",
			// 		level: "",
			// 		keywords: []
			// 	}],
			// 	languages: [{
			// 		language: "",
			// 		fluency: ""
			// 	}],
			// 	interests: [{
			// 		name: "",
			// 		keywords: [
			// 		]
			// 	}],
			// 	references: [{
			// 		name: "",
			// 		reference: ""
			// 	}]
			// };

			var structure = {
				basics: {},
				work: [],
				volunteer: [],
				education: [],
				awards: [],
				publications: [],
				skills: [],
				languages: [],
				interests: [],
				references: []
			};

			structure.basics = this.getDefaultBasic();
			structure.work.push(this.getDefaultWork());
			structure.volunteer.push(this.getDefaultVolunteer());
			structure.education.push(this.getDefaultEducation());
			structure.awards.push(this.getDefaultAward());
			structure.publications.push(this.getDefaultPublication());
			structure.skills.push(this.getDefaultSkill());
			structure.languages.push(this.getDefaultLanguage());
			structure.interests.push(this.getDefaultInterest());
			structure.references.push(this.getDefaultReference());


			return structure;
		},


		getDefaultBasic: function()
		{
			return {
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
			};
		},

		getDefaultBasicProfile: function()
		{
			return {
				network: "",
				username: "",
				url: "",
			};
		},

		getDefaultWork: function()
		{
			return {
				company: "",
				position: "",
				website: "",
				startDate: "",
				endDate: "",
				summary: "",
				highlights: [""]
			};
		},

		getDefaultWorkHighlight: function()
		{
			return "";
		},
		
		getDefaultVolunteer: function()
		{
			return {
				organization: "",
				position: "",
				website: "",
				startDate: "",
				endDate: "",
				summary: "",
				highlights: [""]
			};
		},

		getDefaulVolunteerHighlight: function()
		{
			return "";
		},

		getDefaultEducation: function()
		{
			return {
				institution: "",
				area: "",
				studyType: "",
				startDate: "",
				endDate: "",
				gpa: "",
				courses: [""]
			};
		},
				
		getDefaultEducationCourse: function()
		{
			return "";
		},
		
		getDefaultAward: function()
		{
			return {
				title: "",
				date: "",
				awarder: "",
				summary: ""
			};
		},

		getDefaultPublication: function()
		{
			return {
				name: "",
				publisher: "",
				releaseDate: "",
				website: "",
				summary: ""
			};
		},

		getDefaultSkill: function()
		{
			return {
				name: "",
				level: "",
				keywords: [""]
			};
		},
				
		getDefaultSkillKeywoard: function()
		{
			return "";
		},

		getDefaultLanguage: function()
		{
			return {
				language: "",
				fluency: ""
			};
		},

		getDefaultInterest: function()
		{
			return {
				name: "",
				keywords: [""]
			};
		},

		getDefaultInterestKeywoard: function()
		{
			return "";
		},

		getDefaultReference: function()
		{
			return {
				name: "",
				reference: ""
			};
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
				// Save the data to localStorage
				//NOTE: I'm initially not concerned about performance here.
				if (val.status == "loaded")
				{
					helpers.setLocalStorage("sections", val.sections);
				}
			},
			deep: true
		}
    },
});