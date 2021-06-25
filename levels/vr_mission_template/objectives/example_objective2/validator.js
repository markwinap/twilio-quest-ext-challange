/*
In your validation code, you can require core Node.js modules,
third-party modules from npm, or your own code, just like a regular
Node.js module (since that's what this is!)
*/
const assert = require("assert");
const R = require("ramda");
const { isTwilio } = require("../lib/example_helper");

/*
Objective validators export a single function, which is passed a helper
object. The helper object contains information passed in from the game UI,
such as what the player entered into the fields in the hack interface.

The helper object also has "success" and "fail" callback functions - use
these functions to let the game (and the player) know whether or not they 
have completed the challenge as instructed.
*/
module.exports = async function (helper) {
  // We start by getting the user input from the helper
  const { answer1, answer2 } = helper.validationFields;

  // Next, you test the user input - fail fast if they get one of the
  // answers wrong, or some aspect is wrong! Don't provide too much
  // negative feedback at once, have the player iterate.
  try {
    assert.strictEqual('Jeff Lawson', String(answer1));
  } catch (e) {
    return helper.fail(`
      Lets check on Wikipedia
      https://en.wikipedia.org/wiki/Twilio
    `);
  }

  // You can use npm or core Node.js dependencies in your validators!
  try {
    assert.strictEqual('Ask Your Developer: How to Harness the Power of Software Developers and Win in the 21st Century', String(answer2));
  } catch (e) {
    return helper.fail(`
      Lets check the book pricing on Amazon
      https://www.amazon.com/dp/0063018292/ref=cm_sw_em_r_mt_dp_XZ59TR9WHCCHAC62VPPQ 
    `);
  }

  // The way we usually write validators is to fail fast, and then if we reach
  // the end, we know the user got all the answers right!
  helper.success(`
    Hooray! You did it!
  `);
};
