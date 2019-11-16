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
		},


		deleteClicked: function(index)
		{
			var response = confirm("Are you sure you want to delete this award?");

			if (response == true)
			{
				this.$root.sections.awards.splice(index, 1);
			}
		},


		moveUpClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.sections.awards, index, index - 1);
		},


		moveDownClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.sections.awards, index, index + 1);
		}
	}
};