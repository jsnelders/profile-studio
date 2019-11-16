var sectionBasicsComponent = {
	template: '#section-basics-template',



	

	mounted: function()
	{
		var savedData = helpers.getLocalStorage("section.basics");

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
				//helpers.setLocalStorage("section.basics", val);

				//this.$root.sections.basics = val;
			},
			deep: true
		}
	},
	




	methods: {
		addProfile: function()
		{
			var item = sections.getDefaultBasicProfile();
			this.$root.sections.basics.profiles.push(item);
		}
	}
};