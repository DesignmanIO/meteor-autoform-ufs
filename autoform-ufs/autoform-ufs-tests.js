// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by autoform-ufs.js.
import { name as packageName } from "meteor/buishi:autoform-ufs";

// Write your tests here!
// Here is an example.
Tinytest.add('autoform-ufs - example', function (test) {
  test.equal(packageName, "autoform-ufs");
});
