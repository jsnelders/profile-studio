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

		}

	}
};