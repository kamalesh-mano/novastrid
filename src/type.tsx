export enum StatusI{
    COMPLETED='COMPLETED',
    UNCOMPLETED='UNCOMPLETED',
    DELETED='DELETED'
  }
export interface TaskI{
    taskName:string;
    status:StatusI;
    taskId:string;
  }
export enum FilterStatus {
  SHOWALL='SHOWALL',
  COMPLETED='COMPLETED',
  UNCOMPLETED='UNCOMPLETED'
}