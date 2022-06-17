// REACT
import React from "react";
// OTHER LIBRARIES
import { Icon } from "@iconify/react";
// STYLED COMPONENTS
import styled from "styled-components";
// IMAGES
import bgImg from "../assets/bg-img.png";
import profilePic from "../assets/afro-woman.png";
import meeting from "../assets/meeting.jpg";
import office from "../assets/office.jpg";

export default function Agenda() {
  return (
    <GlobalWrapper>
      <Notifs>
        <div className="navbar">
          <Icon
            icon="bi:justify"
            color="#33007b"
            width="30"
            className="burger"
          />
          <Icon icon="carbon:notification-new" color="#33007b" width="30" />
          <div className="profile">
            <img src={profilePic} alt="profile" className="profileImg" />
            <select name="profileList" id="profileList"></select>
          </div>
        </div>
        <div className="bgImage"></div>
        <div className="website">
          <h1>Website Redesign</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>

        <div className="borderBottom"></div>
      </Notifs>
      <Calendar>
        <div className="week">
          <h2>October 2021</h2>
          <div className="calendarBtn">
            <Icon
              icon="akar-icons:circle-chevron-left"
              color="#bebebe"
              className="chevronLeft"
            />

            <Icon icon="akar-icons:circle-chevron-right" color="#33007b" />
          </div>
        </div>
        <div className="dates">
          <div className="date">
            <div className="day">Mon</div>
            <div className="number">14</div>
          </div>
          <div className="date">
            <div className="day">Tue</div>
            <div className="number">15</div>
          </div>
          <div className="date">
            <div className="day">Wed</div>
            <div className="number sixteen">16</div>
          </div>
          <div className="date">
            <div className="day">Thu</div>
            <div className="number">17</div>
          </div>
          <div className="date">
            <div className="day">Fri</div>
            <div className="number">18</div>
          </div>
          <div className="date">
            <div className="day">Sat</div>
            <div className="number">19</div>
          </div>
          <div className="date">
            <div className="day">Sun</div>
            <div className="number">20</div>
          </div>
        </div>

        <div className="meetings">
          <MeetingWrapper>
            <div className="icon meeting"></div>
            <div className="title">
              <h3>Meeting with Client</h3>

              <div className="description">
                <div className="details">
                  <Icon
                    icon="bi:camera-video"
                    color="gray"
                    width="24"
                    className="camera"
                  />
                  <p>Zoom Meeting</p>
                </div>
                <div className="time">
                  <Icon
                    icon="bi:clock"
                    color="gray"
                    width="24"
                    className="clock"
                  />
                  <p>09 am</p>
                </div>
              </div>
            </div>
          </MeetingWrapper>

          <hr />

          <MeetingWrapper>
            <div className="icon office"></div>
            <div className="title">
              <h3>Deal with New Client</h3>

              <div className="description">
                <div className="details">
                  <Icon
                    icon="bi:camera-video"
                    color="gray"
                    width="24"
                    className="camera"
                  />
                  <p>Zoom Meeting</p>
                </div>
                <div className="time">
                  <Icon
                    icon="bi:clock"
                    color="gray"
                    width="24"
                    className="clock"
                  />
                  <p>03 pm</p>
                </div>
              </div>
            </div>
          </MeetingWrapper>
          <hr />
        </div>
      </Calendar>
    </GlobalWrapper>
  );
}

//! ****************** STYLES ******************//

const GlobalWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  hr {
    border: none;
    height: 0.2rem;
    background: #e6e9f2;
  }
  //************* MEDIA QUERIES ****************//
  @media screen and (max-width: 1355px) {
    width: 100%;
    padding-left: 8vw;
  }
  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;

const Notifs = styled.section`
  width: 100%;
  height: 50vh;
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7vh;
    width: 100%;
    padding: 0 1rem;
  }
  .burger {
    display: none;
  }
  select {
    border: none;
  }
  .bgImage {
    background: url(${bgImg}) no-repeat center/ cover;
    height: 28vh;
  }
  .website {
    height: 15vh;
    text-align: center;
    line-height: 1.5;
  }
  .website h1 {
    font-size: 3rem;
    padding: 1rem 0;
  }
  .website p {
    color: grey;
    padding: 0 1rem;
  }
  .borderBottom {
    height: 0.2rem;
    width: 95%;
    background: #e6e9f2;
    margin: auto;
  }
  //************* MEDIA QUERIES ****************//
  @media screen and (max-width: 768px) {
    height: auto;
    .borderBottom {
      margin-top: 2rem;
    }
    .burger {
      display: block;
    }
    .website {
      height: auto;
    }
  }
`;

const Calendar = styled.section`
  height: 50vh;
  width: 100%;
  padding: 2rem 1rem;
  line-height: 2;
  .profileImg {
    margin-right: 0.5rem;
  }
  h2 {
    font-size: 1.8rem;
  }
  .chevronLeft {
    margin-right: 0.5rem;
  }
  .month,
  .calendarBtn,
  .dates,
  .week {
    display: flex;
  }
  .week,
  .dates {
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }
  .day,
  .number {
    width: 3.5rem;
    height: 3.5rem;
  }
  .day {
    color: grey;
  }
  .number {
    font-size: 1.7rem;
    font-weight: 600;
  }
  .sixteen,
  .date {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .sixteen {
    border-radius: 50%;
    background: #5152e2;
    color: white;
    -webkit-box-shadow: 0px 0.8rem 1.2rem -0.1rem rgba(0, 0, 0, 0.39);
    box-shadow: 0px 0.8rem 1.2rem -0.1rem rgba(0, 0, 0, 0.39);
  }
  //************* MEDIA QUERIES ****************//
  @media screen and (max-width: 1355px) {
    height: auto;
    .meetings {
      height: auto;
    }
  }
  @media screen and (max-width: 768px) {
    height: auto {

    }
  }
`;

const MeetingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 1rem;
  height: 10rem;
  width: 100%;
  margin: 2rem 0;
  .icon {
    width: 25%;
    height: 10rem;
    margin-right: 0.5rem;
    border-radius: 1rem;
  }
  .title {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 75%;
  }
  .description,
  .details {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .description {
    width: 100%;
    color: grey;
    font-weight: medium;
  }
  .meeting {
    background: url(${meeting}) no-repeat center/cover;
  }
  .office {
    background: url(${office}) no-repeat center/cover;
  }
  .camera,
  .clock {
    margin-right: 0.5rem;
  }
  .time {
    display: flex;
    align-items: center;
  }
  //************* MEDIA QUERIES ****************//
  @media screen and (max-width: 768px) {
    height: auto;
  }
  @media screen and (max-width: 755px) {
    flex-direction: column;
    .icon,
    .title {
      width: 100%;
      text-align: center;
      align-items: center;
    }
  }
`;
