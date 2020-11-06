import { it, expect, describe } from "@playwright/test";

describe("open a Dota 2 sub-reddit with Reddit Search", () => {
    const screen = "https://www.reddit.com/";

    // NOTE: Fails on Firefox because of some shadow-drop by Reddit
    it("simple search", async ({ page }) => {
        await page.goto(screen);
        
        // NOTE: Normal mode is css selector
        await page.type(
            '#header-search-bar',
            'Dota 2'
        );
        // NOTE: Dropdown is set to appear onClick event
        await page.click(
            '#header-search-bar'
        );
        await page.waitForSelector('#SearchDropdownContent > a');
        await page.click('#SearchDropdownContent > a');

        // NTOE: "double qoute string" is a string lookup on page
        // NOTE: Example of page loading wait indicator (indirect)
        await page.waitForSelector('"pinned by moderators"');

        // NOTE: A more direct example of page load/SPA App load complete.
        // await page.waitForLoadState('networkidle');
    
        await page.screenshot({ path: 'dota-2-test.png', type: 'png' });
        
        const subRedditName = await page.innerText('h1');

        expect(subRedditName).toBe("Dota 2 on Reddit");
    });
})
