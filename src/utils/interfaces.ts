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

export interface Microservice extends Proyect {
	architecture: ImageUrl;
	apiGateway: {
		repository: string;
		content: string;
	};
	microsercie1?: Pms;
	microsercie2?: Pms;
	microsercie3?: Pms;
	microsercie4?: Pms;
}

type Pms = {
	deploy?: string;
	name?: string;
	content: string;
	framework: string;
	image: ImageUrl;
	repository: string;
};

export interface IpreviewProyect {
	enviroment: {
		context: string;
		img?: ImageUrl;
	};
	name: string;
	preview: string;
	img: ImageUrl;
	author: {
		name: string;
		img: ImageUrl;
		date: string;
		link: string;
	};
}
