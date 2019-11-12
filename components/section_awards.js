var sectionAwardsComponent = {
	template: '#section-awards-template',

	

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
		addAward: function()
		{
			var item = this.$root.getDefaultAward();
			this.$root.sections.awards.push(item);
		}
	}
};