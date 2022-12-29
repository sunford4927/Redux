import { connect } from 'react-redux';
import Nav from '../components/Nav';

export default connect(
    function(state){
        return{data:state.contents}
    },
    function(dispatch){
        return {
            onClick:function(id){
                dispatch({type:'READ', id:id});
            }
        }
    }
)(Nav);
// 12-26 02:56분 학습종료 https://youtu.be/Cwwsv_OaWhM?t=2686