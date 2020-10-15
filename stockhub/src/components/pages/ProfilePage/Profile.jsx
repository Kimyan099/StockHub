import React from 'react';
import '../ProfilePage/Profile.css';

function Profile() {
    return (

        <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src={require('../../../img/bird.jpg')} />
                        </div>
                        <div class="col-md-4">
                        <br/>
                        <ul class="profile-work">
                            <li>PROFILE</li>
                            <li><a href="">Overview</a></li>
                            <li><a href="">Stats</a></li>
                            <li><a href="">Porftolio</a></li>
                        </ul>
                    </div>
                    </div>
                    <div class="col-md-5">
                        <div class="profile-head">
                                    <h5>
                                        Duckee Duu
                                    </h5>
                                    <h6>
                                        Web Developer and Designer
                                    </h6>
                                    <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                            {/* <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </form>           
        </div>
    )
}

export default Profile
