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
			var item = models.newDefaultVolunteer();
			this.$root.sections.volunteer.push(item);
		},

		addHighlight: function(index)
		{
			var item = models.newDefaultVolunteerHighlight();
			//console.log("addHighlight(" + index + ")", this.$root.sections.volunteer[index]);
			this.$root.sections.volunteer[index].highlights.push(item);
		},
		

		deleteClicked: function(index)
		{
			var response = confirm("Are you sure you want to delete this position?");

			if (response == true)
			{
				this.$root.sections.volunteer.splice(index, 1);
			}
		},


		moveUpClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.sections.volunteer, index, index - 1);
		},


		moveDownClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.sections.volunteer, index, index + 1);
		}
	}
};