import getTotalComment from "../commentCountapi";

describe("Total comments for each meals", () => {
  test("Count total meal items diplaying on the detail popup", () => {
    const commentsArray = [{},{},{},{},{}, {},{},{}];
    const count = getTotalComment(commentsArray);

    expect(commentsArray).toHaveLength(8);
    expect(count).toBe(8);
  });
})