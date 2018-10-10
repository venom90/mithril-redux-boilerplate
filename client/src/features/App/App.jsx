import m from 'mithril';
import {connect} from 'mithril-redux';

class App {
  view() {
    return (
      <div>
        <h1>Applicaiton init</h1>
      </div>
    );
  }
}

export default connect((state) => ({test: state.test}), {})(App);