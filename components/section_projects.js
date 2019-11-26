var sectionProjectsComponent = {
	template: '#section-projects-template',

	

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
		addProject: function()
		{
			var item = models.newDefaultProject();
			this.$root.sections.projects.push(item);
		},

		addHighlight: function(index)
		{
			if (!this.$root.sections.projects[index].highlights)
			{
				// May not exist from an import, so add the property.
				this.$set(this.$root.sections.projects[index], "highlights", []);
			}

			var item = models.newDefaultProjectHighlight();
			this.$root.sections.projects[index].highlights.push(item);

			console.log("this.$root.sections.projects[" + index + "]=", this.$root.sections.projects[index]);
		},

		addKeyword: function(index)
		{
			if (!this.$root.sections.projects[index].keywords)
			{
				// May not exist from an import, so add the property.
				this.$set(this.$root.sections.projects[index], "keywords", []);
			}

			var item = models.newDefaultProjectKeyword();
			this.$root.sections.projects[index].keywords.push(item);
		},

		addRole: function(index)
		{
			if (!this.$root.sections.projects[index].roles)
			{
				// May not exist from an import, so add the property.
				this.$set(this.$root.sections.projects[index], "roles", []);
			}

			var item = models.newDefaultProjectRole();
			this.$root.sections.projects[index].roles.push(item);
		},


		deleteClicked: function(index)
		{
			var response = confirm("Are you sure you want to delete this project?");

			if (response == true)
			{
				this.$root.sections.projects.splice(index, 1);
			}
		},


		moveUpClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.sections.work, index, index - 1);
		},


		moveDownClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.sections.work, index, index + 1);
		}
	}
};