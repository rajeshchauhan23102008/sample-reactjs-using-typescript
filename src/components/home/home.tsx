import * as React from 'react';

interface HomeProps {
    name: string,
    age: number
}

export class Home extends React.Component<HomeProps, {}> {
    render() {
        return (
            <div>
                Hi { this.props.name }, hope you are keep good health at the age of { this.props.age} !!!
            </div>
        );
    }
}