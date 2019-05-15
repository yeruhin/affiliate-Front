# affiliates-test

Affiliate-test is web aplication thats have 2 buttons :
- “Fetch-words” button will start to load the words to the DB.
- “Show-report” button will display the 3 table of word groups and total count of the words for each group of words.

On fetch words button click the backend will load 3 tables from datamuse API on follows words : “affiliate”, “marketing” & “influencer”.

On show report button click the backend will send the whole tables and render then on table component.

Each word click open modal with word details, the modal contain word score & tags.

Affiliate-test use vue.js on Front-end & node.js with mongoDB on the Back-end

To set up & run the project you need to download the project run 

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

