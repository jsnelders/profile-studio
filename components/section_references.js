var sectionReferencesComponent = {
	template: '#section-references-template',

	

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
		addReference: function()
		{
			var item = this.$root.getDefaultReference();
			this.$root.sections.references.push(item);
		}
	}
};