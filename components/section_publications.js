var sectionPublicationsComponent = {
	template: '#section-publications-template',

	

	mounted: function()
	{
		
	},



	destroyed: function()
	{
		
	},


	
	data: function()
	{
		return {
			item: {}
		};
	},

	

	methods: {
		addPublication: function()
		{
			var item = this.$root.getDefaultWork();
			this.$root.sections.publications.push(item);
		}
	}
};