var importComponent = {
	template: '#import-template',

	mounted: function()
	{

		
	},

	destroyed: function()
	{
		
	},

	data: function()
	{
		return {
			item: {},
			json: "",
			versions: []
		}
	},

	methods: {
		importJson: function()
		{
			// console.log("import JSON: " + this.json);

			var data = JSON.parse(this.json);

			// Reset first
			this.$root.sections = models.newDefaultSections();

			this.$root.populateSections(data);

			storage.setLocalStorage("sections", this.$root.sections);

			this.$root.currentVersion = this.$root.sections.meta.version;

			storage.setVersionedLocalStorage(this.$root.currentVersion, "sections", this.$root.sections);

			if (this.$root.versions.indexOf(this.$root.currentVersion) < 0) {
				this.$root.versions.push(this.$root.currentVersion)
			}

			router.push("section/basics");
		},

		validateJson: function(value)
		{

		},

		importVersion: function(version) {
			//console.log(version);
			this.$root.sections = storage.getVersionedLocalStorage(version,"sections");
			storage.setLocalStorage("sections",this.$root.sections);
			this.$root.currentVersion = version;
			this.$root.loadFromStorage();

			router.push("section/basics");
		},

		deleteVersion: function(version) {
			var versions = storage.getLocalStorage("versions");
			var index = versions.indexOf(version);
			if (index > -1 && confirm("Are you sure you wish to delete " + version + "?")) {
				versions.splice(index, 1);
				storage.setVersionedLocalStorage(version,"sections",null);
				storage.setLocalStorage("versions",versions);
				this.$root.versions = versions;
			}
		},

		deleteClicked: function(index)
		{
			// console.log(index);
			var response = confirm("Are you sure you want to delete this position? " + index);

			if (response == true)
			{
				this.$root.versions.splice(index, 1);
			}
			storage.setLocalStorage("versions",this.$root.versions);
		},


		moveUpClicked: function(index)
		{
			// console.log(index);
			this.$root.moveArrayPosition(this.$root.versions, index, index - 1);
			storage.setLocalStorage("versions",this.$root.versions);
		},


		moveDownClicked: function(index)
		{
			this.$root.moveArrayPosition(this.$root.versions, index, index + 1);
			storage.setLocalStorage("versions",this.$root.versions);
		}

	}
};