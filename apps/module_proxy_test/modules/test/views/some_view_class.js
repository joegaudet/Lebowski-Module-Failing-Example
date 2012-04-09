ModuleProxyTest.SomeViewClass = SC.View.extend({

	layout: {top: 0, right: 0, bottom: 0, left: 0},
	childViews: ['labelView'],
	
	labelView: SC.LabelView.design({
		layout: {top: 0, right: 0, bottom: 0, left: 0}
	})
});