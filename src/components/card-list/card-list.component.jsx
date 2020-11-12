import React from 'react';
import './card-list.styles.css';

/*props 
*About:props is a boject of Cardlist and it would also have chiledren otherwise it would be null
*Children: Anything or element we write in between Cardlist would be considered  the children of props
*eg:   <CardList name="bakait"> hello  </CardList>  in app.js file here hello is children of props
*/

//passing card-list component and rendering outside of the vid
export const CardList = props =>{
return  <div className="card-list">{props.children}</div>;
}
