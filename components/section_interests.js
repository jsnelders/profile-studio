var sectionInterestsComponent = {
	template: '#section-interests-template',

	

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
		addInterest: function()
		{
			var item = models.newDefaultInterest();
			this.$root.sections.interests.push(item);
		},

		addKeyword: function(index)
		{
			var item = models.newDefaultInterestKeyword();
			//console.log("addKeyword(" + index + ")", this.$root.sections.interests[index]);
			this.$root.sections.interests[index].keywords.push(item);
		},


		deleteClicked: function(index)
		{
			var response = confirm("Are you sure you want to delete this interest?");

			if (response == true)
			{
				this.$root.sections.interests.splice(index, 1);
			}
		},


		moveUpClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.sections.interests, index, index - 1);
		},


		moveDownClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.sections.interests, index, index + 1);
		},


	deleteClickedKeyword: function(kIndex, index)
	{
		var response = confirm("Are you sure you want to delete this keyword?");

		if (response == true)
		{
			this.$root.sections.interests[kIndex].keywords.splice(index, 1);
		}
	},

	moveUpClickedKeyword: function(kIndex,index)
	{
		if (index > 0)
			this.$root.moveArrayPosition(this.$root.sections.interests[kIndex].keywords, index, index - 1);
	},


	moveDownClickedKeyword: function(kIndex,index)
	{
		if (index < this.$root.sections.interests[kIndex].keywords.length)
			this.$root.moveArrayPosition(this.$root.sections.interests[kIndex].keywords, index, index + 1);
	}

	}
};