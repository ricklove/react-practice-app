import React, { Component } from 'react';
import columnsData from '../data/columns.json';

class ColumnsSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: []
        };
    }

    toggleColumn = (columnId) => {
        console.log('toggleColumn', columnId, this.state.selected);

        let selected = this.state.selected;
        if (selected.indexOf(columnId) >= 0) {
            selected = selected.filter(x => x != columnId);
        } else {
            selected = [...selected, columnId];
        }

        this.setState({ selected: selected })
    };

    render() {

        const columns = columnsData.columns.map(x => ({
            id: x.id,
            label: x.name + ' ' + x.source,
            checked: this.state.selected.indexOf(x.id) >= 0,
        }));

        return (
            <div>
                <div>Columns</div>
                {columns.map(x => (
                    <Column key={x.id} id={x.id} label={x.label} checked={x.checked} onToggle={() => this.toggleColumn(x.id)} />
                ))}
            </div>
        );
    }
}

const Column = ({ id, label, checked, onToggle }) => (
    <div id={id}>
        <input type='checkbox' onChange={onToggle} checked={checked} />
        <span>{label}</span>
    </div>
);

export default ColumnsSelector;