import React, {PropTypes, Component } from 'react';
import { Header } from '../components/Header';
import axios from 'axios';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/profilePage')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }
  render() { 
      return ( 
          <div>
            <Header/>
              <h1>profile page</h1>
          </div>
       );
  }
}


ProfilePage.propTypes = {
};

export default ProfilePage;