ModuleProxyTest.statechart = SC.Statechart.extend({

    rootState: SC.State.design({
        initialSubstate: "stateC",

		stateC: SC.State.design(),

        stateA: SC.State.design({
        	representRoute: "a",
			
			enterStateByRoute: function(){
				ModuleProxyTest.mainPage.setPath('mainPane.labelView.value', 'State A');
			},
			
			enterState: function(){
				SC.routes.set('location', "a")
				ModuleProxyTest.mainPage.setPath('mainPane.labelView.value', 'State A');
			}
        }),

        stateB: SC.State.design({
        	representRoute: "b",
			
			enterStateByRoute: function(){
				this.updateState();
			},
			
			enterState: function(){
				SC.routes.set('location', "b")
				this.updateState();
			},
			
			updateState: function(){
				SC.Module.loadModule('module_proxy_test/test', this, this.moduleLoaded);
			},
			
			moduleLoaded: function(){
				ModuleProxyTest.mainPage.setPath('mainPane.labelView.value', 'State B');
				ModuleProxyTest.testView = ModuleProxyTest.SomeViewClass.create({});
				console.log(ModuleProxyTest.SomeViewClass);
				ModuleProxyTest.set('moduleLoaded', YES);
			}
        })
    }),

}).create();
