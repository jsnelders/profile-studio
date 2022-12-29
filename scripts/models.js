var models = {

    // resume.json uses the ISO 8601 date standard e.g. 2014-06-29

    newDefaultSections: function()
    {
        var structure = {
            basics: {},
            work: [],
            volunteer: [],
            education: [],
            awards: [],
            publications: [],
            skills: [],
            languages: [],
            interests: [],
            references: [],
            projects: [],
            meta: {}
        };

        structure.basics = this.newDefaultBasic();
        structure.work.push(this.newDefaultWork());
        structure.volunteer.push(this.newDefaultVolunteer());
        structure.education.push(this.getDefaultEducation());
        structure.awards.push(this.newDefaultAward());
        structure.publications.push(this.newDefaultPublication());
        structure.skills.push(this.newDefaultSkill());
        structure.languages.push(this.newDefaultLanguage());
        structure.interests.push(this.newDefaultInterest());
        structure.references.push(this.newDefaultReference());
        structure.references.push(this.newDefaultProject());
        structure.meta = this.newDefaultMeta();

        return structure;
    },

    newDefaultBasic: function()
    {
        return {
            name: "",
            label: "",
            image: "",
            email: "",
            phone: "",
            website: "",
            summary: "",
            location: {
                address: "",
                postalCode: "",
                city: "",
                countryCode: "",        // code as per ISO-3166-1 ALPHA-2, e.g. US, AU, IN
                region: "",
            },
            profiles: [
                {
                    network: "",
                    username: "",
                    url: "",
                }
            ]
        };
    },

    newDefaultBasicProfile: function()
    {
        return {
            network: "",
            username: "",
            url: "",
        };
    },

    newDefaultWork: function()
    {
        return {
            name: "",
            location: "",
            description: "",
            position: "",
            url: "",
            startDate: "",
            endDate: "",
            summary: "",
            highlights: [""]
        };
    },

    newDefaultWorkHighlight: function()
    {
        return "";
    },
    
    newDefaultVolunteer: function()
    {
        return {
            organization: "",
            position: "",
            url: "",
            startDate: "",
            endDate: "",
            summary: "",
            highlights: [""]
        };
    },

    newDefaultVolunteerHighlight: function()
    {
        return "";
    },

    getDefaultEducation: function()
    {
        return {
            institution: "",
            area: "",
            studyType: "",
            startDate: "",
            endDate: "",
            gpa: "",
            courses: [""]
        };
    },
            
    newDefaultEducationCourse: function()
    {
        return "";
    },
    
    newDefaultAward: function()
    {
        return {
            title: "",
            date: "",
            awarder: "",
            summary: ""
        };
    },

    newDefaultPublication: function()
    {
        return {
            name: "",
            publisher: "",
            releaseDate: "",
            url: "",
            summary: ""
        };
    },

    newDefaultSkill: function()
    {
        return {
            name: "",
            level: "",
            keywords: [""]
        };
    },
            
    newDefaultSkillKeyword: function()
    {
        return "";
    },

    newDefaultLanguage: function()
    {
        return {
            language: "",
            fluency: ""
        };
    },

    newDefaultInterest: function()
    {
        return {
            name: "",
            keywords: [""]
        };
    },

    newDefaultInterestKeyword: function()
    {
        return "";
    },

    newDefaultReference: function()
    {
        return {
            name: "",
            reference: ""
        };
    },


    // Also in  schema v1.0.0
    newDefaultProject: function()
    {
        return {
            name: "",
            description: "",
            highlights: [],
            keywords: [],
            startDate: "",
            endDate: "",
            url: "",
            roles: [],
            entity: "",         // Specify the relevant company/entity affiliations e.g. 'greenpeace', 'corporationXYZ'
            type: ""            //" e.g. 'volunteering', 'presentation', 'talk', 'application', 'conference'"
        };
    },


    newDefaultProjectHighlight: function()
    {
        return "";
    },


    newDefaultProjectKeyword: function()
    {
        return "";
    },
    

    newDefaultProjectRole: function()
    {
        return "";
    },


    // Also in  schema v1.0.0
    newDefaultMeta: function()
    {
        return {
            canonical: "",      // "URL (as per RFC 3986) to latest version of this document"
            version: "",        // "A version field which follows semver - e.g. v1.0.0"
            lastModified: ""    // "Using ISO 8601 with YYYY-MM-DDThh:mm:ss"
        };
    }
}