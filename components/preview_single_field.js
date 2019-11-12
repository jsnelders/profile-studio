Vue.component("preview-field", {
	template: '#preview-single-field-template',


	props: [
		'label',
		'value',

		'dataType',
		'format',
	],

	

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
		getValue: function()
		{
			// Return the value formatted.

			if (this.format == "url")
			{
				return "<a href='" + this.value + "' target='_blank'>" + this.value + "</a>";
			}

			if (this.format == "multi-line")
			{
				return this.replaceLineBreaks(this.value);
			}

			return this.value;
		},


		replaceLineBreaks: function(value)
		{
			if (!value)
			{
				// Null or undefined or bad input
			}
			
			var output = "";
			
			// Replace line-breaks with "\n"
			//output = value.replace(/(?:\r\n|\r|\n)/g, '\\n');
			output = value.replace(/(?:\r\n|\r|\n)/g, '<br>');
			
			return output;
		}
	}
});