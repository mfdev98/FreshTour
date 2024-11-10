import { registerEnumType } from '@nestjs/graphql';

export enum Region {
	ASIA = 'ASIA',
	EUROPE = 'EUROPE',
	NORTH_AMERICA = 'NORTH_AMERICA',
	SOUTH_KOREA = 'SOUTH_KOREA',
	JAPAN = 'JAPAN',
	DUBAI = 'DUBAI',
	MIDDLE_EAST = 'MIDDLE_EAST',
}
registerEnumType(Region, {
	name: 'Region',
});

export enum BookingStatus {
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}
registerEnumType(BookingStatus, {
	name: 'BookingStatus',
});

export enum BookingStyle {
  ADVENTURE = 'ADVENTURE',
  RELAXATION = 'RELAXATION',
  CULTURAL = 'CULTURAL',
  ECO_TOURISM = 'ECO_TOURISM',
  CRUISE = 'CRUISE',
  FAMILY = 'FAMILY',
  SOLO = 'SOLO',
  HONEYMOON = 'HONEYMOON',
}
registerEnumType(BookingStyle, {
	name: 'BookingStyle',
});
