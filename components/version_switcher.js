Vue.component("version-switcher", {
	template: '#version-switcher-template',


	props: [
    'forcevisible'
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
			item: {}
		};
	},

	

	methods: {
    visible: function()
    {
      return this.forcevisible || this.$root.settings.versionswitcher;
    }
	}
});