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
		addKeyword: function(index)
		{
			var item = this.$root.getDefaultSkillKeywoard();
			//console.log("addHighlight(" + index + ")", this.$root.sections.volunteer[index]);
			this.$root.sections.skills[index].keywords.push(item);
		}
	}
};