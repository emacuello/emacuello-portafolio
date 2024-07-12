import type { ImageUrl, Microservice, Proyect } from './interfaces';

export const EmaxPeluImgs: ImageUrl[] = [
	{
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/kybczcszg6hnowcfkpay',
		alt: 'Emax Peluqueria Home',
	},
	{
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/kgtiqijl39wp6blgtww4',
		alt: 'Emax Peluqueria Appointments Schedule',
	},
	{
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/nvqnqlhzvmtxm3d78dry',
		alt: 'Emax Peluqueria Appointments',
	},
];

export const EmaxPelu: Microservice = {
	title: 'Emax Peluqueria',
	aboutProyect:
		'Emax Peluqueria es una aplicacion de turnos, fue creada para el módulo 3 de Henry. ¿Porqué una peluqueria? porque me desesperé buscando peluquerias por internet y al no encontrar ninguna por mi zona se me ocurrió que era buena idea desarollar esta aplicación. La aplicacón, además de ser un turnero, tambien cuenta con Ecommerce integrado y un dashboard de usuario',
	der: 'La tabla "Usuario" contiene información sobre los usuarios del sistema, mientras que la tabla "Turno" almacena los detalles de los turnos asignados a los usuarios. La tabla "Credenciales" gestiona la autenticación y autorización de los usuarios en el sistema. Las relaciones entre las tablas se establecen mediante claves foráneas, permitiendo la conexión entre usuarios, turnos y credenciales para asegurar una gestión eficiente y segura de los turnos.',
	funcionalityBack:
		'El back está construido bajo la arquitectura de microservicios, el cual usa a node como entorno de ejecución. Contiene un total de 4 microservicios y un Api Gateway el cual es el punto de entrada de la aplicación backend. El Api Gateway está construido en NestJS y Typescript, se comunica directamente con 3 de los 4 microservicios, lo hace mediante peticiones HTTP y publicando eventos en Redis, además, también cuenta con un modulo de Payment que es el encargado de procesar los pagos del Ecommerce, sus datos son alojados en una base de datos PostgreSQL en conjunto con TypeORM. El Api Gateway se encuentra alojado en Vercel y su base de datos se aloja en Supabase. El resto de los microservicios se explica más adelante.',
	imgDER: {
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/oounzuhggq34oumrd2kz',
		alt: 'DER de Emax Peluqueria',
	},
	link: 'https://emaxpeluqueria.vercel.app/',
	myRol: 'Fui el encargado de todo el desarollo de la aplicación, desde la DER hasta el despliegue de todas las aplicaciones.',
	repository: 'https://github.com/emacuello/emaxpeluqueria',
	skills: [
		{
			name: 'Express.Js',
			img: {
				url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZa5Y5K3cnuBpj3HBd2DeD5cde93_rl0fXA&s',
				alt: 'Express.Js',
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
			name: 'JWT',
			img: {
				url: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*og_vgEc096UAqtExpW49Ug.jpeg',
				alt: 'Jason Web Token',
			},
		},
		{
			name: 'Bcrypt',
			img: {
				url: 'https://repository-images.githubusercontent.com/139898859/9617c480-81c2-11ea-94fc-322231ead1f0',
				alt: 'Bcrypt',
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
			name: 'React-Bootstrap',
			img: {
				url: 'https://icon.icepanel.io/Technology/svg/React-Bootstrap.svg',
				alt: 'React-Bootstrap',
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
			name: 'Redux',
			img: {
				url: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png',
				alt: 'Redux',
			},
		},
		{
			name: 'Javascript',
			img: {
				url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
				alt: 'Javascript',
			},
		},
		{
			name: 'MongoDB',
			img: {
				url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/hyaoi1luvqzvyufmpumk',
				alt: 'MongoDB',
			},
		},
		{
			name: 'Redis',
			img: {
				url: 'https://redis.io/wp-content/uploads/2024/04/Logotype.svg?auto=webp&quality=85,75&width=120',
				alt: 'Redis',
			},
		},
		{
			name: 'Nodemailer',
			img: {
				url: 'https://nodemailer.com/nm_logo_200x136.png',
				alt: 'Nodemailer',
			},
		},
	],
	funcionalityFront:
		'Aplicación construida con React/Vite y Javascript, contiene estado globales haciendo uso de Redux para poder contener la información así evitando peticiones recurrentes al backend, almacena sus tokens en LocalStorage, para los estilos se usó React-Bootstrap, además se usa AOS para algunas animaciones. La aplicacion se está deplegada en Vercel.',
	architecture: {
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/ma7ybaiurrv9dtxynmbp',
		alt: 'Imgen explicativa de los microservicios de Emax Peluqueria, creado con Excalidraw',
	},
	apiGateway: {
		content:
			'El Api Gateway, además de comunicarse con los distintos microservicios y almacenar la información de los pagos, también se encarga del procesamiento de la autenticación con Google y de emitir los tokens para estos usuarios. El proceso de pago se realiza mediante Stripe. Al ser el punto de comunicación con el frontend, se encarga de todas las validaciones de los datos entrantes con ClassValidator y ClassTransformer, también tiene implementado rate limit en algunas rutas para evitar el abuso en las peticiones no deseadas, además se encarga de subir las imagenes de perfil de los usuario usando Cloudinary. Está construido con NestJS y alojado en Vercel.',
		repository: 'https://github.com/emacuello/emax-peluqueria-gateway',
	},
	microsercie1: {
		framework: 'Express.Js',
		deploy: 'Vercel',
		name: 'Microservicio de autenticación, usuarios y turnos',
		content:
			'El microservicio está creado en Express.Js con TypeScript. Se encarga de la creacion del usuario, sus credenciales y del crud de los turnos hecho por el usuario, para almacenar los datos se usa PostgreSQL y TypeORM, las tablas tienen relaciones entre ellas. En el registro interno del usuario se usa Bcrypt para encriptar la contraseña, para el inicio de sesión se usa JWT. Se comunica con el Api Gateway mediante peticiones HTTP. El microservicio se aloja en Vercel y su base de datos se aloja en Railway.',
		image: {
			url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/oounzuhggq34oumrd2kz',
			alt: 'DER de Emax Peluqueria',
		},
		repository:
			'https://github.com/emacuello/emaxpeluqueria/tree/main/back',
	},
	microsercie2: {
		framework: 'NestJs',
		deploy: 'Render',
		name: 'Microservicio de Productos',
		content:
			'El microservicio está creado en NestJS con TypeScript. Se encarga de la creación de productos y responde a las llamadas del Api Gateway mediante mensajes que recibe por Redis. Para almacenar las fotos de los productos utiliza Cloudinary, y para almacenar los datos se usa MongoDB y Mongoose. Solo los administradores pueden crear y modificar productos. La aplicación está dockerizada para su despliegue en Render mediante su imagen de Docker, la cual se actualiza en cada push a la rama principal del repositorio de GitHub con el uso de GitHub Actions. La base de datos está en MongoDB Atlas.',
		image: {
			url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/q3br3dupxykmtwckvvh5',
			alt: 'Imagen de DockerHub de Emax Peluqueria Shop',
		},
		repository: 'https://github.com/emacuello/shop-emaxpeluqueria',
	},
	microsercie3: {
		framework: 'NestJs',
		deploy: 'AWS EC2',
		name: 'Microservicio de Emails',
		content:
			'El microservicio está creado en NestJs con TypeScript. Se encarga del envio de emails con sus respectivos templates. El ms recibe eventos emitidos por redis para poder enviar los correos, para el envio de emails se usa Nodemailer y para los templates se usa Handlebars. Para el autenticación de NodeMailer se usa Oauth2, y para obtención del AccesToken se usa una peticion HTTP a otro microservicio. El microservicio se aloja en una instancia de AWS EC2, con el AMI de Amazon Linux 2.',
		image: {
			url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/qzplkmegxdqjeht30wff',
			alt: 'Captura de pantalla del emails de compra exitosa',
		},
		repository: 'https://github.com/emacuello/mailms',
	},
	microsercie4: {
		framework: 'Express.Js',
		deploy: 'Vercel',
		name: 'Microservicio de Generación de AccesTokens',
		content:
			'El microservicio está creado en Express.js con JavaScript. Se encarga de la creación de Access Tokens cuando lo solicita el microservicio de envío de emails. Este microservicio se creó debido a problemas al desplegar el microservicio de emails, ya que la dependencia utilizada para la obtención de los Access Tokens, googleapis, no funcionaba correctamente en NestJS. Para levantar el servidor, llegaba a consumir más de 2GB de RAM, lo cual no era un problema en local, pero en un entorno de producción, como una imagen de Docker o en AWS EC2, era imposible de construir debido a los recursos limitados. Por esta razón, decidí separar la obtención del Access Token en otro microservicio y, para que fuera más ligero, decidí hacerlo en Express con JavaScript. Esta API está desplegada en Vercel.',
		image: {
			url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/pcd74wamqfho2zzax4xd',
			alt: 'Diagrama del flujo de obtención de accesstoken',
		},
		repository: 'https://github.com/emacuello/apioauthtoken',
	},
};
