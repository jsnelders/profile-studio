var exportComponent = {
	template: '#export-template',

	

	mounted: function()
	{
		stringDate = new Date().toISOString();
		this.$root.sections.meta.lastModified = stringDate.slice(0,16) + stringDate.slice(stringDate.lastIndexOf("Z")); //.replace(":","");
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