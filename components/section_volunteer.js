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
		addPosition: function()
		{
			var item = sections.getDefaultVolunteer();
			this.$root.sections.volunteer.push(item);
		},

		addHighlight: function(index)
		{
			var item = sections.getDefaulVolunteerHighlight();
			//console.log("addHighlight(" + index + ")", this.$root.sections.volunteer[index]);
			this.$root.sections.volunteer[index].highlights.push(item);
		}
	}
};