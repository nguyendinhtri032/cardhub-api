import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { FirebaseAuthService } from './firebase/firebase-auth.service';
import { FirebaseAuthModule } from './firebase/firebase-auth.module';
@Module({
  imports: [UserModule, FirebaseAuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, UserService, FirebaseAuthService],
})
export class AppModule {}
