import React from "react";
import { connect } from "react-redux";

import SortByNavBar from "../../components/SortByNavBar";
import { getCurrentSortOption } from "../../reducers/sortBy";

const SortByNavBarContainer = props => {
  return <SortByNavBar />;
};

const mapStateToProps = state => ({
  currentSortOption: getCurrentSortOption(state)
});

export default connect(mapStateToProps)(SortByNavBarContainer);
