import * as React from 'react';

import Counter from 'components/counter/Counter';

import styles from './App.sss'; 

const App = () => (
    <div className={styles.base} >
        <a href="#">App</a>
        <Counter />
    </div>
);

export default App;
