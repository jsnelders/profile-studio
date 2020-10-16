var sectionWorkComponent = {
	template: '#section-work-template',

	

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
		addPosition: function()
		{
			var item = models.newDefaultWork();
			this.$root.sections.work.push(item);
		},

		addHighlight: function(index)
		{
			if (!this.$root.sections.work[index].highlights) {
				this.$set(this.$root.sections.work[index], "highlights", []);
			}
			var item = models.newDefaultWorkHighlight();
			this.$root.sections.work[index].highlights.push(item);
		},

		deleteClickedHighlight: function(wIndex, index)
		{
			var response = confirm("Are you sure you want to delete this highlight?");

			if (response == true)
			{
				this.$root.sections.work[wIndex].highlights.splice(index, 1);
			}
		},

		deleteClicked: function(index)
		{
			var response = confirm("Are you sure you want to delete this position?");

			if (response == true)
			{
				this.$root.sections.work.splice(index, 1);
			}
		},


		moveUpClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.sections.work, index, index - 1);
		},


		moveDownClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.sections.work, index, index + 1);
		},

		moveUpClickedHighlight: function(wIndex,index)
		{
			if (index > 0)
				this.$root.moveArrayPosition(this.$root.sections.work[wIndex].highlights, index, index - 1);
		},


		moveDownClickedHighlight: function(wIndex,index)
		{
			if (index < this.$root.sections.work[wIndex].highlights.length)
				this.$root.moveArrayPosition(this.$root.sections.work[wIndex].highlights, index, index + 1);
		}
	}
};