var sectionEducationComponent = {
	template: '#section-education-template',

	

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
		addEducation: function()
		{
			var item = sections.getDefaultEducation();
			this.$root.sections.education.push(item);
		},

		addCourse: function(index)
		{
			var item = sections.getDefaultEducationCourse();
			this.$root.sections.education[index].courses.push(item);
		}
	}
};