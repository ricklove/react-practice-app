import React, { Component } from "react";
import { columnsData, IColumnData } from "../data/columns";
import { ListBox } from "primereact/listbox";


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

    Column = ({ id, name, source }: IColumnData) => (
        <div id={id}><span style={{ fontWeight: "bold" }}>{name}</span> {source}</div>
    )

    render() {

        const columns = columnsData.columns.map(x => ({ ...x, key: x.id, title: x.name + " " + x.source }));

        return (
            <div>
                <h3>Columns</h3>
                <ListBox
                    value={this.state.columns}
                    options={columns}
                    onChange={this.selectItem}
                    multiple={true}
                    dataKey="id"
                    optionLabel="title"
                    itemTemplate={this.Column}
                />
            </div>
        );
    }
}

export default ColumnsSelector;