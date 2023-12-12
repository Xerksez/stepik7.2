import React from 'react';

const JSXRules = ({ text }) => (
    <blockquote>
        {text}
    </blockquote>
);

const FancyTable = ({ n }) => {
    const listItems = [];
    for (let i = 1; i <= n; i++) {
        listItems.push(<li key={i}>{i}</li>);
    }

    return (
        <ul>
            {listItems}
        </ul>
    );
};

const Multiple = ({ name, number }) => {
    const listItems = [];
    for (let i = 1; i <= number; i++) {
        listItems.push(<li key={i}>{i}</li>);
    }

    return (
        <>
            <h2>{name}</h2>
            <ul>
                {listItems}
            </ul>
        </>
    );
};

const App = () => {
    return (
        <div>
            <JSXRules text="Tekst" />
            <FancyTable n={5} />
            <Multiple name="Przykład" number={3} />
        </div>
    );
};

export default App;