import { getAllTabAmounts } from "./shared_utils";
import { summaryPropsArguments } from "./test_data";

describe("getAllTabAmounts", () => {
    it("returns the tab amount of all types of ITEMS", () => {
        const { beerList, snackList, wineList } = summaryPropsArguments;
        const actual = getAllTabAmounts({ beerList, snackList, wineList });

        const expected = {
            beerTab: 6,
            snackTab: 10,
            total: 22,
            wineTab: 6,
        };

        expect(actual).toEqual(expected);
    });
});
