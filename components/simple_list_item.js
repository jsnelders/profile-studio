Vue.component("simple-list-item", {
	template: '#simple-list-item-template',


	props: [
		'modelitem',
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
		getModelItem: function()
		{
			return (this.modelitem ? this.modelitem : "???");
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