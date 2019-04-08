import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { Search } from './components/Search';

import './App.css';
import axios from 'axios';
import ProfilePage  from './containers/ProfilePage';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/book')
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

  // logout = () => {
  //   localStorage.removeItem('jwtToken');
  //   window.location.reload();
  // }
  render() {
    
    return (
//       <div>
// <div className="container-fluid">
//         <div className="panel panel-default">
          /* <div className="panel-heading">
            <h3 className="panel-title">
               
              {localStorage.getItem('jwtToken') &&
                <button className="btn btn-primary" onClick={this.logout}>Logout</button>
              }
            </h3>
          </div> */
    //       <Router>
    //    <link href="https://fonts.googleapis.com/css?family=Montserrat:800" rel="stylesheet"></link>
    //    <Header/>
    //    <Section/>
    //    <FilteredList/>
       
    //    <Switch>
    //       {/* <Route path="/edit/:id" component={Edit}></Route> */}
    //     </Switch>
    //  </Router>
          /* <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {this.state.books.map(book =>
                  <tr>
                    <td><Link to={`/show/${book._id}`}>{book.isbn}</Link></td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div> */
       // </div>
     // </div>
     // <Footer/>
     // </div>
     <div>
       <link href="https://fonts.googleapis.com/css?family=Montserrat:800" rel="stylesheet"></link>
       <Header/>
       <Section/>
       <Search/>
      <Router>
       <Switch>
        </Switch>
     </Router>
        <Footer/>
     </div>
    
     
    );
  }
}

export default App;
