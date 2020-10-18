export interface UserLoginCommand {
    user: UserLoginUserData
}

export interface UserLoginUserData {
    email: string;
    password: string;
}