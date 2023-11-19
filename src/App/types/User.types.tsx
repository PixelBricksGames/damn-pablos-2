export type User = {
	cell: string;
	dob: {
		age: number;
		date: string;
	};
	email: string;
	gender: string;
	id: {
		name: string;
		value: string;
	};
	location: {
		city: string;
		coordinates: {
			latitude: string;
			longitude: string;
		};
		country: string;
		postcode: string | number;
		state: string;
		street: {
			number: number;
			name: string;
		};
		timezone: {
			offset: string;
			description: string;
		};
	};
	login: {
		uuid: string;
		username: string;
		password: string;
		salt: string;
		md5: string;
	};
	name: {
		title: string;
		first: string;
		last: string;
	};
	nat: string;
	phone: string;
	picture: {
		large: string;
		medium: string;
		thumbnail: string;
	};
	registered: {
		date: string;
		age: number;
	};
};
