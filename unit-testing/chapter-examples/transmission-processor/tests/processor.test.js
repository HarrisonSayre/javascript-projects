const processor = require('../processor.js');

describe("transmission processor", function() {

   //  TODO: put tests 
  test("takes a string returns an object", function(){
    let result = processor("9701::<489584872710>");
    expect(typeof result).toBe("object");
  });

  test("returns -1 if '::' not found", function() {
    let result = processor("9701<489584872710>");
    expect(result).toBe(-1);
  });

  test("returns id in object", function() {
    let result = processor("9701::<489584872710>");
    expect(result.id).not.toBeUndefined();
  });
  test("converts id to a number", function() {
      let result = processor("9701::<489584872710>");
      expect(result.id).toBe(9701);
  });
  test("returns rawData in object", function() {
    let result = processor("9701::<487297403495720912>");
    expect(result.rawData).not.toBeUndefined();
  });
  test("returns -1 for rawData if missing < at position 0", function() {
    let result = processor("9701::487297403495720912>");
    expect(result.rawData).toBe(-1);
  });
  test("returns -1 for rawData if missing < at position -1", function() {
    let result = processor("9701::<487297403495720912");
    expect(result.rawData).toBe(-1);
  });

  test("returns -1 for rawData if missing both <> at position 0 and - 1", function() {
    let result = processor("9701::487297403495720912");
    expect(result.rawData).toBe(-1);
  });

  test("returns -1 for rawData if < is at a position other than 0", function() {
    let result = processor("9701::4<87297403495720912>");
    expect(result.rawData).toBe(-1);
  });

  test("returns -1 for rawData if > is at a position other than -1", function() {
    let result = processor("9701::<48729740349572091>2");
    expect(result.rawData).toBe(-1);
  });

  test("returns -1 for rawData if > is at a position other than -1", function() {
    let result = processor("9701::<<48729740349572091>2>");
    expect(result.rawData).toBe(-1);
  });

 });