import React, {useState} from 'react';

const allTabs = [
  {button: 'Section 1', content: 'This is Section1'}
  ,{button: 'Section 2', content: 'This is Section2'}
];

const useTabs = (clickedIdx, tabs) => {
  const[curIdx, setItem] = useState(clickedIdx);
  return {
    item: tabs[curIdx],
    setItem
  }
};

const App = () => {
  const {item, setItem} = useTabs(0, allTabs);
  return (
    <div>
      {allTabs.map((tab, idx)  => <button onClick={()=>setItem(idx)}>{tab.button}</button> )}
      <div>{item.content}</div>
    </div>
  )
}

export default App;
