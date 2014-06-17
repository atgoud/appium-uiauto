/* global autoAcceptAlerts*/

var alerts;

(function () {
  alerts = {};
  alerts.configure = function () {
    UIATarget.onAlert = function (alert) {
      if (alert.name() && alert.name().indexOf("attempting to open a pop-up") !== -1 && alert.buttons().length > 0) {
        alert.defaultButton().tap();
      } else if (autoAcceptAlerts && alert.buttons().length > 0) {
        alert.defaultButton().tap();
      }
      return true;
    };
  };
})();