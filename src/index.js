import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// function getGreeting(user) {
//   if(user) {
//     return <h1>Hello, {formatName(user)}!!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>
// }

// const user = {
//   firstName: 'Lawrence',
//   lastName: 'Ni'
// };

// const fullName = formatName(user)


// const root = ReactDOM.createRoot(document.getElementById('root'));

// const test = getGreeting(user)

// root.render(
// <h1>{test}</h1>
// );

// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, {fullName}!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
// }

// setInterval(tick, 1000);


// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// // class Welcome extends React.Component {
// //   render() {
// //     return <h1>Hello, {this.props.name}</h1>;
// //   }
// // }

// function App2() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const element = <Welcome firstName='Lawrence' lastName='Ni'/>;

// root.render(<App2 />);

/////////////////////////////////////////////
// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Avatar(props) {
//   return (
//     <img className="Avatar"
//              src={props.user.avatarUrl}
//              alt={props.user.name} />
//   );
// }

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//         <Avatar user={props.user} />
//         <div className="UserInfo-name">
//           {props.user.name}
//         </div>
//     </div>
//   );
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }


// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React! <-> >',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author} />
// );

////////////////////////////////////

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
// }
////////////////////////////////////////////////////
// function FormattedDate(props) {
//   return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
// }

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return(
//       <div>
//         <h1>Hello, world!</h1>
//         <FormattedDate date={this.state.date}/>
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));



// // root.render(<Clock />);

// function App() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   );
// }

// root.render(<App />);
// 1. root render Clock
// 2. Clock constructor
// 3. Clock render for the DOM
// 4. run componentDidMount after Dom is ready!

/////////////////////////////////////////////////////
//Handling events
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Toggle />);

/////////////////////////////////////////////////////
//conditional rendering



class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if(isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<LoginControl />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
