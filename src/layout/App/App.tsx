import * as React from 'react';

import Counter from 'components/counter/Counter';

import * as styles from './App.sss';

const App: React.SFC = () => (
    <div
        className={styles.base}
    >
        <a href="#">App</a>
        <Counter />
    </div>
);

export default App;
