skel.init(
	{
		prefix: '/assets/css/style',
		resetCSS: true,
		boxModel: 'border',
		grid:
		{
			gutters: 50
		},
		breakpoints:
		{
			'mobile':
			{
				range: '-520',
				lockViewport: true,
				containers: 'fluid',
				grid: {
					collapse: true,
					gutters: 10
				}
			},
			'desktop':
			{
				range: '520-',
				containers: 1024
			}
		}
	},
	{
		panels:
		{
			panels:
			{
				navPanel:
				{
					breakpoints: 'mobile',
					position: 'left',
					style: 'reveal',
					size: '80%',
					html: '<div data-action="navList" data-args="nav"></div>'
				}
			},
			overlays:
			{
				titleBar:
				{
					breakpoints: 'mobile',
					position: 'top-left',
					height: 44,
					width: '100%',
					html: '<span class="toggle" data-action="togglePanel" data-args="navPanel"></span><span class="title" data-action="" data-args="nav"></span>'
				}
			}
		}
	}
);