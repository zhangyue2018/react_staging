import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createAddPersonAction} from '../../redux/actions/person';
 
class Person extends Component {

    addPerson = () => {
        let userName = this.nameNode.value, userAge = this.ageNode.value;
        let maxId = this.props.personList.length;
        let newPerson = {
            id: ++maxId + '',
            name: userName,
            age: userAge
        };
        this.props.addPerson(newPerson);
    }

    render() {
        return (
            <div>
                <h2>我是Person组件，上方组件求和为：{this.props.count}</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder='输入名字'/>
                <input ref={c => this.ageNode = c} type="text" placeholder='输入年龄'/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.personList.map(person => <li key={person.id}>{person.name}---{person.age}</li>)
                    }
                    
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        personList: state.personList,
        count: state.count
    }
}



export default connect(mapStateToProps, {addPerson: createAddPersonAction})(Person);
