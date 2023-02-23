import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
    state = {
        students: [],
        cars: []
    }
    getStudentData = () => {
        axios.get('http://localhost:3000/api1/students').then(
            response => {
                console.log('成功了', response.data);
                this.setState({
                    students: response.data
                });
            },
            error => {console.log('失败了', error)}
        );
    }
    getCarsData = () => {
        axios.get('http://localhost:3000/api2/cars').then(
            response => {
                console.log('成功了', response.data);
                this.setState({
                    cars: response.data
                });
            },
            error => {console.log('失败了', error)}
        );
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button>
                <button onClick={this.getCarsData}>点我获取汽车数据</button>
                {this.state.students.length && this.state.students.map((student, index) => {
                    return (
                        <div key={student.id}>
                            <span>id: {student.id}</span>&nbsp;
                            <span>name: {student.name}</span>&nbsp;
                            <span>age: {student.age}</span>
                        </div>
                    );
                }) || null}
                <br />
                {this.state.cars.length && this.state.cars.map((car, index) => {
                    return (
                        <div key={car.id}>
                            <span>id: {car.id}</span>&nbsp;
                            <span>name: {car.name}</span>&nbsp;
                            <span>age: {car.price}</span>
                        </div>
                    );
                }) || null}
            </div>
        )
    }
}
