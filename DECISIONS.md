# Nodes on Completion of Take-Home Exercise


## Approach

I oriented myself in the code base by cloning down the repository and reviewing all main src files locally, particularly the files in the routes directory and the data directory. This gave me an overall idea of the shape of the data we're dealing with and how it was currently being loaded from the service-requests.json file and used by the service requests list page. I then started the dev server so I could explore the app's initial setup in my browser.


## Decisions & Tradeoffs

- A primary decision was where to display a service request's details when a user clicks on one of the main page's list items. I debated using a dialog, but ultimately decided to create a completely separate request details page at src/routes/requests/[id]. One reason for this was forward thinking in the sense that if this were a real-world app, over time there may be a need to display more detail data. I felt that if more data needed to be added to the page later, it would be a better user experience to have it displayed on an easily navigable page rather than on a dialog, which can tend to feel cramped and confusing if it contains too much information. In the same vein, I thought that if a request had many different notes, that could be visually cramped in a dialog. Another reason for my decision was that since the request data was already being set up in a writable store, there was no difficulty in accessing the request data across multiple pages.

- I had some internal debate about how to handle the UI for the 'Update Status' section on the request details page. I settled on a set of buttons, but also considered radio inputs or a dropdown menu. Ultimately I went with the current button layout primarily as a stylistic choice. 

- For the 'Update Status' status button options, I decided that users should be able to choose 'earlier' stages of progress as well as 'later' stages, rather than being restricted to a strict linear progression from 'Open' to 'Resolved'. This supports the user's ability to revert to a previous status if, for example, a request that was resolved needs to be moved back to 'In Progress'.

- Another judgement call was to not include full end-to-end testing. Due to the time constraints, I opted to stick to unit and integration testing.


## Improvements & Changes

- To support correct service request data loading on details page reload, I moved initial data load to +layout.ts and moved the store initialization from src/routes/+page.svelte to src/routes/+layout.svelte. 
- I updated routes/+page.svelte so that the service request list data is pulled from the request store.
- I separated the service request table out into its own component.
- I updated the "any" types in src/lib/types/index.ts with correct types.
- I added the <main> container to src/routes/+layout.svelte.
- If the filtered service requests array is empty, the user will see a 'No service requests found' message.
- I made general accessibility updates, including adding aria-labels and tab indexing to table rows.


## Additional Changes if Time Permitted

- I noticed a 'TODO' comment in the code that indicated sorting should be added. I think that adding the ability to sort by priority, status, and date submitted would be useful.
- I would like to build a more efficient way to update the service request data in the updateStatus function. Mapping over every item clearly isn't a problem here because the data set is so small, but there could definitely be more performant ways to do this.
- I didn't do much in the way of error handling, primarily because the current setup has little chance of true errors per se. But with more time, I'd definitely do some more error handling to make the code more real-world-proof.
- I would consider making the 'description' section of the details page truncated and expandable if the description text is extremely long. 
- I would definitely add more extensive testing, especially around the status update buttons and correct store value updating. 
- There is a type error on the integration test that I would like to fix.
- If I had more time, I'd like to look at the UTC date handling and make updates as needed.
- I'd update how missing addresses get handled, to possibly display property ID there instead if appropriate. 
