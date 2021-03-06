export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return (
                {...state,
                    friends: [
                    ...state.friends,
                    action.friend
                    ]
                }
                // Object.assign({}, state, {friends: [action.friend]})
            )
  
        case "REMOVE_FRIEND":
            const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
            console.log("friends", state.friends)
            console.log("action", action)
            return (
                {...state,
                    friends: [
                    ...state.friends.slice(0, removalIndex),
                    ...state.friends.slice(removalIndex + 1)
                    ]
                }
            )
  
        default:
            return state;
    }
  }