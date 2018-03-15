/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"energymeterreading/test/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"energymeterreading/test/test/integration/pages/App",
	"energymeterreading/test/test/integration/pages/Browser",
	"energymeterreading/test/test/integration/pages/Master",
	"energymeterreading/test/test/integration/pages/Detail",
	"energymeterreading/test/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "energymeterreading.test.view."
	});

	sap.ui.require([
		"energymeterreading/test/test/integration/NavigationJourneyPhone",
		"energymeterreading/test/test/integration/NotFoundJourneyPhone",
		"energymeterreading/test/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});