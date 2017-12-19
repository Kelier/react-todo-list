import React, {Component} from 'react';
import ListItem from './listitem';
import Dialog from './dialog';
import './box.css';

class Todobox extends Component {
    constructor(props) {
        super(props);
        //设置列表
        this.state = {
            list: [
                {
                    id: '0',
                    name: 'eat',
                    status: 0
                },
                {
                    id: '1',
                    name: 'sleep',
                    status: 1
                },
                {
                    id: '2',
                    name: 'play',
                    status: 0
                }
            ],
            finished: 0


        }

        this.updateFinished=this.updateFinished.bind(this);
        this.updateTotal=this.updateTotal.bind(this);
    }

    addTask(newTask) {
        var allTask = this.state.list;
        allTask.push(newTask);
        this.setState({
            list: allTask
        });
    }

    updateFinished(todoitem) {
        var sum = 0;
        this.state.list.forEach(function (item) {
            if (todoitem.id === item.id) {
                item.status = todoitem.status;
            }
            if (item.status === 1) {
                sum++;
            }
        });
        this.setState({
            finished: sum
        });
    }

    updateTotal(todoitem) {
        var obj = [], sum = 0;
        this.state.list.forEach(function (item) {
            if (item.id !== todoitem.id) {
                obj.push(item);
                if (item.id === 1) {
                    sum++;
                }
            }
        });
        this.setState({
            list: obj,
            finished: sum
        })

    }

    render() {
        return (
            <div className="container">
                <h1>Todobox</h1>
                <ul>
                    {

                        this.state.list.map(function (item, index) {
                            return <ListItem item={item} finishedChange={this.updateFinished} totalChange={this.updateTotal} key={index} />
                        }.bind(this))
                    }
                    <li>{this.state.finished} has achieved sumpoint:{this.state.list.length}</li>
                </ul>
                <Dialog addNewTask={this.addTask.bind(this)} nums={this.state.list.length}/>
            </div>
        );
    }
}

export default Todobox;

