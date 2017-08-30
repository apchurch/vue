Vue.component('jumbo', {
	template: `
		<div class="jumbotron">
  <h1>{{name}}</h1>
  <p>{{para}}</p>
  <p><a class="btn btn-primary btn-lg" href="https://google.com" role="button">{{site}}</a></p>
</div>`,
  		

	
	props: ['name', 'para', 'site'],

	})


var mainVm = new Vue ({
	el: '#app',
	data: {
		jumbos: [
			{
		
			name: 'Welcome to my webpage!',
			para: 'Here is a paragraph',
			site: 'Google',
		},
		{
			name: 'Jumbotron',
			para: 'Click the button below to learn more',
			site: 'Twitter',
		},
		{
			name: 'Another Jumbotron',
			para: 'Or this button',
			site: 'Github',
		}
		]
	}
})
// $( document ).ready(function() {
//     console.log( "ready!" );
// });
// $( window ).on( "load", function() {
//         console.log( "window loaded" );
//  }); 


