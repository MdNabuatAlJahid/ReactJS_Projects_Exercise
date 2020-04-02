import React, {Component} from 'react';

class Profile extends Component{
    render(){
        return (
                <div className= "Container">
                    <div className="Bio"> 
                        <h3>Md Nabuat Al Jahid</h3>
                        <p>I am a JavaScript Developer</p>
                    </div>
                    <div className="Skills">
                        <h3>Skills: </h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>ReactJs</li>
                            <li>GatsbyJs</li>
                        </ul>
                    </div>
                    <div className="Links">
                        <h3>Social Links:</h3>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/nabuat.jahid">Facebook</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/md-nabuat-al-jahid-866626134/">Linkedin</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )
    }
}

export default Profile;