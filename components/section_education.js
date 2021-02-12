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
			var item = models.getDefaultEducation();
			this.$root.sections.education.push(item);
		},

		addCourse: function(index)
		{
			var item = models.newDefaultEducationCourse();
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
		},

		deleteClickedCourse: function(eIndex, index)
		{
			var response = confirm("Are you sure you want to delete this Course?");

			if (response == true)
			{
				this.$root.sections.education[eIndex].courses.splice(index, 1);
			}
		},

		moveUpClickedCourse: function(eIndex,index)
		{
			if (index > 0)
				this.$root.moveArrayPosition(this.$root.sections.education[eIndex].courses, index, index - 1);
		},


		moveDownClickedCourse: function(eIndex,index)
		{
			if (index < this.$root.sections.education[eIndex].courses.length)
				this.$root.moveArrayPosition(this.$root.sections.education[eIndex].courses, index, index + 1);
		}

	}
};