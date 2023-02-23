import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
    state = {
        students: []
    }
    getStudentData = () => {
        axios.get('http://localhost:3000/students.html').then(
            response => {
                console.log('成功了', response.data);
                this.setState({
                    students: response.data
                });
            },
            error => {console.log('失败了', error)}
        );
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button>
                {this.state.students.map((student, index) => {
                    return (
                        <div key={student.id}>
                            <span>id: {student.id}</span>&nbsp;
                            <span>name: {student.name}</span>&nbsp;
                            <span>age: {student.age}</span>
                        </div>
                    );
                })}
            </div>
        )
    }
}
