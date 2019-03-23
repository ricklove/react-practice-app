import React, { Component } from "react";
import { ListBox } from "@bit/primefaces.primereact.listbox";
import PrimereactStyle from "@bit/primefaces.primereact.internal.stylelinks";
import { columnsData, IColumnData } from "../data/columns";

// const columns = columnsData.columns.map(x => ({ ...x, title: x.name + " " + x.source }));

const Column = ({ name, source }: IColumnData) => (
    <div><span style={{ fontWeight: "bold" }}>{name}</span> {source}</div>
);

class ColumnsSelector extends Component<{}, { columns: IColumnData[] }> {
    constructor(props: any) {
        super(props);
        this.state = {
            columns: []
        };
    }

    selectItem = ({ value }: { value: IColumnData[] }) => {
        this.setState({ columns: value });
    }

    render() {

        return (
            <div>
                <PrimereactStyle />
                <div>Columns</div>
                <ListBox
                    value={this.state.columns}
                    options={columnsData.columns}
                    onChange={this.selectItem}
                    multiple={true}
                    dataKey="id"
                    optionLabel="title"
                    itemTemplate={Column}
                />
            </div>
        );
    }
}

export default ColumnsSelector;