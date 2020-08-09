import React from 'react';

class TaskItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <tr>
                <td>1</td>
                <td>Love ReactJS</td>
                <td className="text-center">
                    <span className="label label-danger">Active</span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning">
                        <span className="fa fa-pencil mr-5"></span>Edit
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger">
                        <span className="fa fa-pencil mr-5"></span>Delete
                    </button>
                </td>
            </tr>
        );
    }
}

TaskItem.propTypes = {

};

export default TaskItem;