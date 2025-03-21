import { useState } from 'react';
import Bookcard from './components/bookcard';

function App() {
  const books = [
    {
      id: 1,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-lJyDxPLhZEukAKcNf3SI08rlDGvBac0oA&s',
      name: 'Dodge Challenger ',
      model: 'M5',
    },
    {
      id: 2,
      image: 'https://c.ndtvimg.com/2024-06/qftbgsro_2025-bmw-5-series-front_625x300_09_June_24.jpg?im=FitAndFill,algorithm=cascade,width=545,height=307',
      name: 'BMW',
      series: 5,
    },
    
  ];

  return <><Bookcard books={books}/></>;
}

export default App;