import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator";



export class SignupDto {
    
    // @IsNotEmpty({ message: 'Введите фио' })
    // @MinLength(3,{message:"минимальная длина 3 символа"})
    // @MaxLength(150,{message:"максимальная длина 150 символа"})
    fullname:string;
    
    // @IsEmail({},{message:"не корректный email"})
    // @IsNotEmpty({ message: 'Введите email' })
    email:string;

    // @IsNotEmpty({ message: 'Введите номер телефона' })
    phone:string;

    // @MinLength(3,{message:"минимальная длина 3 символа"})
    // @MaxLength(100,{message:"максимальная длина 100 символа"})
    password:string;

}

export class SigninDto {
    @IsEmail({},{message:"не корректный email"})
    @MinLength(3,{message:"минимальная длина 3 символа"})
    @MaxLength(100,{message:"максимальная длина 100 символа"})
    email:string;
 
    @MinLength(3,{message:"минимальная длина 3 символа"})
    @MaxLength(100,{message:"максимальная длина 100 символа"})
    password:string;
}

export class IResponse {
    isAuth:boolean
}

