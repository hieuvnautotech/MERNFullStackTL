import {useDispatch} from 'react-redux'
import * as actions from './redux/actions'
function App() {
  const dispatch = useDispatch()
  dispatch(actions.getPosts.getPostRequest())
  return (
    <p>
      haha
    </p>
  );
}

export default App;
