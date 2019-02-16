import {Row} from "../models/Row";
import {ColumnService} from "./ColumnService";

import {findIndex} from 'lodash';
import store from "@/store/store";


export abstract class RowService {

    public static createNew(columnLayout: string[]): Row {
        const row = new Row();

        columnLayout.forEach((c: string) => {
            row.columns.push(
                ColumnService.createNew(c)
            )
        });
        return row;
    }

    public static createFromExisting(oldRow: any) {
        let row = new Row();

        try {
            row.id = oldRow.id;
            row.sorting = oldRow.sorting;
            row.expanded = oldRow.expanded;
            row.custom_class = oldRow.custom_row;

            if (oldRow.columns && oldRow.columns.length) {

                oldRow.columns.forEach((c: any) => {
                    let column = ColumnService.createFromExisting(c);
                    row.columns.push(column);
                })
            }
            return row;
        } catch (e) {
            console.error(e);
            return row;
        }
    }

    public static delete(row: Row) {
        if (row.id && row.id !== 0) {
            store.dispatch('deleteRow', row);
        } else {
            store.state.article.rows.splice(row.sorting, 1);
        }
    }
}