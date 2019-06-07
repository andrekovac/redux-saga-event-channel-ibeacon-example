import { createMockTask } from "@redux-saga/testing-utils";
import { call } from "redux-saga/effects";

import { logSth } from "../sagas";

describe("logSth", () => {
  const generator = logSth();

  it("waits for call action", () => {
    const expectedYield = call(console.log, "This logs sth!");
    expect(generator.next().value).toEqual(expectedYield);
  });
});
