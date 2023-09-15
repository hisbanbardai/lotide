const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it("original array should still have 3 elements. returns 3 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    let words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it("returns length 2 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    let words = ["Yo Yo", "Lighthouse", "Labs"];
    let result = tail(words);
    assert.strictEqual(result.length, 2);
  });

  it("returns 'Lighthouse' as first element for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    let words = ["Yo Yo", "Lighthouse", "Labs"];
    let result = tail(words);
    assert.strictEqual(result[0], "Lighthouse");
  });

  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    let words = ["Yo Yo", "Lighthouse", "Labs"];
    let result = tail(words);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it("returns [] for []", () => {
    let words = [];
    let result = tail(words);
    assert.deepEqual(result, []);
  });
});


