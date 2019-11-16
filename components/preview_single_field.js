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
		this.displayFormat = (this.format ? this.format : "");
	},



	destroyed: function()
	{
		
	},


	
	data: function()
	{
		return {
			displayFormat: "",	// Refine the "format" so we don't mutate the prop.
			item: {}
		};
	},

	

	methods: {
		getLabel: function()
		{
			return (this.label ? this.label : "&nbsp;");
		},

		getValue: function()
		{
			// Return the value formatted.

			if (this.displayFormat == "url")
			{
				return "<a href='" + this.value + "' target='_blank'>" + this.value + "</a>";
			}

			if (this.displayFormat == "email")
			{
				return "<a href='mailto:" + this.value + "' target='_blank'>" + this.value + "</a>";
			}

			if (this.displayFormat == "phone")
			{
				return "<a href='tel:" + this.value + "' target='_blank'>" + this.value + "</a>";
			}

			if (this.displayFormat == "multi-line")
			{
				return this.replaceLineBreaks(this.value);
			}

			if (this.displayFormat == "image")
			{
				return "<img src='" + this.value + "' style='max-width: 100px;'></img>";
			}

			return (this.value ? this.value : "&nbsp;");
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