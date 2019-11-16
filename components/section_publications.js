var sectionPublicationsComponent = {
	template: '#section-publications-template',

	

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
		addPublication: function()
		{
			var item = sections.getDefaultWork();
			this.$root.sections.publications.push(item);
		},


		deleteClicked: function(index)
		{
			var response = confirm("Are you sure you want to delete this publication?");

			if (response == true)
			{
				this.$root.sections.publications.splice(index, 1);
			}
		},


		moveUpClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.sections.publications, index, index - 1);
		},


		moveDownClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.sections.publications, index, index + 1);
		}
	}
};