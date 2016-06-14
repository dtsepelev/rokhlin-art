[Alexander Rokhlin](http://rokhlinart.com) art gallery
===

Basic gallery built from scratch for Alexander Rokhlin portfolio on top of Meteor, React & CSS Modules.

Installation
===

You will need meteor to run the gallery. Read how to [install meteor](https://www.meteor.com/install). You will also need to install all npm modules from the project. To do it:

```
meteor npm install
```

Use
===
To start the gallery:

```
meteor --settings local_settings.json
```

That's it. Now it is up and running on http://localhost:3000


Adding data
===

Currently gallery does not have any UI for adding photos and albums, but you can modify gallery by editing [data.js](https://github.com/dtsepelev/rokhlinart/blob/master/imports/startup/server/data.js) file.

You will need to drop database to update gallery. To do it start meteor and:
```
meteor mongo
db.dropDatabase()
```
After database was dropped - restart meteor.

License
===

Everything, except artworks inside `public/gallery/` released under the MIT license.
Artworks are distributed under [Attribution-NonCommercial-NoDerivatives 4.0 International](http://creativecommons.org/licenses/by-nc-nd/4.0/) license.