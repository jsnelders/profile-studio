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

			this.$root.populateSections(data);
		},


		validateJson: function(value)
		{

		}
	}
};