import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: {
        by: 'name',
        value: 1
      }
    };

  }

  onGenerateData = () => {
    var tasks = [
      {
        id: this.generateRandomString(),
        name: 'ReactJS',
        status: true
      },
      {
        id: this.generateRandomString(),
        name: 'Nodejs',
        status: false
      },
      {
        id: this.generateRandomString(),
        name: 'FullStack',
        status: true
      },
    ];
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  randomString() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateRandomString() {
    return this.randomString() + '-' + this.randomString()
      + '-' + this.randomString() + '-' + this.randomString()
      + '-' + this.randomString() + '-' + this.randomString()
      + '-' + this.randomString() + '-' + this.randomString();
  }

  onToggleForm = () => {
    var { itemEditing } = this.props;
    if (itemEditing && itemEditing.id !== '') {
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }
    this.props.onClearTask({
      id: '',
      name: '',
      status: false
    });
  }

  onSort = (sort) => {
    this.setState({
      sort: sort,
    });
  }

  render() {
    var {
      //sort
    } = this.state;

    var {
      isDisplayForm
    } = this.props;

    // if (sort.by === 'name') {
    //   tasks.sort((a, b) => {
    //     if (a.name > b.name) return sort.value; // ASC
    //     else if (a.name < b.name) return -sort.value; // DESC
    //     else return 0; // Default
    //   });
    // } else {
    //   tasks.sort((a, b) => {
    //     if (a.status > b.status) return -sort.value;
    //     else if (a.status < b.status) return sort.value;
    //     else return 0; // Default
    //   });
    // }

    return (
      <div className="container">
        <div className="text-center">
          <h1>Task Management App</h1>
        </div>
        <div className="row">
          <div className={isDisplayForm === true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            {/* Form */}
            <TaskForm />
          </div>
          <div className={isDisplayForm === true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}
            >
              <span className="fa fa-plus mr-5"></span>Add New Task
            </button>
            <button
              type="button"
              className="btn btn-danger m-5"
              onClick={this.onGenerateData}
            >
              <span className="fa fa-plus mr-5"></span>Generate Data
            </button>
            {/* Search - Sort */}
            <TaskControl
              onSort={this.onSort}
            />
            {/* List */}
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.itemEditing
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm())
    },
    onClearTask: (task) => {
      dispatch(actions.editTask(task));
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
