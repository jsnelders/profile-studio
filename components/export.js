var exportComponent = {
	template: '#export-template',

	

	mounted: function()
	{
		this.json = JSON.stringify(this.$root.sections, null, 4);
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

	}
};