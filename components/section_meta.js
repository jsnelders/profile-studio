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

				//this.$root.sections.basics = val;
			},
			deep: true
		}
	},
	
	methods: {
		addProfile: function()
		{
			var item = models.newDefaultMeta();
			this.$root.sections.meta.profiles.push(item);
		}
	}
};