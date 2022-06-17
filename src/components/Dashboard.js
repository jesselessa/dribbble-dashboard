// REACT
import React from "react";
// OTHER LIBRARIES
import styled from "styled-components";
import { Icon } from "@iconify/react";
// IMAGES
import smiley from "../assets/smiley.png";
import search from "../assets/search.png";
import circle from "../assets/circle-16.png";
import calendar from "../assets/calendar-24.png";
import filter from "../assets/filter-30.png";
import avatar1 from "../assets/batman.png";
import avatar2 from "../assets/woman.png";
import avatar3 from "../assets/man.png";

export default function Dashboard() {
  return (
    <DashboardWrapper>
      <HeaderWrapper>
        <div className="intro">
          <div className="reminder">
            <p>Remaining Task</p>

            <input
              className="searchbar1"
              type="search"
              placeholder="Search inspiration for ..."
            />
          </div>
          <input
            type="search"
            className="searchbar2"
            placeholder="Search anything ..."
          />
        </div>

        <div className="activeTasks">
          <div>
            <h1>Active Tasks</h1>
            <p>You can edit all the stuff as you wish.</p>
          </div>
          <div className="buttons">
            <select name="agenda" id="agenda">
              <option>Today</option>
            </select>
            <select name="filters" id="filters">
              <option>Filters</option>
            </select>
          </div>
        </div>
      </HeaderWrapper>

      <MainWrapper>
        <div className="wrapper">
          <div className="milestones">
            <h2>Milestones</h2>
            <div className="milestonesBox">
              <Icon
                icon="noto:rocket"
                color="#5152e2"
                width="100"
                height="100"
                className="rocket"
              />
              <div className="message">
                <p className="text">There are no milestones for today</p>
                <img src={smiley} className="smiley" alt="smiley" />
              </div>
              <p className="subtext">You can create milestones.</p>
              <button type="button" class="add">
                <Icon
                  icon="fluent:add-12-filled"
                  color="#5152e2"
                  className="addIcon"
                />
                Create Milestone
              </button>
            </div>
          </div>

          <div className="taskSummary">
            <h2>Task Summary</h2>

            <div className="summary">
              <div className="projects">
                <div className="estimation">
                  <Icon
                    icon="bi:clipboard-check"
                    color="#33007b"
                    width="32"
                    className="icon"
                  />
                  <h3>Project estimate</h3>
                </div>

                <div className="total">
                  <div className="projectsNumber">
                    <div className="i1">
                      <Icon icon="bi:graph-up" color="white" width="30" />
                    </div>
                    <p>Projects</p>

                    <p className="nb">23</p>
                  </div>
                  <div className="assigned">
                    <div className="i2">
                      <Icon icon="bi:clipboard-plus" color="white" width="30" />
                    </div>
                    <p>Assigned</p>
                    <p className="nb">72</p>
                  </div>
                  <div className="completed">
                    <div className="i3">
                      <Icon
                        icon="bi:clipboard-check"
                        color="#33007b"
                        width="30"
                      />{" "}
                    </div>
                    <p>Completed</p>
                    <p className="nb">40</p>
                  </div>
                </div>
                <div className="stats">
                  <p>On time completion rate :</p>
                  <div className="pourcents">
                    <div className="p1">
                      <p>94%</p>
                    </div>
                    <div className="p2">
                      <Icon
                        icon="bi:arrow-up-right"
                        color="white"
                        width="16"
                        className="icon"
                      />{" "}
                      <p>2.3%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team">
                <div className="title">
                  <Icon
                    icon="bi:people"
                    color="#33007b"
                    width="32"
                    className="icon"
                  />
                  <h3>Our team</h3>
                </div>

                <p className="members">Team members</p>

                <div className="pictures">
                  <div className="pic">
                    <img src={avatar1} alt="batman" />
                  </div>
                  <div className="pic">
                    <img src={avatar2} alt="woman" />
                  </div>
                  <div className="pic">
                    <img src={avatar3} alt="man" />
                  </div>
                  <div className="pic pic4">
                    <p>+5</p>
                  </div>
                </div>

                <div className="totalHoursBox">
                  <div className="totalHours">
                    <p>Hours</p>
                    <p className="th">82</p>
                  </div>
                  <Icon
                    icon="icomoon-free:spinner2"
                    color="#5152e2"
                    width="45"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <TasksList>
          <div className="tasks">
            <h2>Tasks</h2>
            <div className="seeList">
              <p>See All Tasks</p>
              <select name="btnList" id="btnList"></select>
            </div>
          </div>

          <div className="task">
            <div className="start">
              <div className="play">
                <Icon
                  icon="bi:play-circle-fill"
                  color="#5152e2"
                  width="36"
                  className="icon btnPlay"
                />
              </div>

              <div class="hour">
                <h3>Start from</h3>
                <div className="time">
                  <Icon
                    icon="bi:clock"
                    color="gray"
                    width="24"
                    className="icon"
                  />
                  <p>9.00 am</p>
                </div>
              </div>
            </div>

            <div className="title">
              <h3>Search Inspiration for Project</h3>
              <div className="details">
                <div className="link">
                  <Icon icon="bi:paperclip" color="gray" width="24" />
                  <p>
                    <a href="#" target="_blank">
                      www.dribble.com
                    </a>
                  </p>
                </div>
                <div className="comments">
                  <Icon
                    icon="bi:chat-left-dots"
                    color="gray"
                    width="24"
                    className="icon"
                  />
                  <p>8 comments</p>
                </div>
              </div>
            </div>

            <div className="progression">
              <h3>24% complete</h3>
              <div className="greyBar">
                <div className="progressBar b1"></div>
              </div>
            </div>

            <div className="reminder">
              <div className="alarm">
                <Icon
                  icon="bi:alarm"
                  color="#5152e2"
                  width="24"
                  className="icon"
                />
                <p>Reminder</p>
              </div>
            </div>
          </div>
          <div className="task">
            <div className="start">
              <div className="play">
                <Icon
                  icon="bi:play-circle-fill"
                  color="#5152e2"
                  width="36"
                  className="icon btnPlay"
                />
              </div>

              <div class="hour">
                <h3>Start from</h3>
                <div className="time">
                  <Icon
                    icon="bi:clock"
                    color="gray"
                    width="24"
                    className="icon"
                  />
                  <p>3.00 pm</p>
                </div>
              </div>
            </div>

            <div className="title">
              <h3>Website Redesign</h3>
              <div className="details">
                <div className="link">
                  <Icon icon="bi:paperclip" color="gray" width="24" />
                  <p>
                    <a href="#" target="_blank">
                      www.kensho.co
                    </a>
                  </p>
                </div>
                <div className="comments">
                  <Icon
                    icon="bi:chat-left-dots"
                    color="gray"
                    width="24"
                    className="icon"
                  />
                  <p>4 comments</p>
                </div>
              </div>
            </div>

            <div className="progression">
              <h3>60% complete</h3>
              <div className="greyBar">
                <div className="progressBar b2"></div>
              </div>
            </div>

            <div className="reminder">
              <div className="alarm">
                <Icon
                  icon="bi:alarm"
                  color="#5152e2"
                  width="24"
                  className="icon"
                />
                <p>Reminder</p>
              </div>
            </div>
          </div>
        </TasksList>
      </MainWrapper>
    </DashboardWrapper>
  );
}

//! ****************** STYLES ****************//

const DashboardWrapper = styled.section`
  position: relative;
  width: 70vw;
  min-height: 100vh;
  max-width: 100%;
  //************* MEDIA QUERIES ****************//
  @media screen and (max-width: 1355px) {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    body {
      font-size: 1.4rem;
    }
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.6rem;
    }
    h3 {
      font-size: 1.4rem;
    }
  }
`;

const HeaderWrapper = styled.header`
  padding: 1rem 2rem 0 8vw;
  .intro {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10rem;
    padding-bottom: 2rem;
    border-bottom: 0.2rem solid #e6e9f2;
    max-width: 100%;
  }
  .reminder {
    display: flex;
    align-items: center;
  }
  .reminder p {
    margin-right: 1rem;
    font-size: 1.7rem;
    font-weight: bold;
  }
  .searchbar1 {
    background: url(${circle}) no-repeat 5%/4%, black;
    color: white;
    font-weight: 500;
    width: 20rem;
    padding-left: 2.5rem;
  }
  .searchbar2 {
    background: url(${search}) no-repeat 95%/10%, #f3f4f8;
    width: 25rem;
    padding-left: 1rem;
  }
  .searchbar1,
  .searchbar2 {
    height: 3.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    border: none;
  }
  .activeTasks {
    display: flex;
    justify-content: space-between;
    height: 15rem;
    max-width: 100%;
  }
  .activeTasks h1 {
    font-size: 3rem;
    padding: 2rem 0 1rem 0;
  }
  .activeTasks p {
    color: grey;
  }
  .buttons {
    display: flex;
  }
  select {
    width: 10rem;
    height: 3rem;
    font-weight: 600;
    color: #33007b;
    border-radius: 0.5rem;
    margin-top: 2rem;
    padding-left: 3rem;
  }
  #agenda {
    margin-right: 1rem;
    background: url(${calendar}) no-repeat 5%/20%;
  }
  #filters {
    background: url(${filter}) no-repeat 5%/20%;
  }
  .btn {
    display: flex;
  }
  //************* MEDIA QUERIES ****************//
  @media screen and (max-width: 1355px) {
    padding-top: 0;
    width: 100%;
    height: auto;
    .intro {
      padding-bottom: 4rem;
      height: auto;
    }
  }

  @media screen and (max-width: 768px) {
    padding-left: 1rem;
  }
  .intro,
  .activeTasks {
    height: auto;
  }
  .intro {
    margin-top: 0;
    gap: 0.5rem;
  }
  .activeTasks {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 755px) {
    padding-right: 1rem;
    .intro,
    .reminder,
    .activeTasks {
      flex-direction: column;
    }
    .activeTasks {
      text-align: center;
    }
    .buttons {
      justify-content: space-between;
    }
    .reminder p,
    .searchbar1 {
      margin-bottom: 1rem;
    }
    .searchbar2 {
      width: 20rem;
    }
  }
`;

// MAIN
const MainWrapper = styled.main`
  height: 100%;
  padding: 1rem 2rem 0 8vw;
  background: #f3f4f8;
  max-width: 100%;
  .wrapper {
    display: flex;
    gap: 1rem;
  }
  h2 {
    font-size: 1.8rem;
    padding: 2rem 0;
  }
  .milestones {
    width: 28vw;
    height: 35rem;
  }
  .milestonesBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    height: 25rem;
    line-height: 1.8;
    border-radius: 2rem;
    padding: 0.5rem;
    background: #5152e2;
  }
  .rocket {
    overflow: visible;
    margin-top: -5rem;
    margin-bottom: 2rem;
  }
  .message {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .text {
    font-weight: 600;
    text-align: center;
  }
  .smiley {
    width: 2rem;
    height: 2rem;
  }
  .subtext {
    font-size: 1.4rem;
    color: lightgrey;
  }
  .add {
    color: #5152e2;
    background: white;
    font-weight: 600;
    height: 3.2rem;
    width: 90%;
    border-radius: 1rem;
    border: none;
    margin-top: 3rem;
    line-height: 50%;
  }
  .addIcon {
    margin-right: 0.5rem;
    vertical-align: middle;
  }
  .taskSummary {
    width: 72vw;
    height: 35rem;
  }
  .summary {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 25rem;
    border-radius: 2rem;
    background: white;
  }
  .summary h3 {
    padding-bottom: 2rem;
  }
  .projects {
    width: 70%;
    height: 100%;
    padding: 0.5rem;
  }
  .total,
  .estimation,
  .stats,
  .pourcents {
    display: flex;
  }
  .total {
    height: 65%;
    width: 100%;
    gap: 1rem;
  }
  .projectsNumber,
  .assigned,
  .completed {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 30%;
    border-radius: 1rem;
    background: red;
  }
  .projectsNumber {
    background: black;
    color: white;
  }
  .assigned {
    background: #1da8ff;
    color: white;
  }
  .nb {
    font-size: 2rem;
    font-weight: 600;
    margin-top: 1rem;
  }
  .completed {
    background: white;
    -webkit-box-shadow: 0.5rem 0.5rem 1.6rem -0.4rem rgba(0, 0, 0, 0.62);
    box-shadow: 0.5rem 0.5rem 1.6rem -0.4rem rgba(0, 0, 0, 0.62);
  }
  .completed .nb {
    color: #5152e2;
  }
  .i1,
  .i2,
  .i3 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
  }
  .i1,
  .i2 {
    border: 0.1px solid white;
  }
  .i3 {
    border: 0.1rem solid #33007b;
  }
  .stats {
    justify-content: space-around;
    align-items: center;
    margin-top: 2rem;
  }
  .stats p {
    color: grey;
  }
  .p1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
  }
  .p1 p {
    color: #33007b;
    font-size: 2.5rem;
    font-weight: 600;
  }
  .p2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 2.5rem;
    background: #5152e2;
    border-radius: 0.5rem;
  }
  .p2 p {
    color: white;
    font-weight: 600;
  }
  .team {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 30%;
    max-width: 100%;
    height: 100%;
    padding: 0.5rem;
  }
  .title {
    display: flex;
    width: 100%;
  }
  .title h3 {
    text-align: center;
  }
  .members {
    margin-bottom: 3rem;
    width: 100%;
  }
  .members,
  .totalHours p {
    color: grey;
  }
  .pictures {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 5rem;
    margin: 0 auto 5rem auto;
    max-width: 100%;
  }
  .pic {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    object-fit: contain;
    border: 0.2rem solid white;
    margin-left: -1.5rem;
  }
  .pic img {
    width: 4.5rem;
  }
  .pic4 {
    background: white;
    font-weight: bold;
    font-size: 1.8rem;
    -webkit-box-shadow: 0.5rem 0.5rem 1.6rem -0.4rem rgba(0, 0, 0, 0.62);
    box-shadow: 0.5rem 0.5rem 1.6rem -0.4rem rgba(0, 0, 0, 0.62);
    width: 4.5rem;
  }
  .icon {
    margin-right: 0.5rem;
  }
  .totalHoursBox {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border: 0.1rem solid grey;
    border-radius: 2rem;
    height: 70%;
  }
  .totalHours {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .totalHours .th {
    color: #33007b;
    font-size: 2rem;
    font-weight: 600;
  }
  //************* MEDIA QUERIES ***************//
  @media screen and (max-width: 900px) {
    .rocket {
      margin-top: -2rem;
      margin-bottom: -0.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 1rem;
    height: auto;
    .wrapper,
    .milestones,
    .milestonesBox,
    .taskSummary,
    .summary,
    .projects,
    .estimation,
    .total,
    .projectsNumber,
    .assigned,
    .completed,
    .team {
      height: auto;
    }
    .projectsNumber,
    .assigned,
    .completed {
      padding: 1rem 0;
    }
    .add {
      margin-top: 1rem;
    }
    .stats p {
      font-size: 1.4rem;
    }
    .p1 p {
      font-size: 2rem;
    }
    .pic,
    .pic img {
      width: 4rem;
      height: 4rem;
    }
    .alarm {
      font-size: 1.3rem;
    }
    .link,
    .comments,
    .time {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 755px) {
    text-align: center;
    .wrapper,
    .summary,
    .task,
    .total,
    .stats {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .milestones,
    .taskSummary,
    .summary,
    .projects,
    .team,
    .team title,
    .pictures {
      width: 100%;
    }
    .milestonesBox {
      padding-bottom: 2rem;
    }
    .total {
      padding-bottom: 0;
    }
    .milestonesBox,
    .projectsNumber,
    .assigned,
    .completed,
    .totalHoursBox {
      width: 80%;
    }
    .projectsNumber,
    .assigned,
    .completed {
      padding: 2rem 0;
    }
    .milestones,
    .total,
    .team {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 2rem;
    }
    .estimation,
    .pourcents,
    .team .title {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .estimation h3 {
      padding-bottom: 0;
    }
    .estimation,
    .stats,
    .stats p,
    .team .title,
    .members {
      margin-bottom: 1rem;
    }
    .pictures {
      margin-bottom: 2rem;
    }
  }
`;

const TasksList = styled.section`
  height: auto;
  background: #f3f4f8;
  .tasks {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .seeList {
    display: flex;
    font-weight: 600;
  }
  select {
    border: none;
    background: #f3f4f8;
  }
  h2 {
    font-size: 1.8rem;
    padding-bottom: 2rem;
  }
  .task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    height: 10rem;
    border-radius: 1rem;
    width: 100%;
    margin-bottom: 2rem;
  }
  .task h3 {
    padding-bottom: 2rem;
  }
  .start {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem;
    width: 20%;
    height: 100%;
    background: #fbfaff;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
  }
  .btnPlay {
    -webkit-box-shadow: 0px 0.8rem 1.2rem -0.1rem rgba(0, 0, 0, 0.39);
    box-shadow: 0px 0.8rem 1.2rem -0.1rem rgba(0, 0, 0, 0.39);
  }
  .time {
    display: flex;
    color: gray;
  }
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 40%;
    height: 100%;
    padding: 0.5rem;
  }
  .title a {
    text-decoration: none;
    color: #5152e2;
  }
  .details {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .link,
  .comments {
    display: flex;
  }
  .comments {
    color: grey;
  }
  .progression {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 100%;
  }
  .progressBar {
    height: 1.2rem;
    border-radius: 0.5rem;
  }
  .b1 {
    width: 24%;
    background: #1da8ff;
  }

  .b2 {
    width: 60%;
    background: #5152e2;
  }
  .greyBar {
    width: 90%;
    height: 1.2rem;
    background: lightgrey;
    border-radius: 0.5rem;
  }
  .reminder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #5152e2;
    font-weight: 600;
    width: 15%;
    height: 100%;
  }
  .alarm {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 5rem;
    border-radius: 1rem;
    background: #edecfe;
  }
  .icon {
    margin-right: 0.5rem;
  }
  //************* MEDIA QUERIES ****************//
  @media screen and (max-width: 768px) {
    height: auto;
    .tasks,
    .task,
    .start,
    .play,
    .hour,
    .title,
    .progression,
    .reminder {
      height: auto;
    }
  }
  @media screen and (max-width: 755px) {
    .start {
      border-top-right-radius: 1rem;
      margin-bottom: 1rem;
    }
    .start,
    .title,
    .progression,
    .reminder {
      width: 100%;
    }
    .reminder {
      padding: 1rem;
    }

    h3 {
      text-align: center;
    }

    .alarm {
      width: 60%;
    }
    .details {
      flex-direction: column;
    }
    .time,
    .title,
    .details {
      justify-content: center;
      align-items: center;
    }
    .link,
    .comments,
    .progression {
      margin-bottom: 1.5rem;
    }
  }
`;
