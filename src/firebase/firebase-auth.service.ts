import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseAuthService {
  async verifyToken(token: string): Promise<admin.auth.DecodedIdToken> {
    try {
      return await admin.auth().verifyIdToken(token);
    } catch (error) {
      throw new UnauthorizedException('Invalid Firebase token');
    }
  }
  async createCustomToken(uid: string, customClaims?: Record<string, any>): Promise<string> {
    try {
      return await admin.auth().createCustomToken(uid, customClaims || {});
    } catch (error) {
      throw new Error(`Failed to create custom token: ${error.message}`);
    }
  }
  async createUser(
    email: string,
    emailVerified: boolean,
    phoneNumber?: string,
    password?: string,
    displayName?: string,
    photoURL?: string,
    disabled: boolean = false,
  ): Promise<admin.auth.UserRecord> {
    try {
      return await admin.auth().createUser({
        email,
        emailVerified,
        phoneNumber,
        password: password,
        displayName,
        photoURL,
        disabled,
      });
    } catch (error) {
      throw new Error(`Failed to create user: ${error.message}`);
    }
  }
}
