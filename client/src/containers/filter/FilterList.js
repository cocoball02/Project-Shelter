import { connect } from "react-redux";
import FilterList from "../../components/filter/FilterList";

const mapStateToProps = state => ({
  shelters: state.filterReducer.shelters,
});

export default connect(mapStateToProps)(FilterList);
