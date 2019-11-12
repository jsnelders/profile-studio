var sectionVolunteerComponent = {
	template: '#section-volunteer-template',

	

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
			var item = this.$root.getDefaulVolunteerHighlight();
			//console.log("addHighlight(" + index + ")", this.$root.sections.volunteer[index]);
			this.$root.sections.volunteer[index].highlights.push(item);
		}
	}
};