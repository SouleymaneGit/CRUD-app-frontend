import React from 'react'
import './styles/style.css';
// import PropTypes from 'prop-types';
import {Link, Redirect} from 'react-router-dom'

class SingleStudent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            firstName: '',
            lastName: '',
            email: '',
            gpa: 0,
            campusId: null,
            edit: false,
            campus: null,
            imageUrl: ''
        }
    }

    linkToCampus = (campus ) => {
        return <Link to = {`/campuses/${campus.id}`}>{campus.name}</Link>
    }

    handleSubmit = e => {
        this.setState({
            edit: false
        })
        this.props.updateStudent(this.state)
        return <Redirect to={`/students/${this.props.id}/`}/>
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSelect = e => {
        console.log(Number(e.target.value))
        this.setState({
            campusId: Number(e.target.value)
        })
    }
    handleEditClick = () => {
        this.setState({
            edit: true,
            id: this.props.student.id
        })
    }
    cancelSubmit = () => {
        this.setState({
            id: 0,
            firstName: '',
            lastName: '',
            email: '',
            gpa: 0,
            campusId: null,
            edit: false,
            campus: null,
            imageUrl: ''
        })
    }
    render(){
        return ( !this.state.edit ?
            <div className = 'singlestudent'>
                {console.log(this.props.student.id)}
                <div>
                    <h3>{this.props.student.firstName} {this.props.student.lastName}</h3>
                    <div>
                        <img src = {this.props.student.imageUrl} alt = 'profile' />
                    </div>
                    <p>email:  {this.props.student.email}</p>
                    <p>gpa: {this.props.student.gpa}</p>
                    <div>
                        <p>Campus</p>
                        <p>{this.props.student.campus ? this.linkToCampus(this.props.student.campus) : 'no campus available'}</p>
                    </div>
                </div>
                <button onClick = {this.handleEditClick}>Edit Student</button>
            </div>
            :
            <div className = "container updateCampus">
            <form onSubmit = {this.handleSubmit}>
                <div className = 'form-group'>
                <label>
                    First name:
                    </label>
                    <input type = 'text' onChange = {this.handleChange} name = 'firstName' required = {true} placeholder = {this.props.student.firstName} className="form-control"/>
                
                </div>
                <div className = 'form-group' >
                <label>
                    Last name:
                    </label>
                    <input type = 'text' onChange = {this.handleChange} name = 'lastName' required = {true}  placeholder = {this.props.student.lastName} className="form-control"/>
                
                </div>
                <div className = 'form-group'>
                <label>
                    Email:
                    </label>
                    <input type = 'email' onChange = {this.handleChange} name = 'email' required = {true}  placeholder = {this.props.student.email} className="form-control"/>
                
                </div>

                <div className = 'form-group'>
                <label>
                    Image Url:
                    </label>
                    <input type = 'text' onChange = {this.handleChange} name = 'imageUrl' required = {false}  placeholder = "Add an image link" className="form-control"/>
               
                </div>

                <div className = 'form-group'>
                <label>
                    GPA:
                    </label>
                    <input type = 'number' min = {0} max = {4} onChange = {this.handleChange} name = 'gpa' placeholder = {this.props.student.gpa} className="form-control"/>
               
                </div>
                <div>
                <select onChange = {this.handleSelect} name = 'campusId' className="selectpicker">
                    <option value = {this.props.student.campusId}>Select A School</option>
                    {this.props.campuses.map((campus, index) => {
                        return <option key = {index} value = {Number(campus.id)}>{campus.name}</option>
                    })}
                </select>
                </div> <br />
                    <input type = 'submit' className="btn btn-primary" />
            </form>
            <br />
            <button onClick = {this.cancelSubmit} className="btn btn-primary">Cancel</button>
        </div>
        )
    }
}

export default SingleStudent