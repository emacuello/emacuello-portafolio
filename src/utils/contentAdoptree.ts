import type { Devops, ImageUrl, IpreviewProyect, Proyect } from './interfaces';

export const adoptreeImgs: ImageUrl[] = [
	{
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/v1/adoptree%20portafolio%20assets/rqkmzm0exy9tdxhoq4m6',
		alt: 'Home page de adoptree',
	},
	{
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/v1/adoptree%20portafolio%20assets/hixyzsedfvq64equxdid',
		alt: 'Página de adopta un arbol en Adoptree',
	},
	{
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/v1/adoptree%20portafolio%20assets/jmbbjpyvkkvnqg2zp6ek',
		alt: 'Página Fincas en Adoptree',
	},
];

export const adoptreeContent: Proyect = {
	der: 'Este diagrama de entidad-relación modela una plataforma para la adopción de árboles, donde los usuarios pueden adoptar árboles gestionados por productores en fincas sostenibles. El sistema permite que los usuarios realicen adopciones, reciban productos relacionados con su adopción (como cosechas), y gestionen sus direcciones de envío. Además, se contempla la relación con los productores que cuidan los árboles y las fincas donde se encuentran. El sistema también maneja información detallada sobre las fincas, los árboles disponibles para adopción, las direcciones de envío de los usuarios, y las cosechas que se envían a los usuarios. Las interrelaciones entre las entidades permiten un seguimiento completo desde la adopción de un árbol hasta la entrega de productos relacionados con él.',
	repository: 'https://github.com/emacuello/i003-adoptree-front',
	aboutProyect:
		'Adoptree es una plataforma que conecta a los consumidores directamente con los productores.Adoptree permite a los usuarios "adoptar un árbol" por una cuota anual, recibiendo una parte de la cosecha directamente en su hogar, como naranjas, limones o mandarinas, cultivadas de manera sostenible. Fue creada para el entrenamiento de Igrowker',
	myRol: 'Fui el unico miembro y lider del equipo de DevOps, desarrollé las pipelines de CI/CD para que el equipo de desarrollo pueda trabajar sin problemas',
	imgDER: {
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/v1/DER/px08botuffnxwhrv5x8o',
		alt: 'Diagrama entidad relación de Adoptree',
	},
	funcionalityBack:
		'La aplicación Backend usa como lenguaje TypeScript y el Framework de Nestjs, la base de datos de PostgreSql, Prisma como ORM, OAuth como login externo y Mercado Pago como pasarela de pago',
	funcionalityFront:
		'La aplicación frontend fue construida con React.Js, TypeScript y Vite. Se usó Tailwind CSS para los estilos. También se integró con Firebase para las notificaciones push, y con OAuth como Login externo.',
	link: 'https://adoptree.emacuello.dev/',
	contentExtra:
		'Mi aporte fue la creación de las Pipelines de CI/CD. Las cuales fueron creadas en ambos repositorios de GitHub, con la herramienta de Github Actions, también realicé el despliegue de la aplicación, tanto en entorno de Desarrollo como de Producción, además de crear los modulos/componentes necesarios en ambos repositorios para poder implementar las metricas necesarias para el proyecto.',
	extraImg: {
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/v1/adoptree%20portafolio%20assets/p1jj0jhyevuxiwajesyt',
		alt: 'Issue creada automáticamente en Github',
	},
	title: 'Adoptree',
	skills: [
		{
			name: 'NestJs',
			img: {
				url: 'https://nestjs.com/logo-small-gradient.76616405.svg',
				alt: 'NestJs',
			},
		},
		{
			name: 'TypeScript',
			img: {
				url: 'https://www.svgrepo.com/show/374144/typescript.svg',
				alt: 'TypeScript',
			},
		},
		{
			name: 'React.Js',
			img: {
				url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png',
				alt: 'React.Js',
			},
		},
		{
			name: 'Tailwind',
			img: {
				url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
				alt: 'Tailwind',
			},
		},
		{
			name: 'PostgreSQL',
			img: {
				url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
				alt: 'PostgreSQL',
			},
		},
		{
			name: 'Vite',
			img: {
				url: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
				alt: 'Vite',
			},
		},
		{
			name: 'Docker',
			img: {
				url: 'https://www.svgrepo.com/show/331370/docker.svg',
				alt: 'Docker',
			},
		},
		{
			name: 'Github Actions',
			img: {
				url: 'https://icon.icepanel.io/Technology/svg/GitHub-Actions.svg',
				alt: 'Github Actions',
			},
		},
	],
};

export const contentPreviewAdoptree: IpreviewProyect = {
	enviroment: {
		context: 'Igrowker Training',
		img: {
			url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/rvbbvy3zvbplnbz0hbzu',
			alt: 'Igrowker',
		},
	},
	name: 'Adoptree 🌳',
	preview:
		'Es una plataforma que conecta a los consumidores directamente con los productores. Adoptree permite a los usuarios "adoptar un árbol" por una cuota anual, recibiendo una parte de la cosecha directamente en su hogar, como naranjas, limones o mandarinas, cultivadas de manera sostenible. Fue creada en Nestjs para el Backend y React para el Frontend.',
	img: {
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/v1/adoptree%20portafolio%20assets/rqkmzm0exy9tdxhoq4m6',
		alt: 'Preview de Adoptree',
	},
	author: {
		name: 'Equipo Adoptree',
		img: {
			url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/v1/adoptree/f0tf8spk8vaxvzzetkr4',
			alt: 'Adoptree avatar',
		},
		date: 'Octubre 2024',
		link: 'https://github.com/emacuello/i003-adoptree-front',
	},
};

export const adoptreeDevops: Devops = {
	img: {
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/v1/adoptree%20portafolio%20assets/v4x7yc9of3nebgzg97wg',
		alt: 'Dashboard de Grafana con metricas de Loki',
	},
	pipelines: {
		name: 'Pipelines de CI/CD',
		resumen:
			'Las pipelines se dividen en dos disparadores: Push y Pull Request. En ambos repositorios, se ejecutan las pipelines de Build, Lint, Test y Deploy, separadas en los entornos de producción y desarrollo. La herramienta utilizada para ejecutar las pipelines es GitHub Actions.',
		content: [
			{
				trigger: 'Push',
				environment: 'Desarrollo y Producción',
				name: 'Build, Lint',
				content:
					'Las pipelines de Build y Lint se ejecutan en paralelo en ambos repositorios de la aplicación y en cualquier rama de GitHub cuando se realiza un push. En caso de error, se crean issues en el repositorio correspondiente, asignados al autor correspondiente.',
				img: {
					url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/v1/adoptree%20portafolio%20assets/p1jj0jhyevuxiwajesyt',
					alt: 'Issue creada automáticamente en Github',
				},
			},
			{
				trigger: 'Pull Request',
				environment: 'Desarrollo y Producción',
				name: 'OnPr, Build, Lint y Test/Preview',
				content:
					'La pipeline OnPr se ejecuta en las Pull Requests que se crean en ambos repositorios de la aplicación, tanto en los entornos de producción (main) como de desarrollo (develop). En el repositorio del Backend, se ejecutan las tareas de Build, Lint y Tests unitarios, y en el repositorio del Frontend se ejecutan Build, Lint y Previews de la PR correspondiente. En caso de error, se crean issues en el repositorio correspondiente, asignados al autor correspondiente, y además se generan comentarios en la PR tanto para indicar un error como para un OK.',
				img: {
					url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/v1/adoptree%20portafolio%20assets/rwbin8sbf4jeidaadvlm',
					alt: 'Comentario creado automáticamente en una Pull Request de Github',
				},
			},
			{
				trigger: 'Push/Pull Request',
				environment: 'Desarrollo',
				name: 'Deploy to Development',
				content:
					'Para el despliegue a Desarrollo se utilizaron diferentes herramientas para cada aplicación, pero antes del despliegue se realizan varias tareas. En el caso del Backend, se ejecutan las tareas de Build, Lint y Tests unitarios. Después de verificarse, se realiza un Build de la aplicación con Docker y se sube su imagen a DockerHub, para luego ejecutar un Deploy Hook de Render para su despliegue correspondiente. Para el Frontend, se ejecutan las tareas de Build y Lint. Si estas verificaciones son aprobadas, se realiza un nuevo build de la aplicación y luego se sube su resultado a Netlify. Si todo es correcto, se crea una Preview de la aplicación en Netlify, la cual no se fusiona con la principal hasta que se apruebe la Pull Request correspondiente. En caso de errores, se crean issues en el repositorio correspondiente, asignados al autor correspondiente, y además se generan comentarios en la PR (Frontend) tanto para indicar un error como para un OK.',
				img: {
					url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/v1/adoptree%20portafolio%20assets/s5tmsupcqmr8viyc9omk',
					alt: 'Codigo de la aplicación en Github',
				},
			},
			{
				trigger: 'Push',
				environment: 'Producción',
				name: 'Deploy to Production',
				content:
					'Para el despliegue a producción, las pipelines se ejecutan cuando se hace merge a la rama Main de ambos repositorios. En el caso del Backend, se ejecutan las tareas de Build, Lint y Tests unitarios. Al pasar correctamente estas pruebas, se realiza un Build de la aplicación con Docker, se sube su imagen a DockerHub y finalmente se accede a la máquina virtual mediante comandos SSH proporcionados por una Action, que ingresa a la carpeta correspondiente y actualiza la aplicación con Docker Compose. Para el Frontend, se ejecutan las tareas de Build y Lint. Si se aprueban estas verificaciones, se despliega la aplicación en Vercel. En caso de errores, se crean issues en el repositorio correspondiente, asignados al autor correspondiente.',
				img: {
					url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/v1/adoptree%20portafolio%20assets/qzypm14kyupzbt1pcjng',
					alt: 'Docker compose en Github',
				},
			},
		],
	},
	deployment: {
		title: 'Deployment',
		name: 'Plataformas de Despliegue',
		resumen:
			'La aplicación se dividió en dos entornos, desarrollo y producción, las plataformas para el FrontEnd son: Vercel y Netlify, y las para el Backend son: Render y Oracle Cloud Infrastructure.',
		content: [
			{
				envirment: 'Desarrollo',
				tittle: 'Deploy del Fontend a desarrollo: Netlify',
				content:
					'Para el deploy a desarrollo se utilizó Netlify. Netlify tiene una función de previews que permite ver la aplicación en vivo antes de que se haga merge a la rama principal. Esta función no es exclusiva de esta plataforma, pero es una de las pocas que la ofrecen gratuitamente.',
			},
			{
				envirment: 'Desarrollo',
				tittle: 'Deploy del Backend a desarrollo: Render',
				content:
					'Para el deploy a desarrollo se utilizó Render. Render es una plataforma con una fácil integración con Docker, que es la herramienta utilizada por el backend y por su Deploy Hook, lo cual es una característica muy útil para el despliegue de aplicaciones.',
			},
			{
				envirment: 'Producción',
				tittle: 'Deploy del Frontend a producción: Vercel',
				content:
					'Para el deploy a producción se utilizó Vercel. La elección de Vercel se debió a mi familiaridad con la plataforma y a su función de analíticas, que permite ver las métricas de la aplicación en tiempo real.',
			},
			{
				envirment: 'Producción',
				tittle: 'Deploy del Backend a producción: Oracle Cloud Infrastructure',
				content:
					'Para el deploy a producción se utilizó una máquina virtual en Oracle Cloud Infrastructure. Para el entorno de producción, se utilizó Docker Compose, al cual se le integraron varios servicios, que son: Nginx, Prometheus, Grafana, Loki, Promtail, cAdvisor y Node Exporter.',
			},
		],
	},
	metrics: {
		title: 'Métricas de las aplicaciones',
		resumen:
			'Para las métricas del Backend se utilizaron diferentes servicios como Prometheus, Grafana, Loki, Promtail, cAdvisor y Node Exporter, para el Frontend se utilizó Vercel Analytics.',
		content: [
			{
				img: {
					url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/v1/adoptree%20portafolio%20assets/ozxyddeqfopgj8rsq99h',
					alt: 'Prometheus',
				},
				title: 'Node Exporter',
				name: 'Dashboard de Node Exporter en Grafana',
				content:
					'Node Exporter es un agente que colecta y expone métricas a nivel de sistema',
			},
			{
				img: {
					url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/v1/adoptree%20portafolio%20assets/cvgxab8uiwpjaabghruq',
					alt: 'Dashboard de Grafana con metricas de Loki',
				},
				title: 'Loki',
				name: 'Dashboard de Loki en Grafana',
				content:
					'Loki es un agente para recolectar, organizar y analizar datos de logs, y es utilizado en Grafana para visualizar los datos de los logs',
			},
			{
				img: {
					url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/v1/adoptree%20portafolio%20assets/a6ianc0y6zw1bltcamml',
					alt: 'Vercel Analytics Dashboard',
				},
				title: 'Vercel Analytics',
				name: 'Dashboard de Vercel Analytics',
				content:
					'Con Vercel Analytics se pueden ver la cantidad de visitas, el tráfico de páginas, el tráfico de usuarios y más.',
			},
			{
				img: {
					url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/v1/adoptree%20portafolio%20assets/ongydersp6xxwlhiam20',
					alt: 'Dashboard de Cadvisor en Grafana',
				},
				title: 'cAdvisor',
				name: 'Dashboard de cAdvisor en Grafana',
				content:
					'cAdvisor es un agente que colecta y expone métricas de Docker.',
			},
			{
				img: {
					url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/v1/adoptree%20portafolio%20assets/tlkzwnrurftxvupozhlk',
					alt: 'Dashboard de métricas del backend de Adoptree recolectadas con Prometheus en Grafana',
				},
				title: 'Prometheus',
				name: 'Dashboard de Adoptree en Grafana',
				content:
					'Con Prometheus se pueden ver las métricas de Adoptree como las Requests HTTP',
			},
		],
	},
};
