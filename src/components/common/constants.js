import $ from "jquery";

/**
 * Reads a text file with the given path and returns an array with each line as an element
 * @param {String} filePath the path to the text file we want to read
 */
export let readFile = function(filePath) {
  var lineArray = [];

  $.ajax({
    url: filePath,
    async: false,
    dataType: "text",
    success: function(data) {
      var lines = data.split("\n");
      lineArray = lines;
    }
  });

  return lineArray;
};
