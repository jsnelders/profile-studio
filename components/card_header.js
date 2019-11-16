Vue.component("card-header", {
	template: '#card-header-template',


	props: [
		'label',
		'id'
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
			
		};
	},

	

	methods: {
		getLabel: function()
		{
			return (this.label ? this.label : "<i>(Untitled)</i>");
		},

		
		deleteClick: function()
		{
			//alert("deleteClick");
			this.$emit('delete-clicked', this.id);
		},


		moveUpClick: function()
		{
			//alert("moveUpClick");
			this.$emit('move-up-clicked', this.id);
		},


		moveDownClick: function()
		{
			//alert("moveDownClick");
			this.$emit('move-down-clicked', this.id);
		},
	}
});