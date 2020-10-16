var sectionSkillsComponent = {
	template: '#section-skills-template',

	

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
		addSkill: function()
		{
			var item = models.newDefaultSkill();
			this.$root.sections.skills.push(item);
		},

		addKeyword: function(index)
		{
			var item = models.newDefaultSkillKeyword();
			//console.log("addHighlight(" + index + ")", this.$root.sections.volunteer[index]);
			if (!this.$root.sections.skills[index].keywords) {
				this.$set(this.$root.sections.skills[index], "keywords", []);
			}
			this.$root.sections.skills[index].keywords.push(item);
		},
		

		deleteClicked: function(index)
		{
			var response = confirm("Are you sure you want to delete this skill?");

			if (response == true)
			{
				this.$root.sections.skills.splice(index, 1);
			}
		},


		moveUpClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.sections.skills, index, index - 1);
		},


		moveDownClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.sections.skills, index, index + 1);
		}
	}
};