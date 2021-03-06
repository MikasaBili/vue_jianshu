
export default function (router) {
	router.map({
		'/':{
			name:'home',
			component:require('./components/Main.vue'),
			subRoutes:{
				'/':{
					name:'mainfind',
					component:require('./components/MainFind.vue')
				},
				'/mainchoice':{
					name:'mainchoice',
					component:require('./components/MainChoice.vue')
				}
			}
		},
		'/demo':{
			name:'demo',
			component:require('./components/Demo.vue')
		},
		'/special':{
			name:'special',
			component:require('./components/Special.vue')
		},
		'/loading':{
			name:'loading',
			component:require('./components/Loading.vue')
		}
	})
}