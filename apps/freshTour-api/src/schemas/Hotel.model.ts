import { Schema } from 'mongoose';
import { HotelStatus, HotelType, Location } from '../libs/enums/hotel.enum';

const HotelSchema = new Schema(
	{
		hotelType: {
			type: String,
			enum: HotelType,
			required: true,
		},

		hotelStatus: {
			type: String,
			enum: HotelStatus,
			default: HotelStatus.ACTIVE,
		},

		hotelLocation: {
			type: String,
			enum: Location,
			required: true,
		},

		hotelAddress: {
			type: String,
			required: true,
		},

		hotelTitle: {
			type: String,
			required: true,
		},

		hotelPrice: {
			type: Number,
			required: true,
		},

		hotelSquare: {
			type: Number,
			required: true,
		},

		hotelBeds: {
			type: Number,
			required: true,
		},

		hotelRooms: {
			type: Number,
			required: true,
		},

		hotelViews: {
			type: Number,
			default: 0,
		},

		hotelLikes: {
			type: Number,
			default: 0,
		},

		hotelComments: {
			type: Number,
			default: 0,
		},

		hotelRank: {
			type: Number,
			default: 0,
		},

		hotelImages: {
			type: [String],
			required: true,
		},

		hotelDesc: {
			type: String,
		},

		hotelBarter: {
			type: Boolean,
			default: false,
		},

		hotelRent: {
			type: Boolean,
			default: false,
		},

		memberId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'Member',
		},

		soldAt: {
			type: Date,
		},

		deletedAt: {
			type: Date,
		},

		constructedAt: {
			type: Date,
		},
	},
	{ timestamps: true, collection: 'hotels' },
);

HotelSchema.index({ hotelType: 1, hotelLocation: 1, hotelTitle: 1, hotelPrice: 1 }, { unique: true });

export default HotelSchema;
