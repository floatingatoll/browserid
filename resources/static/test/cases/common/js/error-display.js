/*jshint browser:true, jquery: true, forin: true, laxbreak:true */
/*globals BrowserID: true, _:true */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
  "use strict";

  var bid = BrowserID;

  module("shared/error-display", {
    setup: function() {
        $("#error").html("<div class='contents'><a href='#' id='openMoreInfo'>Open</a><div id='moreInfo' style='display:none'>Expanded Info</div></div>");
    },
    teardown: function() {
      $("#error").hide();
    }
  });

  asyncTest("can initialize and open the error display", function openErrorDisplay() {
    bid.DOM.bindEvent(window, "resize", resized_once);

    $("#error").show();
    bid.ErrorDisplay.start("#error");
    bid.ErrorDisplay.open();

    function resized_once(event) {
      bid.DOM.unbindEvent(window, "resize", resized_once);
      ok($("#moreInfo").is(":visible"), "expanded info is visible");
      start();
    }

  });


}());
