export interface LoginReq {
  email: string;
  password: string;
}

export interface ResetPasswordReq {
  verification_token: string;
  new_password: string;
}

export interface ForgotPasswordReq {
  email: string;
}

// export interface ChangePasswordToken {
//   token: string;
//   password: string;
// }

export interface ChangePassword {
  old_password: string;
  new_password: string;
}

export interface RefreshToken {
  refresh_token: string;
}

export interface LoginRes {
  success: boolean;
  processed_at: string | Date;
  error_message: string;
  refresh_token: string;
  access_token: string;
  user_profile: UserProfile;
}

export interface UserProfile {
  first_name: string;
  last_name: string;
  is_first: boolean;
}
