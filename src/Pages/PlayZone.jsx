import React, { useEffect, useState, useRef } from 'react'

let level = (localStorage.getItem("level")) || "";

const getData = (level) => {
    return fetch(`http://localhost:4500/quiz?difficulty=${level}`).then((res) => res.json())
}

const getUser = () => {
    return fetch(`http://localhost:4500/user`).then((res) => res.json())
}

const PlayZone = () => {
    const [data, setData] = useState("")
    const [input, setInput] = useState("")
    const [score, setScore] = useState(0)
    const [time, setTime] = useState(10)
    const [id, setID] = useState()


    const x = (val) => {
        let a = input;
        let b = a + val;
        setInput(b)

        if (data.length == input.length) {
            console.log(data, input)
            if (data === input) {
                alert("matched correctly")
                let m = score + data.length
                setScore(m)
                setInput("")
            } else {
                alert("not matched")
                let m = score - data.length
                setScore(m)
                setInput("")
            }
        }

    }
    setTimeout(() => {
        if (time == 0) {
            console.log("done")
            fetch(`http://localhost:4500/user/${id}`, {
                method: "PATCH",
                body: JSON.stringify(score),
                headers: {
                    "content-Type": "application/json"
                }
            })
        } else {
            setTime(time - 1);
        }

    }, 1000);

    useEffect(() => {
        getData(level).then((res) => setData(res[0]))
        getUser().then((res) => setID(res[res.length - 1]._id))
    }, [])
    console.log("#", data, data.length, input, input.length, id, score)

    return (
        <div>
            <h1>PlayZone</h1>
            <h2>WORD : {data}</h2>
            <h3>COUNT DOWN : {time}</h3>

            <div style={{
                disply: "grid",
                gridTemplateRows: "auto", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"
                , gap: '25px', border: '1px solid blue', padding: "10px 0px", borderRadius: '25px',
                width: '50%', margin: '25px auto', backgroundColor: '#2e2e30'
            }}>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="~">~</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="1">1</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="2">2</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="3">3</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="4">4</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="5">5</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="6">6</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="7">7</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="8">8</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="9">9</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="0">0</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="">delete</button>
                <br />
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }}>Tab</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="q">Q</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="w">W</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="e">E</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="r">R</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="t">T</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="y">Y</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="u">U</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="i">I</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="o">O</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="p">P</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="/">/</button>
                <br />
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="">Caps</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="a">A</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="s">S</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="d">D</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="f">F</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="g">G</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="h">H</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="j">J</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="k">K</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="l">L</button>
                <button style={{ margin: "10px 5px", padding: '10px 20px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="">Enter</button>
                <br />
                <button style={{ margin: "10px 5px", padding: '10px 47px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }}>Shift</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="z">Z</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="x">X</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="c">C</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="v">V</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="b">B</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="n">N</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }} onClick={(e) => x(e.target.value)} value="m">M</button>
                <button style={{ margin: "10px 5px", padding: '10px 47px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }}>Shift</button>
                <br />



                <button style={{ margin: "5px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }}>Control</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }}>Option</button>
                <button style={{ margin: "10px 5px", padding: '10px 95px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }}>Space</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }}>Alt</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }}>Option</button>
                <button style={{ margin: "10px 5px", padding: '10px 15px', fontSize: '20px', backgroundColor: '#8b8b8c', color: 'skyblue' }}>Alt</button>

            </div>
        </div>
    )
}

export default PlayZone