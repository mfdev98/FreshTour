import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { HotelModule } from './hotel/hotel.module';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';
import { ViewModule } from './view/view.module';
import { FollowModule } from './follow/follow.module';
import { BoardArticleModule } from './board-article/board-article.module';
import { BookingModule } from './booking/booking.module';

@Module({
	imports: [
		MemberModule,
		AuthModule,
		HotelModule,
		BookingModule,
		BoardArticleModule,
		CommentModule,
		LikeModule,
		ViewModule,
		FollowModule,
	],
})
export class ComponentsModule {}
