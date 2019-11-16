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
		}
	}
};