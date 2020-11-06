import { it, expect, describe } from "@playwright/test";

describe("open a Dota 2 sub-reddit with Reddit Search", () => {
    const screen = "https://www.reddit.com/";

    it("simple search", async ({ page }) => {
        await page.goto(screen);
        
        await page.type(
            '#header-search-bar',
            'Dota 2'
        );
    
        await page.click('#SearchDropdownContent > a');

        await page.waitForSelector('"pinned by moderators"');
    
        await page.screenshot({ path: 'dota-2-test.png', type: 'png' });
        
        const subRedditName = await page.innerText('h1');

      expect(subRedditName).toBe("Dota 2 on Reddit");
    });
})
