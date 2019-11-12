var sectionInterestsComponent = {
	template: '#section-interests-template',

	

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
		addKeyword: function(index)
		{
			var item = this.$root.getDefaultInterestKeywoard();
			//console.log("addHighlight(" + index + ")", this.$root.sections.interests[index]);
			this.$root.sections.interests[index].keywords.push(item);
		}
	}
};