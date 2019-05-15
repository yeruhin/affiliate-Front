# affiliates-test

Affiliate-test is web aplication that have 2 buttons :
- “Fetch-words” button will start to load the words to the DB.
- “Show-report” button will display the 3 table of word groups and total count of the words for each group of words.

Click the "fetch words" button to load 3 tables from datamuse API to backend on next words : “affiliate”, “marketing” & “influencer”.

Click the "show report" button to send the whole tables from backend and render them on table component.

Each word click open modal with word details, the modal contain word score & tags.

Affiliate-test use vue.js on Front-end & node.js with mongoDB on the Back-end

To set up & run the project you need to download the front project and the backend project from here: https://github.com/yeruhin/affiliate-back

after you download the projects on the front end run : 

```
npm run serve

```
and on the backend project run:

```
node server
```

after that just open http://localhost:8080 and see the project.
