var sectionReferencesComponent = {
	template: '#section-references-template',

	

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
		addReference: function()
		{
			var item = sections.getDefaultReference();
			this.$root.sections.references.push(item);
		},


		deleteClicked: function(index)
		{
			var response = confirm("Are you sure you want to delete this reference?");

			if (response == true)
			{
				this.$root.sections.references.splice(index, 1);
			}
		},


		moveUpClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.sections.references, index, index - 1);
		},


		moveDownClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.sections.references, index, index + 1);
		}
	}
};