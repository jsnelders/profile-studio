var sectionWorkComponent = {
	template: '#section-work-template',

	

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
		addPosition: function()
		{
			var item = sections.getDefaultWork();
			this.$root.sections.work.push(item);
		},

		addHighlight: function(index)
		{
			var item = sections.getDefaultWorkHighlight();
			this.$root.sections.work[index].highlights.push(item);
		}
	}
};