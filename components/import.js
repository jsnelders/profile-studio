var importComponent = {
	template: '#import-template',

	

	mounted: function()
	{
		
	},



	destroyed: function()
	{
		
	},


	
	data: function()
	{
		return {
			json: ""
		};
	},

	

	methods: {
		importJson: function()
		{
			console.log("import JSON: " + this.json);

			var data = JSON.parse(this.json);

			// Reset first
			this.$root.sections = models.newDefaultSections();

			this.$root.populateSections(data);

			storage.setLocalStorage("sections", this.$root.sections);

			router.push("section/basics");
		},


		validateJson: function(value)
		{

		}
	}
};