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
			var item = this.$root.getDefaultSkill();
			this.$root.sections.skills.push(item);
		},

		addKeyword: function(index)
		{
			var item = sections.getDefaultSkillKeywoard();
			//console.log("addHighlight(" + index + ")", this.$root.sections.volunteer[index]);
			this.$root.sections.skills[index].keywords.push(item);
		}
	}
};