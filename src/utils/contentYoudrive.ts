import type { ImageUrl, Proyect } from './interfaces';

export const youdriveImgs: ImageUrl[] = [
	{
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/vfzsbxdzekykpeawi6cx',
		alt: 'Home page de YouDrive',
	},
	{
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/sozcwdbcjpmcd2hupdsa',
		alt: 'Todas las publicaciones en YouDrive',
	},
	{
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/szv9pjmdsx7gxjd9jmov',
		alt: 'Una publicacion en You Drive',
	},
];

export const youdriveContent: Proyect = {
	der: 'Cada tabla está conectada por claves foráneas que indican las relaciones entre las diferentes entidades del sistema. Por ejemplo, un usuario puede tener múltiples alquileres, notificaciones, comentarios, direcciones, coches y reseñas. Un coche puede estar relacionado con múltiples alquileres, publicaciones y reseñas.',
	repository: 'https://github.com/maccari78/PM6-grupo3',
	aboutProyect:
		'YouDrive es una aplicación de renta de autos de persona a persona, creada para el proyecto final de Henry. Apuntamos a este nicho porque detectamos que en Argentina había muy pocas aplicaciones similares, y la mayoría de ellas eran centralizadas, por lo que nos pareció ideal hacerlo de este modo.',
	myRol: 'Formé parte del equipo de backend. Fuimos un equipo de 4 personas con roles bien definidos. Mi aporte al proyecto fue en la autenticación interna y externa, autorización, integración a la base de datos, pasarela de pagos, despliegue de ambas aplicaciones: el backend en AWS EC2 y el frontend en Vercel.',
	imgDER: {
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/lvtu44tzc81gjac2e2f7',
		alt: 'Diagrama entidad relación de YouDrive',
	},
	funcionalityBack:
		'La aplicación backend está hecha con NestJs y TypeScript. Cuenta con autenticación interna y externa: la interna consiste en usuarios registrados directamente en la base de datos con su contraseña cifrada con Bcrypt; la externa utiliza Passport con la estrategia de Google OAuth 2.0. Ambos tienen emisión de token JWT para su respectiva autorización. La aplicación cuenta con una base de datos PostgreSQL alojada en Railway. Se utiliza el ORM TypeORM para las consultas, pero también se hacen consultas manuales en caso de ser necesario. La pasarela de pago elegida fue Stripe por su fácil integración al proyecto. Para las publicaciones se utiliza un filtro de palabras para evitar su mal uso, al igual que las imágenes, que cuentan con un filtro de AWS Rekognition. Los archivos multimedia se almacenan en Cloudinary, siempre y cuando los filtros lo permitan. Los usuarios tienen roles definidos y, por lo tanto, el backend tiene un sistema de roles que protege los endpoints mediante guardianes. Además, se aplicó un Rate Limit usando Throttler para evitar peticiones maliciosas en algunos endpoints. La aplicación cuenta con un chat persona a persona utilizando WebSockets, y la librería de chat fue Socket.io por su fácil implementación en NestJS. Se utilizó Mailer para las notificaciones, que se envían al momento de registrarse, realizar una compra, cancelaciones e inicio de chats. También se usó Cron para las notificaciones de newsletter por correo. Las publicaciones cuentan con reviews y calificaciones que pueden hacer los usuarios. La API se encuentra documentada con Swagger. El backend se desplegó en AWS EC2, utilizando Nginx para los proxies y ZeroSSL para certificar el dominio.',
	funcionalityFront:
		'La aplicación frontend fue construida con Next.JS y TypeScript. Se usó Tailwind CSS para el estilo, en conjunto con Flowbite. Cuenta con alertas de SweetAlert, loaders personalizados y utiliza Socket.io client para conectar el chat. También cuenta con validaciones por roles, guarda los tokens en localStorage y utiliza librerías como Date picker. Además, tiene un chatbot personalizado para la página. La aplicación se desplegó en Vercel.',
	contentExtra:
		'Como extra, implementé un chat persona a persona, usé Amazon Rekognition para filtrar imágenes, una autorización robusta de la aplicación, hice un filtrado de palabras para las publicaciones y rate limit para evitar peticiones maliciosas.',
	link: 'https://youdrive.vercel.app/',
	title: 'YouDrive',
	extraImg: {
		url: 'https://res.cloudinary.com/dxrjz4ycj/image/upload/f_auto,q_auto/ud0vov7mzbcyw0b73tsf',
		alt: 'Captura del chat de YouDrive',
	},
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
			name: 'Next',
			img: {
				url: 'https://logowik.com/content/uploads/images/nextjs2106.logowik.com.webp',
				alt: 'Next',
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
			name: 'Socket.Io',
			img: {
				url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg',
				alt: 'Socket.Io',
			},
		},
		{
			name: 'AWS',
			img: {
				url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/AWS_Simple_Icons_AWS_Cloud.svg',
				alt: 'AWS',
			},
		},
	],
};
