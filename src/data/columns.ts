import columnsDataRaw from "./columns.json";

export interface IColumnsData {
    columns_count: number;
    columns: IColumnData[];
}
export interface IColumnData {
    name: string;
    id: string;
    type: string;
    source: string;
}

export const columnsData = columnsDataRaw as IColumnsData;