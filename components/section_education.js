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
		},


		deleteClicked: function(index)
		{
			var response = confirm("Are you sure you want to delete this position?");

			if (response == true)
			{
				this.$root.sections.education.splice(index, 1);
			}
		},


		moveUpClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.sections.education, index, index - 1);
		},


		moveDownClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.sections.education, index, index + 1);
		}
	}
};