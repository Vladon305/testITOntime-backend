import { IDefaultValue, IFieldType } from '../entities/field.entity';

export class CreateFieldDto {
  type: IFieldType;

  required?: boolean;

  defaultValue?: IDefaultValue;

  name: string;

  description: string;
}
