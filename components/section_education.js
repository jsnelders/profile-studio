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
		addCourse: function(index)
		{
			var item = this.$root.getDefaultEducationCourse();
			//console.log("addHighlight(" + index + ")", this.$root.sections.volunteer[index]);
			this.$root.sections.education[index].courses.push(item);
		}
	}
};