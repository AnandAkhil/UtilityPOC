/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 REP_20171226092336Results in the list

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
		"energymeterreading/test/test/integration/MasterJourney",
		"energymeterreading/test/test/integration/NavigationJourney",
		"energymeterreading/test/test/integration/NotFoundJourney",
		"energymeterreading/test/test/integration/BusyJourney",
		"energymeterreading/test/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});