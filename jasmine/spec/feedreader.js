/* This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* All of the tests are placed within the $() function,
 * since some of these tests may require DOM elements.
 */
$(function() {
    //Test suite for the RSS feeds variable
    describe('RSS Feeds', function() {
        /* Tests to make sure that the allFeeds variable has
         * been defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test that loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the URL is not
         * empty.
         */
          it('url defined', function() {
              for(let feed of allFeeds) {
                  expect(feed.url).toBeDefined();
                  expect(feed.url.length).not.toBe(0);
              }
          });

        /* Test that loops through each feed in the allFeeds object
         * and ensures it has a name defined and that the name
         * is not empty.
         */
         it('name defined', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect (feed.name.length).not.toBe(0);
            }
         });
    });

    //Test suite for the menu element inside the html body
    describe('The menu', function () {

      // Test that ensures the menu element is hidden by default.
       it('is hidden by default', function() {
          const body = document.querySelector('body');
          expect(body.classList.contains('menu-hidden')).toBe(true);
       });

       /* Test that ensures the menu changes visibility when
        * the menu icon is clicked. Menu displays when
        * clicked and hides when clicked again.
        */
        it('toggles on and off', function() {
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');

            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });

    //Test suite for the Initial Entries/loadFeed function
    describe('Initial Entries', function() {

      /* Test that ensures when the loadFeed function is called
         * and completes its work.
         */
       beforeEach(function(done) {
            loadFeed(0, done);
       });
          //Tests that there is at least one .entry element within .feed container
          it('completes its work', function() {
              const feedEntries = document.querySelectorAll('.feed .entry');
              expect(feedEntries.length).toBeGreaterThan(0);
              console.log(feedEntries.children);
          });
    });

    //Test suite named New Feed Selection
    describe('New Feed Selection', function() {
          const feed = document.querySelector('.feed');
          const firstFeed = [];
          const secondFeed = [];

        /* Test loads multiple feeds and compares content when a
         * new feed is loaded by the loadFeed function and checks
         * that the content actually changes.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
              //Load firstFeed variable
              Array.from(feed.children).forEach(function(feed) {
                firstFeed.push(feed.innerText);

            loadFeed(1, function() {
              //Load secondFeed variable
              Array.from(feed.children).forEach(function(feed) {
                secondFeed.push(feed.innerText);
              });

                done();
              });
            });
          });
        });

        it('content changes', function() {
            expect(firstFeed).not.toEqual(secondFeed);
            });
        });

}());
