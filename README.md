# JSON Resume Editor

**Welcome to JSON Resume Studio,** a generator and editor for [JSON Resume](https://jsonresume.org/) files.

*All the magic happens in your local browser.* No registration possible, even if you wanted to. No data stored.

To create a JSON resume file:

1.  Fill in the details under each section.
2.  At any time [Preview](https://mann.fr/cv/studio/#/preview) how your resume could look.
3.  When you're finished [export](https://mann.fr/cv/studio/) your resume by copying the JSON output into a text file.

Once you've got that JSON-resume file,you can then make use of it as fellows:

1.  Create a public Gist in your [GitHub](https://github.com/) account (create a new account for free) with a filename "resume.json". (See an [example here](https://gist.github.com/jsnelders/cab89beb9bc0e677ef3f5ec30ef4260b).)
2.  Save your resume in your browser. You can close your browser and come back to the site any time - your saved resume will re-load automatically for you to keep working.
3.  View your live resume on jsonresume.org by browsing to https://registry.jsonresume.org/{your_github_username}. (see an [example here](https://registry.jsonresume.org/jsnelders).) or use any of the following tools:
    - [https://www.velocv.com](https://www.velocv.com/)
    - <https://resumefodder.com/>
    - <https://github.com/hacksalot/HackMyResume>
    - <https://medium.com/@fullsour/creating-online-resume-with-netlify-8d468a5ef11b>

See it in action now. Copy a resume from <https://gist.github.com/jsnelders/cab89beb9bc0e677ef3f5ec30ef4260b>.

Currently developed to use the schema defined at <https://jsonresume.org/schema/>, with additional attributes found at <https://github.com/jsonresume/resume-schema/blob/v1.0.0/schema.json>.\
"url" attributes are current identified as "website" per the published shema at jsonresume.org.

*Enjoy!*

[Jason Snelders](https://jsnelders.com/) and [Chris Mann](https://www.mann.fr/)

## Biography

Project started 11 November 2019 by Jason Snelders.

### Aim:

Create an editor for JSON Resume (which I was using as my primary professional profile for a while).

This README will be updated when the project starts to stabilize.

![Dope](https://img.shields.io/badge/It%20is-Dope!-blue)
![Dope](https://img.shields.io/badge/Vue.js-Rocks!-green)

**Status:**
October 2020, worm fine

Deployed but still under deployment. I meant to have this finished 6 months ago but start new work and everything drop off the priority list.  
However, a recent PR has prompted me to chip away at it again on the weekends.

Next stage of development will "modernize" the code to ES6, introduce Vue single file components and use Parcel.js for compilation. 

I started this with pure in-browser scripts to cut down on screwing around with build tools but it's now large enough to need them for better code architecture.

Use it at [https://profilestudio.co](https://profilestudio.co/#/)


Dependencies:

1) W3CSS (https://www.w3schools.com/w3css/)
2) VueJS (https://vuejs.org/)
3) Vue Router (https://router.vuejs.org/)