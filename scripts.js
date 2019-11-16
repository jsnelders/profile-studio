/**
 * Create a Helpers object to keep functions out of the global namespace space.
 */
var helpers = {

    setLocalStorage: function(key, value)
    {
        var jsonValue = JSON.stringify(value);
        localStorage.setItem(key, jsonValue);
    },



    getLocalStorage: function(key)
    {
        jsonValue = localStorage.getItem(key);
        

        var value = null;
        
        if (jsonValue)
        {
            value = JSON.parse(jsonValue);
        }
        
        return value;
    },



    clearLocalStorage: function(key)
    {
        localStorage.removeItem(key);
    }
}





var sections = {
    getDefaultSections: function()
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
            references: []
        };

        structure.basics = this.getDefaultBasic();
        structure.work.push(this.getDefaultWork());
        structure.volunteer.push(this.getDefaultVolunteer());
        structure.education.push(this.getDefaultEducation());
        structure.awards.push(this.getDefaultAward());
        structure.publications.push(this.getDefaultPublication());
        structure.skills.push(this.getDefaultSkill());
        structure.languages.push(this.getDefaultLanguage());
        structure.interests.push(this.getDefaultInterest());
        structure.references.push(this.getDefaultReference());

        return structure;
    },

    getDefaultBasic: function()
    {
        return {
            name: "",
            label: "",
            picture: "",
            email: "",
            phone: "",
            website: "",
            summary: "",
            location: {
                address: "",
                postalCode: "",
                city: "",
                countryCode: "",
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

    getDefaultBasicProfile: function()
    {
        return {
            network: "",
            username: "",
            url: "",
        };
    },

    getDefaultWork: function()
    {
        return {
            company: "",
            position: "",
            website: "",
            startDate: "",
            endDate: "",
            summary: "",
            highlights: [""]
        };
    },

    getDefaultWorkHighlight: function()
    {
        return "";
    },
    
    getDefaultVolunteer: function()
    {
        return {
            organization: "",
            position: "",
            website: "",
            startDate: "",
            endDate: "",
            summary: "",
            highlights: [""]
        };
    },

    getDefaulVolunteerHighlight: function()
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
            
    getDefaultEducationCourse: function()
    {
        return "";
    },
    
    getDefaultAward: function()
    {
        return {
            title: "",
            date: "",
            awarder: "",
            summary: ""
        };
    },

    getDefaultPublication: function()
    {
        return {
            name: "",
            publisher: "",
            releaseDate: "",
            website: "",
            summary: ""
        };
    },

    getDefaultSkill: function()
    {
        return {
            name: "",
            level: "",
            keywords: [""]
        };
    },
            
    getDefaultSkillKeywoard: function()
    {
        return "";
    },

    getDefaultLanguage: function()
    {
        return {
            language: "",
            fluency: ""
        };
    },

    getDefaultInterest: function()
    {
        return {
            name: "",
            keywords: [""]
        };
    },

    getDefaultInterestKeywoard: function()
    {
        return "";
    },

    getDefaultReference: function()
    {
        return {
            name: "",
            reference: ""
        };
    }
}