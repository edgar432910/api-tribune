// import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
// import { CustomMessages } from '../../exception/custom-messages';
// import { StringUtil } from '../../utils/string-util';

export class MailAuthCodeDto {
  @IsNotEmpty({ message: 'El nameUser es requerido' })
    nameUser: string ;

  @IsNotEmpty({ message: 'El id es requerido' })
    id:string;

  @IsNotEmpty({ message: 'El startDate es requerido' })
    startDate:string;

  @IsNotEmpty({ message: 'El endDate es requerido' })
    endDate:string;

  @IsNotEmpty({ message: 'El versionApp es requerido' })
   versionApp:string;
  
}
