// views/princess/index.jsx

const React = require('react');
const DefaultLayout = require('../layout/Default.jsx');

class IndexPrincess extends React.Component {
    render() {
        const { princesses } = this.props;

        return (
            <DefaultLayout title="Princess Index Page">
                <nav>
                    <a href="/princesses/new">Create a New Princess</a>
                </nav>
                <ul>
                    {princesses.map((princess, i) => (
                        <li> 
                        The {' '}
                        <a href={`/princesses/${princess._id}`}>
                            {princess.name}
                        </a> {' '}
                        is {princess.movie} <br></br>
                        {princess.readyToWatch
                        ? `It is ready to watch`
                    : `It is not ready to watch`}
                    <br/>
                    <a href={`/princess/${prince._id} /edit`}>Edit This Princess</a>
                    <form action={`/princesses/${prince._id}?_method=DELETE`} method="POST">
                        <input type="submit"  value="DELETE"/>
                    </form>   
                         </li>
                    ))}
                </ul>
            </DefaultLayout>
        );
    }
}

module.exports = Index;