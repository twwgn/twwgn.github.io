import './App.css';
import data from './data.json';

function App() {
    return (
        <div className="App">
            <header>
                <h1>Ради этого умирали наши предки</h1>
            </header>
            <div className="container" >
                <h2>Может пора уже <b>увидеть</b> правду</h2>
            {data.map(d => {
                return <div key={d.fileName} className="media_container" >
                    <p>{d.fileName}</p>
                    {d.text && <div className="text_div" dangerouslySetInnerHTML={{__html: d.text}} /> }
                    {d.ext.toLowerCase() === 'png' || d.ext.toLowerCase() === 'jpg' ?
                        <img alt={d.fileName} style={{objectFit: 'contain'}}
                             src={`./media/${d.fileName}`}/> :
                        <video controls>
                            <source src={`./media/${d.fileName}`} type={`video/${d.ext.toLowerCase()}`}/>
                            Your browser does not support the video tag.
                        </video>
                    }
                </div>
            })}
                <h2>Это ещё не конец...</h2>
            </div>
        </div>
    );
}

export default App;
