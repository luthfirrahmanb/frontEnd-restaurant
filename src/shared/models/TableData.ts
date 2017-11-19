/* tslint:disable */
import {
  TableBooking
} from '../index';

declare var Object: any;
export interface TableDataInterface {
  "id"?: number;
  "name"?: number;
  "description"?: string;
  "isBooked"?: boolean;
  tableBooking?: TableBooking[];
}

export class TableData implements TableDataInterface {
  "id": number;
  "name": number;
  "description": string;
  "isBooked": boolean;
  tableBooking: TableBooking[];
  constructor(data?: TableDataInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TableData`.
   */
  public static getModelName() {
    return "TableData";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TableData for dynamic purposes.
  **/
  public static factory(data: TableDataInterface): TableData{
    return new TableData(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'TableData',
      plural: 'TableData',
      path: 'TableData',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "name": {
          name: 'name',
          type: 'number'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "isBooked": {
          name: 'isBooked',
          type: 'boolean'
        },
      },
      relations: {
        tableBooking: {
          name: 'tableBooking',
          type: 'TableBooking[]',
          model: 'TableBooking',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'tableDataId'
        },
      }
    }
  }
}
