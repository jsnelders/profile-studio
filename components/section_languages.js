var sectionLanguagesComponent = {
	template: '#section-languages-template',

	

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
		addLanguage: function()
		{
			var item = sections.getDefaultInterest();
			this.$root.sections.languages.push(item);
		},
		

		deleteClicked: function(index)
		{
			var response = confirm("Are you sure you want to delete this language?");

			if (response == true)
			{
				this.$root.sections.languages.splice(index, 1);
			}
		},


		moveUpClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.sections.languages, index, index - 1);
		},


		moveDownClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.sections.languages, index, index + 1);
		}
	}
};