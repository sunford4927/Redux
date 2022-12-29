import { createStore } from 'redux';

// 기본 설정
var initState = {
    mode: 'WELCOME', // 모드(WELCOME, READ, CREATE, DELETE, UPDATE)중 기본값 
    welcome_content:{
        title:'WEB', // 제목 기본값
        desc:'Hello, WEB' // 내용 기본값
    },
    selected_content_id:1, // ID 기본값 
    max_content_id : 3 , // 고정된 contents ID의 최댓값 
    contents:[ // contents 기본값
        {id:1, title:'HTML', desc:'HTML is ...'},
        {id:2, title:'CSS', desc:'CSS is ...'},
        {id:3, title:'JS', desc:'JS is ...'}

    ]
    
}
// state : 기본설정, action : 변화하는 값
function reducer(state=initState, action){

        if(action.type === 'WELCOME'){
            return {...state, mode:'WELCOME'}
        }
        if(action.type === 'READ'){
            return {...state, mode:'READ',
        selected_content_id:action.id}
        }
        if(action.type === 'CREATE'){
            return {...state, mode:'CREATE',
        selected_content_id:action.id}
        }
        if(action.type === 'CREATE_PROCESS'){
            var newId =state.max_content_id+1
            var newContents = [...state.contents, {
                id: newId,
                title:action.title,
                desc:action.desc
            }];
            return {
                ...state,
                contents:newContents,
                max_content_id:newId,
                mode:'READ',
                selected_content_id:newId
            }
        }
        if(action.type ==='UPDATE'){
            return {...state, mode:'UPDATE'}
        }
        if(action.type === 'UPDATE_PROCESS'){
            var newContents = [...state.contents]
            for(var i=0; i<newContents.length; i++){
                if(newContents[i].id === action.id){
                    newContents[i].title = action.title;
                    newContents[i].desc = action.desc;
                }
            }
            return {
                ...state,
                contents:newContents,
                mode:'READ',
                selected_content_id:action.id
            }
        }
        if(action.type ==='DELETE_PROCESS'){
            var newContents = state.contents.filter(function(e){
                if(e.id === state.selected_content_id){
                    return false;
                }
                return true;
            })
            return {
                ...state,
                contents:newContents,
                mode:'WELCOME'
            }
        }
        return state;
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());