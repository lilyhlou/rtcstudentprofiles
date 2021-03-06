import React, { Component, Fragment } from 'react';
import pic from './icon.png';
import './App.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import screen_shot from './screen_shot.png';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navigation from "./navigation.js";
import { Breakpoint } from 'react-socks';

function Profile() {
	return (
    // <div><Navigation /></div>
		<div className="profiles">
      <Breakpoint large up>
      <header className="App-header">
        <h1> Name </h1>
        <div className="email">
        	<h2>Email:</h2>
          <p>example@gmail.com</p>
        </div>
        <div className="based">
        	<h2>Based In: </h2>
          <p>NC, U.S.</p>
        </div>
        <img src={pic} alt="profile" className="profile"></img>
      </header>
      </Breakpoint>
      <Breakpoint medium down>
      <header className="App-header2">
        <h1 id="smallh1"> Name </h1>
        <div id="based2">
          <h2>Based In: </h2>
          <p>NC, U.S.</p>
        </div>
        <div id="email2">
          <h2>Email:</h2>
          <p>example@gmail.com</p>
        </div>
        </header>
        <div id="profile2"><img src={pic} alt="profile"></img></div>
      </Breakpoint>
      <Breakpoint large up>
      <div className="body">
      <div className="clearfloat"></div>
      <div className="job">
      		<h2>Experience</h2>
      		<ul>
        		<li>Position 1</li>
        		<li>Position 2</li>
            <li>Position 3</li>
        	</ul>
        	<div className="vertical"></div>
      </div>
      	<div className="hs">
      		<h2>High School</h2>
      		<ul>
        		<li>(Hometown)</li>
        		<li>Ranking</li>
            <li>Faculty Info</li>
        	</ul>
        	<div className="vertical"></div>
      	</div>
      	<div className="date2">
      		<p>2014-2018</p>
      	</div>
      	<div className="clearfloat"></div>
      	<hr></hr>
      	<div className="date1">
      		<p>2010-2014</p>
      	</div>
      	<div className="date3">
      		<p>2018-Present</p>
      	</div>
      	<div className="college">
      		<div className="vertical"></div>
        	<h2>College</h2>
        	<ul>
        		<li>Location</li>
        		<li>Description</li>
        	</ul>
        </div>
      </div>
      </Breakpoint>
      <Breakpoint medium down>
        <div id="body2">
        <div className="vertical2"></div>
        <div className="dates">
          <h4>2010-2014</h4>
        </div>
        <div className="vertical2"></div>
        <div id="hs2">
          <h2>High School</h2>
          <ul>
            <li>(Hometown)</li>
            <li>Ranking</li>
            <li>Faculty Info</li>
          </ul>
        </div>
        <div className="vertical2"></div>
        <div className="dates">
          <h4>2014-2018</h4>
        </div>
        <div className="vertical2"></div>
        <div id="college2">
          <h2>College</h2>
          <ul>
            <li>Location</li>
            <li>Description</li>
          </ul>
        </div>
        <div className="vertical2"></div>
        <div className="dates">
          <h4>2018-Present</h4>
        </div>
        <div className="vertical2"></div>
        <div id="job2">
          <h2>Experience</h2>
          <ul>
            <li>Position 1</li>
            <li>Position 2</li>
            <li>Position 3</li>
          </ul>
        </div>
        </div>
        <footer className="Footer"> © Rewriting the Code</footer>
      </Breakpoint>
      </div>
		);
}

export default Profile;

// <div className="interests1">
//          <h3>Tech Interests</h3>
//        </div>
//       <div className="interests2">
//         <h3>Other Interests</h3>
//       </div>
