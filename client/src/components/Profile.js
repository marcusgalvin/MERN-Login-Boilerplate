import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'


const products = [
  {
    id: 1,
    name: "Apple",
    desc: "text",
    price: 100
  },
  {
    id: 2,
    name: "pear",
    desc: "text",
    price: 100
  },
  {
    id: 3,
    name: "orange",
    desc: "text",
    price: 100
  },
  {
    id: 4,
    name: "banana",
    desc: "text",
    price: 100
  },
  {
    id: 5,
    name: "grape",
    desc: "text",
    price: 100
  },
  {
    id: 6,
    name: "blueberry",
    desc: "text",
    price: 100
  },
  {
    id: 7,
    name: "raspberry",
    desc: "text",
    price: 100
  },
  {
    id: 8,
    name: "tangerine",
    desc: "text",
    price: 100
  },
  {
    id: 9,
    name: "grapefruit",
    desc: "text",
    price: 100
  },
  {
    id: 10,
    name: "mango",
    desc: "text",
    price: 100
  },
  {
    id: 11,
    name: "Kiwi",
    desc: "text",
    price: 100
  },
  {
    id: 12,
    name: "POM",
    desc: "text",
    price: 100
  },
];






class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Profile