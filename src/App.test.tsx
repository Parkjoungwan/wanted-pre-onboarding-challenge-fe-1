import Auth from "./classes/AuthTest";

describe("make Auth Properly", () => {
  it("check Password & ID is Properly", () => {
    const correctId = "test@test.com";
    const wrongId = "test,test.com";
    const wrongId2 = "test@test$.com";
    const correctPw = "12345678";
    const wrongPw = "1234567";
    const info1: Auth = new Auth(correctId, correctPw);
    const info2: Auth = new Auth(correctId, wrongPw);
    const info3: Auth = new Auth(wrongId, correctPw);
    const info4: Auth = new Auth(wrongId, wrongPw);
    const info5: Auth = new Auth(wrongId2, correctPw);
    const info6: Auth = new Auth(wrongId2, wrongPw);
    expect(info1.validate()).toEqual(0);
    expect(info2.validate()).toEqual(2);
    expect(info3.validate()).toEqual(1);
    expect(info4.validate()).toEqual(3);
    expect(info5.validate()).toEqual(1);
    expect(info6.validate()).toEqual(3);
  });
});
