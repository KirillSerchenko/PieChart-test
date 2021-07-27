import React, { Component } from 'react';
import { PieChart, Pie, Tooltip } from "recharts";


export default class Chart extends Component {

    state = {
        size1: undefined,
        size2: undefined,
        size3: undefined
    }

    val = undefined

    componentDidMount() {
        this.setState(() => this.computeRandomSizes());
        this.val = setTimeout(this.props.toogleChart, 5000);
    }

    componentWillUnmount() {
        clearTimeout(this.val);
    }

    computeRandomSizes = () => {
        const random = (range) => Math.floor(Math.random() * range)
        return [1, 2, 3].reduce((acc, currentVal, index) => {
            return { ...acc,[`size${index+1}`]: random(100) }
        }, {})
    }

    getPieChartData = () => Object.keys(this.state).map((key, ind) => ({ name: `Group${ind + 1}`, value: this.state[key] }));
    

    render() {
        return (
             <PieChart width={600} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={this.getPieChartData()}
                    cx={200}
                    cy={200}
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>
    )
}
}