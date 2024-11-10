import { registerEnumType } from '@nestjs/graphql';

export enum HotelType {
	HOTEL = 'HOTEL',
	MOTEL = 'MOTEL',
	RESORT = 'RESORT ',
	GUESTHOUSE = 'GUESTHOUSE',
	CAMPING = 'CAMPING',
}
registerEnumType(HotelType, {
	name: 'HotelType',
});

export enum HotelStatus {
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}
registerEnumType(HotelStatus, {
	name: 'HotelStatus',
});

export enum Location {
	ASIA = 'ASIA',
	EUROPE = 'EUROPE',
	NORTH_AMERICA = 'NORTH_AMERICA',
	SOUTH_KOREA = 'SOUTH_KOREA',
	JAPAN = 'JAPAN',
	DUBAI = 'DUBAI',
	MIDDLE_EAST = 'MIDDLE_EAST',
}
registerEnumType(Location, {
	name: 'Location',
});
