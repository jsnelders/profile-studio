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
			var item = this.$root.getDefaultVolunteer();
			this.$root.sections.volunteer.push(item);
		},

		addHighlight: function(index)
		{
			var item = this.$root.getDefaulVolunteerHighlight();
			//console.log("addHighlight(" + index + ")", this.$root.sections.volunteer[index]);
			this.$root.sections.volunteer[index].highlights.push(item);
		}
	}
};