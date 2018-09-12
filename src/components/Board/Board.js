import React from 'react';
import './Board.css';

class Board extends React.Component{
    constructor(){
        super();
        this.state = {
            startPoint: {
                pageX: 0,
                pageY: 0,
            },
            currentPoint: {
                pageX: 0,
                pageY: 0,
            },
            stopPoint: {
                pageX: 0,
                pageY: 0,
            },
        }
    }
    // 鼠标按下
    mouseDown(e){
        // console.log(e.nativeEvent);
        const { pageX, pageY } = e.nativeEvent;
        this.setState({
            startPoint: {
                pageX, pageY
            }
        })
    }
    // 鼠标移动
    mouseMove(e){
        // console.log(e.nativeEvent);
        const { pageX, pageY } = e.nativeEvent;
        this.setState({
            currentPoint: {
                pageX, pageY
            }
        })
    }
    // 鼠标抬起
    mouseUp(e){
        // console.log(e.nativeEvent);
        const { pageX, pageY } = e.nativeEvent;
        this.setState({
            stopPoint: {
                pageX, pageY
            }
        })
    }



    render(){
        const { startPoint, currentPoint, stopPoint } = this.state;

        return (
            <div
                className="board"
                onMouseDown = { e => this.mouseDown(e)}
                onMouseMove = { e => this.mouseMove(e)}
                onMouseUp = { e => this.mouseUp(e)}
            >
                <div className="position-info">
                    <p>Start:( {startPoint.pageX}, {startPoint.pageY} )</p>
                    <p>Current:( {currentPoint.pageX}, {currentPoint.pageY} )</p>
                    <p>Stop:( {stopPoint.pageX}, {stopPoint.pageY} )</p>
                </div>


                <div className="points">
                    <i className="start-point" style={{
                        position:'absolute',
                        top:currentPoint.pageY,
                        left:currentPoint.pageX,
                        width: '10px',
                        height: '10px',
                        background: 'red',
                        borderRadius:'50%',
                        transform: `translate(-50%, -50%)`
                    }} ></i>
                    <i className="current-point"></i>
                    <i className="stop-point"></i>
                </div>
            </div>
        )
    }
}

export default Board;