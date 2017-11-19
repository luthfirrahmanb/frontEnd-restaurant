/* tslint:disable */

declare var Object: any;
export interface TableBookingInterface {
  "id"?: number;
  "name"?: string;
  "address"?: string;
  "email"?: string;
  "contactNumber"?: number;
  "bookDate"?: Date;
  "numberOfPeople"?: number;
  "tableDataId"?: number;
}

export class TableBooking implements TableBookingInterface {
  "id": number;
  "name": string;
  "address": string;
  "email": string;
  "contactNumber": number;
  "bookDate": Date;
  "numberOfPeople": number;
  "tableDataId": number;
  constructor(data?: TableBookingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TableBooking`.
   */
  public static getModelName() {
    return "TableBooking";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TableBooking for dynamic purposes.
  **/
  public static factory(data: TableBookingInterface): TableBooking{
    return new TableBooking(data);
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
      name: 'TableBooking',
      plural: 'TableBookings',
      path: 'TableBookings',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "address": {
          name: 'address',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "contactNumber": {
          name: 'contactNumber',
          type: 'number'
        },
        "bookDate": {
          name: 'bookDate',
          type: 'Date'
        },
        "numberOfPeople": {
          name: 'numberOfPeople',
          type: 'number'
        },
        "tableDataId": {
          name: 'tableDataId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
