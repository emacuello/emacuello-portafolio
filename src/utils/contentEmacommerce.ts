import type { ImageUrl, Proyect } from './interfaces';

export const EmacomerceImgs: ImageUrl[] = [
	{
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/olvpx1zqrseuay686uu3',
		alt: 'emacommerce api',
	},
	{
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/dxmgirxlyt4thvxav5bg',
		alt: 'Emacommerce request',
	},
	{
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/sqkxlp0bld3qashz0itn',
		alt: 'Emacommer Scheme',
	},
];

export const emacommerce: Proyect = {
	aboutProyect:
		'Emacommerce es una API Rest creada para el módulo 4 de Henry, es un ecommerce de productos tecnologicos, la api es solamente backend, es muy completa en ese sentido.',
	der: ' La tabla "users" almacena información sobre los usuarios, incluyendo su nombre, correo electrónico, rol, contraseña, teléfono, país, dirección y ciudad. La tabla "Orders" registra los pedidos realizados por los usuarios, incluyendo la fecha del pedido y el usuario asociado. Los detalles de cada pedido se almacenan en la tabla "orderDetails", que especifica los productos incluidos en cada pedido y su precio. La tabla "products" guarda información sobre los productos, como su nombre y categoría, mientras que la tabla "category" define las categorías de los productos. Las relaciones entre las tablas se establecen mediante claves primarias y foráneas, conectando usuarios con pedidos, pedidos con detalles del pedido, y productos con categorías.',
	funcionalityBack:
		'La aplicación está creada con NestJS y TypeScript. Cuenta con Autenticación y Authorización interna mediante JWT y el uso de roles, la contrasela es cifrada haciendo uso de Bcrypt. La base de datos utilizada es PostgreSQL con TypeORM. la API cuenta con almacenamiento de archivos en la nube con Cloudinary. Existe varificacion por roles, y todo se encuentra documentado con Swagger. Como extra, la aplicacion está totalmente dockerizada, haciendo uso de Docker-compose. Para su despliegue se utilizó Github Actions el cual el workflow es dockerizar la aplicacion y subirla a mi cuenta de Docker Hub en cada push a la rama principal. Para deploy se utilizó Render usando la imagen de docker, mientras que la base de datos se aloja en Railway.',
	funcionalityFront: '-',
	imgDER: {
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/tfj607iycn2mkqewjwpx',
		alt: 'DER de Emacommerce',
	},
	link: 'https://emacommerce.onrender.com/api',
	myRol: 'Fui el encargado de todo el desarollo de la aplicación, desde la DER hasta el despliegue de la API.',
	repository: 'https://github.com/emacuello/emacommerce',
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
			name: 'PostgreSQL',
			img: {
				url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
				alt: 'PostgreSQL',
			},
		},
		{
			name: 'Cloudinary',
			img: {
				url: 'https://appexchange.salesforce.com/image_host/300c831a-4271-44f2-91da-b48269175229.png',
				alt: 'Clodinary',
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
		{
			name: 'Railway',
			img: {
				url: 'https://railway.app/brand/logo-light.png',
				alt: 'Railway',
			},
		},
	],
	title: 'Emacommerce',
};
