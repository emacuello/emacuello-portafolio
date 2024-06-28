import type { ImageUrl, Proyect } from './interfaces';

export const EmaxPeluImgs: ImageUrl[] = [
	{
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/kybczcszg6hnowcfkpay',
		alt: 'Emax Peluqueria Home',
	},
	{
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/ljho4znc2dfqjhgfpkcf',
		alt: 'Emax Peluqueria Appointments Schedule',
	},
	{
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/scyhrhweswqhlqfmfbgy',
		alt: 'Emax Peluqueria Appointments',
	},
];

export const EmaxPelu: Proyect = {
	title: 'Emax Peluqueria',
	aboutProyect:
		'Emax Peluqueria es una aplicacion de turnos, fue creada para el módulo 3 de Henry. ¿Porqué una peluqueria? porque me desesperé buscando peluquerias por internet y al no encontrar ninguna por mi zona se me ocurrió que era buena idea desarollar esta aplicación.',
	der: 'La tabla "Usuario" contiene información sobre los usuarios del sistema, mientras que la tabla "Turno" almacena los detalles de los turnos asignados a los usuarios. La tabla "Credenciales" gestiona la autenticación y autorización de los usuarios en el sistema. Las relaciones entre las tablas se establecen mediante claves foráneas, permitiendo la conexión entre usuarios, turnos y credenciales para asegurar una gestión eficiente y segura de los turnos.',
	funcionalityBack:
		'El back está construido en Express.Js y Typescript. Cuenta con autenticación interna con cifrado de contraseña con Bcrypt y además se emite un JWT por usuario, hace uso de una base de datos de PostgreSQL en conjunto con TypeORM. La API está desplegada en Vercel y la base de datos se aloja en Railway.',
	imgDER: {
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/oounzuhggq34oumrd2kz',
		alt: 'DER de Emax Peluqueria',
	},
	link: 'https://emaxpeluqueria.vercel.app/',
	myRol: 'Fui el encargado de todo el desarollo de la aplicación, desde la DER hasta el despliegue de ambas aplicaciones.',
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
				url: 'https://banner2.cleanpng.com/20180410/dbq/kisspng-react-javascript-responsive-web-design-github-angu-github-5accac24ced243.4761515415233628528472.jpg',
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
	],
	funcionalityFront:
		'Aplicación construida con React/Vite y Javascript, contiene estado globales para mantener informacion de forma más simple, almacena tokens en LocalStorage, para los estilos se usó React-Bootstrap, además se usa AOS para algunas animaciones. La aplicacion se está deplegada en Vercel. ',
};
