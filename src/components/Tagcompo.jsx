import React from 'react'
import "./Tagcompo.css"
const Tagcompo = ({tagName,selectTag,selected}) => {
  const tagStyle={
    Peak:{backgroundColor: "rgb(186, 118, 118)"},
    Steady:{backgroundColor: "rgb(232, 245, 161)"},
    Slow:{backgroundColor: "rgb(161, 245, 188)"},
    default:{backgroundColor: "#c297d3"},

  }
  return (
    <button 
    type='button'
    className='tagsUsed'
    style={selected? tagStyle[tagName]:tagStyle.default}
     onClick={()=> selectTag(tagName)}>
      {tagName}</button>
  );
};

export default Tagcompo