export interface ImageUrl {
	url: string;
	alt: string;
}

interface Tecnologias {
	name: string;
	img?: ImageUrl;
}

export interface Proyect {
	title: string;
	link: string;
	aboutProyect: string;
	myRol: string;
	imgDER: ImageUrl;
	contentExtra?: string;
	funcionalityBack: string;
	funcionalityFront?: string;
	repository: string;
	der: string;
	extraImg?: ImageUrl;
	skills: Tecnologias[];
}
