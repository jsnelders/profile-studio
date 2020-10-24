var sectionMetaComponent = {
	template: '#section-meta-template',

	mounted: function()
	{
		var savedData = storage.getLocalStorage("section.meta");

		if (savedData)
		{
			// Data previously saved.
			this.data = savedData;

			for (var key in savedData) 
			{
				if (savedData.hasOwnProperty(key)) 
				{
					//console.log(key + " > " + savedData[key]);
					this[key] = savedData[key];
				}
			}
		}
	},

	destroyed: function()
	{
		
	},

	data: function()
	{
		return {

		};
	},

	watch: {
		/**
		 * Watch all data for changes
		 */
		$data: {
			handler: function(val, oldVal) 
			{
				// Save the data to localStorage
				//NOTE: I'm initially not concerned about performance here/
				//storage.setLocalStorage("section.basics", val);
				console.log([val, oldVal]);
				//this.$root.sections.basics = val;
			},
			deep: true
		}
	},
	
	methods: {

		versionChange: function()
		{
			storage.setVersionedLocalStorage(this.$root.currentVersion,"sections",null);
			storage.setVersionedLocalStorage(this.$root.sections.meta.version,"sections",this.$root.sections); //this.$root.sections);
			var versions = storage.getLocalStorage("versions");
			var index = versions.indexOf(this.$root.currentVersion);
			if ( index > -1) {
				versions.splice(index,1);
				this.$root.versions = versions;
				storage.setLocalStorage("versions",versions);
			}
			this.$root.currentVersion = this.$root.sections.meta.version;
			storage.setLocalStorage("currentVersion",this.$root.currentVersion);
			
			/*
			var oldVersion = this.$root.currentVersion;
			var newVersion = this.$root.sections.meta.version;
			storage.setVersionedLocalStorage(newVersion,"sections",this.$root.sections);
			storage.setVersionedLocalStorage(oldVersion,"sections",null);
			this.$root.currentVersion = newVersion;
			storage.setLocalStorage("currentVersion",newVersion);
			*/
		}

	}
};