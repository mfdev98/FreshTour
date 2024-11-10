import { Schema } from 'mongoose';
import { Region, BookingStatus, BookingStyle } from '../libs/enums/booking.enum';

const BookingSchema = new Schema(
	{
		region: {
			type: String,
			enum: Region,
			required: true,
		},

		bookingStatus: {
			type: String,
			enum: BookingStatus,
			default: BookingStatus.ACTIVE,
		},

		bookingStyle: {
			type: String,
			enum: BookingStyle,
			required: true,
		},

		bookingTitle: {
			type: String,
			required: true,
		},

		bookingPrice: {
			type: Number,
			required: true,
		},

		bookingSquare: {
			type: Number,
			required: true,
		},

		bookingBeds: {
			type: Number,
			required: true,
		},

		bookingRooms: {
			type: Number,
			required: true,
		},

		bookingViews: {
			type: Number,
			default: 0,
		},

		bookingLikes: {
			type: Number,
			default: 0,
		},

		bookingComments: {
			type: Number,
			default: 0,
		},

		bookingRank: {
			type: Number,
			default: 0,
		},

		bookingImages: {
			type: [String],
			required: true,
		},

		bookingDesc: {
			type: String,
		},

		bookingBarter: {
			type: Boolean,
			default: false,
		},

		bookingRent: {
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
	{ timestamps: true, collection: 'bookings' },
);

BookingSchema.index({ region: 1, bookingStyle: 1, bookingTitle: 1, bookingPrice: 1 }, { unique: true });

export default BookingSchema;
