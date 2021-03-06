import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskSort extends React.Component {
    onClick = (sortBy, sortValue) => {
        this.props.onSort({
            by: sortBy,
            value: sortValue
        });
    }

    render() {
        var { sort } = this.props;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                    >
                        Sort <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() => this.onClick('name', 1)}>
                            <a
                                href="/#"
                                role="button"
                                className={
                                    (sort.by === 'name' && sort.value === 1)
                                        ? 'sort_selected' : ''
                                }
                            >
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Name A-Z
                                    <i className={(sort.by === 'name' && sort.value === 1) ? 'fas fa-check float-right' : ''} />
                                </span>
                            </a>
                        </li>
                        <li onClick={() => this.onClick('name', -1)}>
                            <a
                                href="/#"
                                role="button"
                                className={
                                    (sort.by === 'name' && sort.value === -1)
                                        ? 'sort_selected' : ''
                                }
                            >
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Name Z-A
                                    <i className={(sort.by === 'name' && sort.value === -1) ? 'fas fa-check float-right' : ''} />
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider">
                            <hr />
                        </li>
                        <li onClick={() => this.onClick('status', 1)}>
                            <a
                                href="/#"
                                role="button"
                                className={
                                    (sort.by === 'status' && sort.value === 1)
                                        ? 'sort_selected' : ''
                                }
                            >
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Status: Active
                                    <i className={(sort.by === 'status' && sort.value === 1) ? 'fas fa-check float-right' : ''} />
                                </span>
                            </a>
                        </li>
                        <li onClick={() => this.onClick('status', -1)}>
                            <a
                                href="/#"
                                role="button"
                                className={
                                    (sort.by === 'status' && sort.value === -1)
                                        ? 'sort_selected' : ''
                                }
                            >
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Status: Inactive
                                    <i className={(sort.by === 'status' && sort.value === -1) ? 'fas fa-check float-right' : ''} />
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sort: state.sort
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (sort) => {
            dispatch(actions.sortTask(sort));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskSort);
