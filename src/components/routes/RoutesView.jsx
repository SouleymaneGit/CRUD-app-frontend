import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SingleCampusContainer, AllPlayersContainer, AllStudentsContainer, AllCompusesContainer, SingleStudentContainer } from '../containers';
const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={AllPlayersContainer} />
      <Route exact path="/all-students" component={AllStudentsContainer} />
      <Route exact path="/all-compuses" component={AllCompusesContainer} />
      <Route  path = "/students/:studentid" component = {SingleStudentContainer} />
      <Route exact path="/singleCampus/:id" component={SingleCampusContainer} />
    </Switch>
  )
}

export default RoutesView;
