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
		addHighlight: function(index)
		{
			var item = this.$root.getDefaultWorkHighlight();
			console.log("addHighlight(" + index + ")", this.$root.sections.work[index]);
			this.$root.sections.work[index].highlights.push(item);
		}
	}
};